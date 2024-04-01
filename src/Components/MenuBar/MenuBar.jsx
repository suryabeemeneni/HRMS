import React from "react";
import "./MenuBar.css";
import Hand from "../images/HelloHand.png";
import Projects from "../images/SvgProject.png";
import Logout from "../images/SvgLogout.png";

import {
  FaBandcamp,
  FaBell,
  FaDeskpro,
  FaEnvelopeOpenText,
  FaFacebookMessenger,
  FaHouseUser,
  FaSearch,
} from "react-icons/fa";
import { Features } from "./DummyData";

const MenuBar = ({
  isActive,
  setIsActive,
  sideBar,
  setSideBar,
  activeTab,
  setActiveTab,
}) => {
 

  const MainContent = [
    {
      icon: <FaHouseUser />,
      title: "Home",
    },
    {
      icon: <FaSearch />,
      title: "Search",
    },
    {
      icon: <FaFacebookMessenger />,
      title: "Chat",
    },
    {
      icon: <FaDeskpro />,
      title: "Daily report",
    },
    {
      icon: <FaBandcamp />,
      title: "News Feed",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Mails",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
    },
  ];

  const handleClick = (title) => {
    if (title === "Search" || title === "Notifications" || title === "Mails" || title === "Holidays") {
      handleTabItem(title);
    } else {
      handleMenuItem(title);
    }
  };

  const handleTabItem = (tabItem) => {
    if (activeTab === tabItem) {
      setActiveTab(null);
      setSideBar(false);
    } else {
      setActiveTab(tabItem);
    }
  };

  const handleMenuItem = (tabItem) => {
    setIsActive(tabItem);
    setActiveTab(null);
    setSideBar(true);
  };
  return (
    <>
      <div className="menubar-content">
        <div className="menubar-profile">
          <img
            className="menubar-profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HxBHJqRkvtgM9Z7RyR3bLV2mlG01SzkgB51gGui1Hewzt6sjpD3FrceNug5R-8nGPA&usqp=CAU"
            alt="profile"
            title="profile"
            style={{ border: "2.5px solid green" }}
          />
          <span className="menubar-profile-cont">
            <p>
              Good Day
              <img src={Hand} width={13} height={13} alt="Hello-icon" />
            </p>
            <h5 title="profile">Surya Beemeneni</h5>
          </span>
        </div>

        <button className="button menubar-checkIn">Checkin</button>

        <hr />

        {/* ---------- menu ccontent ---------- */}
        <div
          className={`menubar-menu-div ${
            activeTab === "Search" ||
            activeTab === "Notifications" ||
            activeTab === "Mails" ||
            activeTab === "Holidays"
              ? setSideBar(true)
              : setSideBar(false)
          }`}>
          {MainContent.map((data, index) => (
            <div
              key={index}
              className={`menubar-menu content-hover ${
                isActive === data.title ? "content-active" : ""
              } ${
                (data.title === "Notifications" ||
                  data.title === "Search" ||
                  data.title === "Mails") &&
                activeTab === data.title
                  ? "content-active"
                  : ""
              }`}
              title={data.title}
              onClick={() => handleClick(data.title)}
            >
              {data.icon}
              {data.title === "Chat" ||
              data.title === "Notifications" ||
              data.title === "Mails" ? (
                <div className="menubar-icons-notification-dot"></div>
              ) : null}
              <h5 className="menubar-heading">{data.title}</h5>
            </div>
          ))}
        </div>

        <hr />

        {/* ---------- Services ---------- */}

        <h6 className="menubar-company-heading">Services : </h6>
        <div
         className={`menubar-company container-background scroll-bar ${
          activeTab === "Search" ||
          activeTab === "Notifications" ||
          activeTab === "Mails" ||
          activeTab === "Holidays"
            ? setSideBar(true)
            : setSideBar(false)
        }`}>
          {Features.map((data, index) => (
            <div
              key={index}
              className={`menubar-company-content content-hover ${
                isActive === data.title ? "content-active" : ""
              } ${
                (data.title === "Holidays") &&
                activeTab === data.title
                  ? "content-active"
                  : ""
              }`}
              title={data.title}
              onClick={() => handleClick(data.title)}
            >
              <img
                className="menubar-company-content-img"
                src={data.imgUrl}
                alt={data.title}
              />
              <h5>{data.title}</h5>
            </div>
          ))}
        </div>

        {/* ---------- projects & Logout ---------- */}
        <div className="menubar-services">
          <div className="menubar-services-content content-hover" onClick={() => setIsActive('Projects')}>
        <img src={Projects} title="Projects" className="menubar-services-content-img" alt="Projects"/>
        <h5 className="menubar-heading">Projects</h5>
        </div>
          <div className="menubar-services-content content-hover">
            <img src={Logout} title="Logout" className="menubar-services-content-img" alt="Logout" />
            <h5 className="menubar-heading">Logout</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
