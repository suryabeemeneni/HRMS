import React from "react";
import "./MenuBar.css";
import Hand from "../images/HelloHand.png";
import Projects from "../images/SvgProject.png";
import Contact from "../images/SvgContact.png";
import About from "../images/SvgAbout.png";

import Holidays from "../images/featuresImages/Holidays.webp";
import TaskTracking from "../images/featuresImages/TaskTracking.webp";
import Salary from "../images/featuresImages/salary.webp";
import WorkReport from "../images/featuresImages/report.webp";
import Gallery from "../images/featuresImages/Gallery.webp";
import LoginDetails from "../images/featuresImages/LoginDetails.webp";

import Services from "../images/SvgServices.png";
import Settings from "../images/SvgSettings.png";
import Logout from "../images/SvgLogout.png";

import {
  FaBell,
  FaDeskpro,
  FaEnvelopeOpenText,
  FaFacebookMessenger,
  FaHouseUser,
  FaSearch,
} from "react-icons/fa";

const MenuBar = ({
  isActive,
  setIsActive,
  sideBar,
  setSideBar,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = (title) => {
    if (title === "Search" || title === "Notifications" || title === "Mails") {
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
      icon: <FaEnvelopeOpenText />,
      title: "Mails",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
    },
  ];

  const Features = [
    {
      imgUrl: `${WorkReport}`,
      title: "Your details - logs",
    },
    {
      imgUrl: `${LoginDetails}`,
      title: "checkIn Details",
    },
    {
      imgUrl: `${TaskTracking}`,
      title: "Task list",
    },
    {
      imgUrl: `${Holidays}`,
      title: "Leave",
    },
    {
      imgUrl: `${Salary}`,
      title: "Salaryslips",
    },
    {
      imgUrl: `${Projects}`,
      title: "Projects",
    },
    {
      imgUrl: `${Holidays}`,
      title: "Holidays",
    },
    {
      imgUrl: `${Gallery}`,
      title: "Gallery",
    },
  ];
  return (
    <>
      <div className="menubar-content">
        <div className="menubar-profile">
          <img
            className="menubar-profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HxBHJqRkvtgM9Z7RyR3bLV2mlG01SzkgB51gGui1Hewzt6sjpD3FrceNug5R-8nGPA&usqp=CAU"
            alt="profile"
            title="profile"
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
            activeTab === "Mails"
              ? setSideBar(true)
              : setSideBar(false)
          }`}
        >
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
              {data.title === "Chat" || data.title === "Notifications" || data.title === "Mails" ? (
                <div className="menubar-icons-notification-dot"></div>
              ) : null}
              <h5 className="menubar-heading">{data.title}</h5>
            </div>
          ))}
        </div>

        <hr />

        {/* ---------- Services ---------- */}

        <h6 className="menubar-company-heading">Services : </h6>
        <div className="menubar-company container-background scroll-bar">
          {Features.map((data, index) => (
            <div
              key={index}
              className={`menubar-company-content content-hover ${
                isActive === data.title && "content-active"
              }`}
              title={data.title}
              onClick={() => handleMenuItem(data.title)}
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

        {/* ---------- Logout ---------- */}
        <div className="menubar-services-content content-hover">
          <img src={Logout} className="menubar-services-content-img" />
          <h5 className="menubar-heading">Logout</h5>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
