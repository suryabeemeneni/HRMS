import React, { useState, useEffect } from "react";
import Hand from "../images/HelloHand.png";
import {
  FaBell,
  FaEnvelopeOpenText,
  FaFacebookMessenger,
  FaSearch,
} from "react-icons/fa";
import SearchEmployee from "../SearchEmployee/SearchEmployee";
import Notifications from "../Notifications/Notifications";
import BottomMenuBar from "./BottomMenuBar";

const Navbar768 = ({ isActive, setIsActive, activeTab, setActiveTab, showSearchEmployee, showNotifications, showMails, setShowSearchEmployee, setShowNotifications ,setShowMails}) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);


  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsNavbarVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="menubar-top-768 box-shadow">
        <div className="menubar-profile menubar-top-768-profile">
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
        <div className="menubar-top-768-row">
          <div
            className={`menubar-menu content-hover`}
            title="Search"
            onClick={() => {
              setActiveTab("Search");
              setShowSearchEmployee(!showSearchEmployee);
            }}
          >
            <FaSearch className="menubar-icons" />
          </div>
          <div
            className={`menubar-menu content-hover`}
            title="Notifications"
            onClick={() => {
              setActiveTab("Notifications");
              setShowNotifications(!showNotifications);
            }}
          >
            <FaBell className="menubar-icons" />
            <div
              className="menubar-icons-notification-dot"
              style={{ display: isNavbarVisible ? "" : "none" }}
            ></div>
          </div>

          <div
            className={`menubar-menu content-hover`}
            title="Mails"
            onClick={() => {
              setActiveTab("Mails");
              setShowNotifications(!showNotifications);
            }}
          >
            <FaEnvelopeOpenText className="menubar-icons" />
            <div
              className="menubar-icons-notification-dot"
              style={{ display: isNavbarVisible ? "" : "none" }}
            ></div>
          </div>

          <div
            className={`menubar-menu content-hover`}
            title="Chats"
            onClick={() => setIsActive("Chat")}
          >
            <FaFacebookMessenger className="menubar-icons" />
            <div
              className="menubar-icons-notification-dot"
              style={{ display: isNavbarVisible ? "" : "none" }}
            ></div>
          </div>
        </div>
      </div>

      {(showSearchEmployee ||
        activeTab === "Search" ||
        showNotifications ||
        activeTab === "Notifications" ||
        showMails ||
        activeTab === "Mails") && (
        <div
          className="popupContainer768"
          onClick={() => {
            setShowSearchEmployee(false);
            setShowNotifications(false);
            setShowMails(false);
            setActiveTab("");
          }}
        >
          <div
            className="popupContainer768-sub scroll-bar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popupContainer768-container scroll-bar">
              {(showSearchEmployee || activeTab === "Search") ? (
                <SearchEmployee />
              ) : null}
              {(showNotifications || activeTab === "Notifications") && (
                <Notifications />
              )}
              {(showMails || activeTab === "Mails") && "Mails"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar768;
