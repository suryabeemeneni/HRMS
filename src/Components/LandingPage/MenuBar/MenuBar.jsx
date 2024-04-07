import React, { useState } from "react";
import "./MenuBar.css";
import Projects from "../../images/SvgProject.png";
import LogoutImage from "../../images/SvgLogout.png";

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
import { services } from "./DummyData";
import CheckIn from "../../Profile/CheckIn";
import Logout from "../../Profile/Logout";

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
      title === "Holidays" ||
      title === "Projects"
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
          <NavMenuProfile setIsActive={setIsActive} setActiveTab={setActiveTab}/>
        </div>

        <div className="menubar-checkIn">
        <CheckIn setIsActive={setIsActive} setActiveTab={setActiveTab}/>
        </div>

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
              <h5 className="menubar-heading"><button className="nothing-button">{data.title}</button></h5>
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
          {services.map((data, index) => (
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
              <h5><button className="nothing-button">{data.title}</button></h5>
            </div>
          ))}
        </div>

        {/* ---------- projects & Logout ---------- */}
        <div className="menubar-services">
          <div
            className={`menubar-services-content content-hover ${
              isActive.startsWith('Projects/') ? "content-active" : ""
            } ${activeTab === "Projects" && 'content-active'}`}
            onClick={() => handleTabItem("Projects")}
          >
            <img
              src={Projects}
              title="Projects"
              className="menubar-services-content-img"
              alt="Projects"
            />
            <h5 className="menubar-heading"><button className="nothing-button">Projects</button></h5>
          </div>
          <div
            className="menubar-services-content content-hover"
            onClick={() => {setLogoutPopUp(!logoutPopUp); setActiveTab('')}}>
            <img
              src={LogoutImage}
              title="Logout"
              className="menubar-services-content-img"
              alt="Logout"
            />
            <h5 className="menubar-heading"><button className="nothing-button">Logout</button></h5>
          </div>
        </div>
      </div>

{logoutPopUp ? 
      <div className="popupContainer-center" onClick={() => setLogoutPopUp(!logoutPopUp)}>
        <div className='popupContainer-center-sub logout-popup box-shadow' onClick={(e) => e.stopPropagation()}>
          <Logout setLogoutPopUp={setLogoutPopUp}/>
        </div>
      </div>
      :null}
    </>
  );
};

export default MenuBar;
