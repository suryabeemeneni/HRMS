import React, { useEffect, useState } from "react";

const ApplyLeave = () => {
  const [LeaveSucess, setLeaveSucess] = useState(false);
  const [LeaveError, setLeaveError] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");

  // ---------------- auto hide error popup after 5 seconds ----------------- //
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showErrorMessage]);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const loggedInadmin = JSON.parse(localStorage.getItem("loggedInadmin"));
  const logintl = JSON.parse(localStorage.getItem("logintl"));
  const logintesting = JSON.parse(localStorage.getItem("logintesting"));
  const logintltest = JSON.parse(localStorage.getItem("logintestingtl"));
  const loginbackend = JSON.parse(localStorage.getItem("loginbackend"));
  const loginbackendtl = JSON.parse(localStorage.getItem("loginbackendtl"));
  const [userData, setUserData] = useState([]);
  const name = loggedInUser
    ? loggedInUser.name
    : logintesting
    ? logintesting.name
    : loginbackend
    ? loginbackend.name
    : logintl
    ? logintl.name
    : logintltest
    ? logintltest.name
    : loginbackendtl
    ? loginbackendtl.name
    : null;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://empadmin.hola9.com/account/loginEmployee/"
        );
        const apiData = await response.json();
        setData(apiData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const tlNames = data
    .filter((item) => item.tl || item.testing_tl || item.backend_tl)
    .map((item) => item.name);

  // Set the posted_date to the current date
  const currentDate = new Date();
  const TodayDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({
    subject: "--",
    tlname: "",
    department: "",
    reason: "",
    leave_type: "",
    from_date: "",
    to_date: "",
    description: "--",
    name: 2,
    // name: name,
    posted_date: TodayDate,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
      leave_type: value,
    });
    setSelectedButton(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://empadmin.hola9.com/account/leaves/",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const response = await axios.post('https://empadmin.hola9.com/account/leaves/', post);

      if (response.ok) {
        setLeaveSucess(true);
        setLeaveError(false);
        setShowErrorMessage(true);
        setIsLoading(false);
        console.log("Leave From", post);
      } else {
        setLeaveError(true);
        setLeaveSucess(false);
        setShowErrorMessage(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLeaveError(true);
      setLeaveSucess(false);
      setShowErrorMessage(true);
    }

    console.log("leave From", post);
  };

  const department = ["Front-end", "Back-end", "Testing", "Hr Department"];


  const ClearleaveForm = () => {
    setPost('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="Apply-leave-from">

        <label>Leave type</label>
        <section>
          <button
            type="button"
            onClick={(e) =>
              handleInput({
                target: { name: "leave_type", value: "sick_leave" },
              })
            }
            className={
              selectedButton === "sick_leave" ? "button" : "section-button"
            }
          >
            Medical
          </button>
          <button
            type="button"
            onClick={(e) =>
              handleInput({
                target: { name: "leave_type", value: "casual_leave" },
              })
            }
            className={
              selectedButton === "casual_leave" ? "button" : "section-button"
            }
          >
            Casual
          </button>
          <button
            type="button"
            onClick={(e) =>
              handleInput({
                target: { name: "leave_type", value: "annual_leave" },
              })
            }
            className={
              selectedButton === "annual_leave" ? "button" : "section-button"
            }
          >
            L O P
          </button>
        </section>

        <label>
          Start Date:
          <input
            type="date"
            name="from_date"
            value={post.from_date}
            onChange={handleInput}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="to_date"
            value={post.to_date}
            onChange={handleInput}
            required
          />
        </label>

        <div className="Leavefrom-dep">
          <label>
            Team Leader:
            <select name="tlname" onChange={handleInput} required>
              <option>Select Team Leader</option>
              {tlNames.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Department:
            <select name="department" onChange={handleInput} required>
              <option>Select Department</option>
              {department.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Reason for Leave:
          <textarea
            name="reason"
            value={post.reason}
            onChange={handleInput}
            rows="3"
            required
          />
        </label>

        <div>
          <button type="reset" className="cancel-button" onClick={ClearleaveForm}>
            Clear
          </button>
          <button type="submit" className="button">
            Request Leave
          </button>
        </div>
      </form>

      {showErrorMessage && (
        <i
          className={`side-pop-message ${
            LeaveSucess ? "sucess-message" : "error-message"
          }`}
        >
          {LeaveError ? (
            <>
              Failed to Apply Leave <br /> Please Try again later..
            </>
          ) : null}
          {LeaveSucess ? "Apply Leave request sent to HR Department" : null}
        </i>
      )}
    </>
  );
};

export default ApplyLeave;
