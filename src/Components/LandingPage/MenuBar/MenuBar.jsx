import React, { useState } from "react";
import "./MenuBar.css";
import Projects from "../../images/SvgProject.png";
import Logout from "../../images/SvgLogout.png";

import {
  FaBandcamp,
  FaBell,
  FaDeskpro,
  FaEnvelopeOpenText,
  FaFacebookMessenger,
  FaHouseUser,
  FaSearch,
} from "react-icons/fa";
import NavMenuProfile from "../../Profile/NavMenuProfile";
import { Features } from "./DummyData";

const MenuBar = ({
  isActive,
  setIsActive,
  sideBar,
  setSideBar,
  activeTab,
  setActiveTab,
}) => {

  const [logoutPopUp, setLogoutPopUp] = useState(false)
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
    if (
      title === "Search" ||
      title === "Notifications" ||
      title === "Mails" ||
      title === "Holidays"
    ) {
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
          <NavMenuProfile/>
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
            activeTab === "Holidays" ||
            activeTab === "Projects"
              ? setSideBar(true)
              : setSideBar(false)
          }`}
        >
          {Features.map((data, index) => (
            <div
              key={index}
              className={`menubar-company-content content-hover ${
                isActive === data.title ? "content-active" : ""
              } ${
                data.title === "Holidays" && activeTab === data.title
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
          <div
            className={`menubar-services-content content-hover ${ activeTab === 'Projects'
                ? "content-active"
                : ""
            }`}
            onClick={() => handleTabItem("Projects")}
          >
            <img
              src={Projects}
              title="Projects"
              className="menubar-services-content-img"
              alt="Projects"
            />
            <h5 className="menubar-heading">Projects</h5>
          </div>
          <div
            className="menubar-services-content content-hover"
            onClick={() => {setLogoutPopUp(!logoutPopUp); setActiveTab('')}}>
            <img
              src={Logout}
              title="Logout"
              className="menubar-services-content-img"
              alt="Logout"
            />
            <h5 className="menubar-heading">Logout</h5>
          </div>
        </div>
      </div>

{logoutPopUp ? 
      <div className="popupContainer-center" onClick={() => setLogoutPopUp(!logoutPopUp)}>
        <div className='popupContainer-center-sub logout-popup box-shadow' onClick={(e) => e.stopPropagation()}>
          <h4 onClick={() => {localStorage.removeItem("loggedInUser")}} className="content-hover" title="Log out">Log out</h4>
          <h4 onClick={() => {localStorage.removeItem("loggedInUser")}} className="content-hover" title="Log out of all accounts">Log out of all accounts</h4>
          <h4 className="content-hover" onClick={() => setLogoutPopUp(!logoutPopUp)} title="Cancel">Cancel</h4>
        </div>
      </div>
      :null}
    </>
  );
};

export default MenuBar;
