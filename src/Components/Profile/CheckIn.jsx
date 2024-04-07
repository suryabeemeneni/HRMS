import axios from "axios";
import React, { useEffect, useState } from "react";
import NavMenuProfile from "./NavMenuProfile";

const CheckIn = (props) => {
  const name = props.name;
  const { setIsActive, setActiveTab} = props;

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [loginTime, setLoginTime] = useState("");
  const [totalTime, setTotalTime] = useState(0);
  const [LoginLocation, setLoginLocation] = useState("");
  const [lati, setLati] = useState("");
  const [longi, setLongi] = useState("");
  const [userId, setUserId] = useState(null);
  const [lunch, setLunch] = useState(false);

  const [logoutTime, setLogoutTime] = useState("");
  const [LogoutLocation, setLogoutLocation] = useState("");
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  const [lati1, setLati1] = useState("");
  const [longi1, setLongi1] = useState("");

  const [checkinSucess, setCheckinSucess] = useState(false);
  const [checkoutSucess, setCheckoutSucess] = useState(false);
  const [lunchSucess, setLunchSucess] = useState(false);

  const [halfdayError, setHalfdayError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [checkinError, setCheckinError] = useState(false);
  const [checkoutError, setCheckoutError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [server503Error, setServer503Error] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [dailyReportError, setDailyReportError] = useState(false);
  const [lunchPop, setLunchPop] = useState(false);
  const [lunchError, setLunchError] = useState(false);
  const [lunchPopError, setLunchPopError] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  // ---------------- auto hide error popup after 5 seconds ----------------- //
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showErrorMessage]);

  // ----------------- auto relaod page after check in and check after 5 secnds ------------ //

  const [reloadPage, setReloadPage] = useState(false);

  useEffect(() => {
    if (reloadPage) {
      const reloadTimer = setTimeout(() => {
        window.location.reload();
      }, 5000);

      return () => clearTimeout(reloadTimer);
    }
  }, [reloadPage]);

  // ----------------time interval for checkin  ----------------- //

  let timerInterval;

  const startTimer = () => {
    const startTime = localStorage.getItem("timerStartTime") || Date.now();
    timerInterval = setInterval(() => {
      const elapsedTime = Math.floor(Date.now() - startTime);
      setTotalTime(elapsedTime / 1000);
    }, 1000);

    return timerInterval;
  };

  // ------------------- formate of time ------------------------- //
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  };
  
  
  useEffect(() => {
    if (savedLoginStatus === "true") {
      const savedLoginTime = localStorage.getItem("loginTime");
      const savedLocation = localStorage.getItem("location");
      const savedUserId = localStorage.getItem("userId");
      setIsLoggedIn(true);
      setLoginTime(savedLoginTime);
      setLoginLocation(savedLocation);
      setUserId(savedUserId);
      setIsLoginDisabled(true);
      timerInterval = startTimer();
    }
  }, []);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const timeInHours = currentHour + currentMinutes / 60;

  const savedLoginStatus = localStorage.getItem("Check In");
  const report = localStorage.getItem("namerepo");
  const Lunch = localStorage.getItem("Lunch");

  const handleLogin = () => {
    setActiveTab('')
    if (navigator.onLine) {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const timeInHours = currentHour + currentMinutes / 60;

      // Check if the current time is between 10:15 am and 2:15 pm
      if (timeInHours >= 10.5 && timeInHours <= 14.25) {
        setShowErrorMessage(true);
        setHalfdayError(true);
        return;
      } else {
        const formattedTime = currentTime.toLocaleTimeString();
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const location = `${latitude},${longitude}`;

            setLoginTime(formattedTime);
            setLoginLocation(location);
            setLati(latitude);
            setLongi(longitude);

            //   Save login status and data to local storage
            if (userId) {
              localStorage.setItem("userId", userId);
            }

            //   Start or resume the time
            timerInterval = startTimer();
            localStorage.setItem("timerStartTime", Date.now());
            axios
              .post("https://empadmin.hola9.com/account/employeelogin2", {
                date: currentTime,
                name: name,
                login_time: formattedTime,
                longitude1: longitude,
                lattiude1: latitude,
              })
              .then((response) => {
                const retrievedUserId = response.data.id;
                localStorage.setItem("retrievedUserId", retrievedUserId);
                localStorage.setItem("Check In", "true");
                localStorage.setItem("check in Time", formattedTime);
                localStorage.setItem("location", location);
                setShowErrorMessage(true);
                setReloadPage(true);
                setCheckinSucess(true);
                setUserId(retrievedUserId);
                setIsLoggedIn(true);
                timerInterval = startTimer();
                console.log("Login data sent successfully:", response.data);
              })
              .catch((error) => {
                setIsLoggedIn(false);
                setShowErrorMessage(true);
                setCheckinError(true);
              });
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            setShowErrorMessage(true);
            setLocationError(true);
          }
        );
      }
    } else {
      setShowErrorMessage(true);
      setNetworkError(true);
    }
  };

  // --------------------------- handle logout -------------------------- //

  const handleLogout = () => {
    setActiveTab('')
    if (report) {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString();

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = `${latitude},${longitude}`;

          setLogoutTime(formattedTime);
          setLogoutLocation(location);
          setIsLoginDisabled(false);
          setLati1(latitude);
          setLongi1(longitude);

          // Clear login status and data from local storage
          const retrievedUserId = localStorage.getItem("retrievedUserId");

          // Remove the timer start time from local storage
          clearInterval(timerInterval);

          // Check if retrievedUserId is available
          if (retrievedUserId) {
            axios
              .put(
                `https://empadmin.hola9.com/account/employeelogin2/${retrievedUserId}`,
                {
                  logout_time: formattedTime,
                  longitude2: longitude,
                  lattiude2: latitude,
                  total_time: `${Math.floor(totalTime / 60)}m ${Math.floor(
                    totalTime % 60
                  )}s`,
                }
              )
              .then((response) => {
                console.log("Logout data sent successfully:", response.data);
                setShowErrorMessage(true);
                setCheckoutSucess(true);
                setReloadPage(true);

                localStorage.removeItem("retrievedUserId");
                localStorage.removeItem("timerStartTime");
                localStorage.removeItem("Check In");
                localStorage.removeItem("loginTime");
                localStorage.removeItem("location1");
                localStorage.removeItem("namerepo");
                localStorage.removeItem("Lunch");
              })
              .catch((error) => {
                console.error("Error sending logout data:", error);
                setShowErrorMessage(true);
                setCheckoutError(true);
                if (
                  error.response &&
                  error.response.status === 500 &&
                  error.response.status === 503
                ) {
                  setServer503Error(true);
                  setShowErrorMessage(true);
                } else {
                  setServerError(true);
                  setShowErrorMessage(true);
                }

                // Clear login status and data from local storage
                const retrievedUserId = localStorage.getItem("retrievedUserId");

                // Check if retrievedUserId is available
                if (retrievedUserId) {
                  // Now, send the logout data using retrievedUserId directly
                  axios
                    .put(
                      `https://empadmin.hola9.com/account/employeelogin2/${retrievedUserId}`,
                      {
                        logout_time: formattedTime,
                        longitude2: longitude,
                        lattiude2: latitude,
                        total_time: `${Math.floor(
                          totalTime / 60
                        )}m ${Math.floor(totalTime % 60)}s`, // Send formatted time
                      }
                    )
                    .then((response) => {
                      console.log(
                        "Logout data sent successfully:",
                        response.data
                      );
                      setShowErrorMessage(true);
                      setCheckoutSucess(true);
                      setReloadPage(true);
                      localStorage.removeItem("retrievedUserId");
                      localStorage.removeItem("timerStartTime");
                      localStorage.removeItem("Check In");
                      localStorage.removeItem("loginTime");
                      localStorage.removeItem("location1");
                      localStorage.removeItem("namerepo");
                      localStorage.removeItem("Lunch");
                    })
                    .catch((error) => {
                      setShowErrorMessage(true);
                      setCheckoutError(true);
                    });
                }
              });
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setShowErrorMessage(true);
          setLocationError(true);
        }
      );
    } else {
      setShowErrorMessage(true);
      setDailyReportError(true);
      setIsActive("Daily report");
    }
  };

  // --------------------- handle  lunch ------------------------- //
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");

  const handleTimeChange = (e, setTime) => {
    const value = e.target.value;
    setTime(value);
  };

  const handleLunch = () => {
    if (!time1 || !time2) {
      setLunchPopError(true)
      return;
    }
    const retrievedUserId = localStorage.getItem("retrievedUserId");

    axios
      .put(
        `https://empadmin.hola9.com/account/employeelogin2/${retrievedUserId}`,
        {
          lunch_break_checkin: time1 + "pm",
          lunch_break_checkout: time2 + "pm",
        }
      )
      .then((response) => {
        console.log("Logout data sent successfully:", response.data);
        localStorage.setItem("Lunch", name);
        setLunchSucess(true);
        setShowErrorMessage(true);
      })
      .catch((error) => {
        console.log("luch time error", error);
        setLunchError(true);
        setShowErrorMessage(true);
      });
  };

  // ----------------------- auto logout ----------------------- /
  // if (timeInHours >= 20.3) {
  //   const retrievedUserId = localStorage.getItem("retrievedUserId");

  //   // Remove the timer start time from local storage
  //   clearInterval(timerInterval);

  //   // Check if retrievedUserId is available
  //   if (retrievedUserId) {
  //     // Now, send the logout data using retrievedUserId directly
  //     axios
  //       .put(
  //         `https://empadmin.hola9.com/account/employeelogin2/${retrievedUserId}`,
  //         {
  //           logout_time: "--",
  //           longitude2: "--",
  //           lattiude2: "--",
  //         }
  //       )
  //       .then((response) => {
  //         if (response) {
  //           setIsLoggedIn(false);
  //           localStorage.removeItem("retrievedUserId");
  //           localStorage.removeItem("timerStartTime");
  //           localStorage.removeItem("isLoggedIn");
  //           localStorage.removeItem("loginTime");
  //           localStorage.removeItem("location1");
  //           localStorage.removeItem("namerepo");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error logging out:", error);
  //         setShowErrorMessage(true);
  //         setCheckoutError(true);
  //       });
  //   }
  // }


  const logoutOnclick = () => {
    setLunchPop(true)
    setActiveTab('')
  }

  return (
    <>
      <button
        className="button"
        style={{
          background: savedLoginStatus
            ? ""
            : timeInHours < 10.5 && timeInHours > 14.25
            ? "#cccccc"
            : timeInHours >= 10.0 && timeInHours <= 10.5
            ? "linear-gradient(to right, rgb(220, 58, 69), rgba(0, 149, 246, 0.5))"
            : timeInHours >= 10.5 && timeInHours <= 14.25
            ? "lightgray"
            : "",

          cursor:
            !savedLoginStatus && timeInHours >= 10.5 && timeInHours <= 14.25
              ? "not-allowed"
              : "pointer",
          fontSize:
            !savedLoginStatus && timeInHours >= 10.0 && timeInHours <= 14.25
              ? "50%"
              : "75%",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={
          savedLoginStatus
            ? timeInHours >= 8.0 && timeInHours < 15.5
              ? !Lunch
                ? logoutOnclick
                : handleLogout
              : handleLogout
            : handleLogin
        }
        title={
          savedLoginStatus
            ? ""
            : isHovering && timeInHours >= 10.0 && timeInHours <= 10.5
            ? "Check-In window closing soon!"
            : isHovering && timeInHours >= 10.5 && timeInHours <= 14.25
            ? "Can't Check-in Now"
            : "Check-In Now"
        }
      >
        {savedLoginStatus
          ? isHovering
            ? timeInHours >= 13.0 && timeInHours < 15.0
              ? !Lunch
                ? "Lunch Break"
                : "Check Out"
              : "Check Out"
            : formatTime(totalTime)
          : timeInHours >= 10.0 && timeInHours <= 10.5
          ? "Check-In window closing soon!"
          : timeInHours >= 10.5 && timeInHours <= 14.25
          ?<s>Check in</s>
          : "Check in"
          }
      </button>

      {showErrorMessage && (
        <i
          className={`side-pop-message ${
            checkinSucess || checkoutSucess || lunchSucess
              ? "sucess-message"
              : "error-message"
          }`}
        >
          {halfdayError ? (
            <>
              You can't check in now <br /> You can check in after 2:15 PM
              <br /> But it will be counted as a Half Day
            </>
          ) : null}
          {checkinSucess ? (
            <>
              Wooh Hoo Coder <br /> Check in successfull !!
            </>
          ) : null}
          {checkoutSucess ? (
            <>
              Check in successful <br /> Check out successfull !!
            </>
          ) : null}
          {checkinError ? (
            <>
              Failed to Check in <br /> Check your internet once <br /> May be
              Server Down
            </>
          ) : null}
          {checkoutError ? <>Check out failed Please try again.</> : null}
          {locationError ? <>Please allow location access</> : null}
          {networkError ? <>Opps, Check your internet connect!</> : null}
          {server503Error ? (
            <>
              Server unavailable <br /> Please try again later.!
            </>
          ) : null}
          {serverError ? (
            <>
              Wait!, Server Down tryagain in Sometime <br /> In sometime it will
              added automatically <br /> otherwise tryagain.
            </>
          ) : null}
          {dailyReportError ? "Please Submit Daily Reports" : null}
          {lunchSucess ? "!!Ohh Ho,Lunch Done" : null}
          {lunchError ? "!!Lunch not submited" : null}
        </i>
      )}


      {lunchPop ? <div className="lunchPop" onClick={() => setLunchPop(false)}>
                  <div className="lunchpop-container container-background" onClick={(e) => e.stopPropagation()}>
                      <div>
                          <label>Start
                              <input
                  type="time" required
                  value={time1}
                  onChange={(e) => {handleTimeChange(e, setTime1); setLunchError(false)}}
                  step="1800"
                  className="border"
                /></label>
                 <label>End
                              <input
                  type="time"
                  value={time2} required
                  onChange={(e) => {handleTimeChange(e, setTime2); setLunchError(false)}}
                  step="1800"
                  className="border"
                />  </label>
                </div>       
                              {lunchPopError === true && <p>Please submit both inputs</p>}
          
                             <button type="button"  className='button' onClick={handleLunch}>Submit</button>
                </div> </div>: null}

                


    </>
  );
};

export default CheckIn;