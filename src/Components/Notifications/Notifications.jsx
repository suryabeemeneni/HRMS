import React from "react"
// import React, { useEffect, useState } from "react";
import "./Notification.css";
// import { loadingUrl } from "../../App";
import { NotificationData } from "../LandingPage/MenuBar/DummyData";

const Notifications = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://empadmin.hola9.com/account/loginprofile/"
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Error! status: ${response.status}`);
  //       }
  //       const apiData = await response.json();
  //       setData(apiData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(true);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <>
        {/* {loading === true ? (
          <>
          <h5>Notifications Loading...</h5>
          <img src={loadingUrl} width={"100%"} alt="Loading..." />
          </>
        ): <> */}
      {NotificationData.map((data, index) => (
      // {data.map((data, index) => (
        <div key={index} className="notification-card content-hover">
          <div className="notification-head">
            <img
              src={data.img}
              // src={data.image}
              className="notification-image"
              width={40}
              height={40}
              alt={data.title}
            />
            <b className="notification-title">{data.title}</b>
            {/* <b className="notification-title">{data.name}</b> */}
            <i className="notification-time">{data.time}</i>
            {/* <i className="notification-time">{data.userid}</i> */}
          </div>
          <p className="notification-para">{data.para}</p>
        </div>
        
      ))}
      {/* </>} */}
    </>
  );
};

export default Notifications;
