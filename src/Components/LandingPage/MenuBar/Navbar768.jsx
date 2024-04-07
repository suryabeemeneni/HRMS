import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaEnvelopeOpenText,
  FaFacebookMessenger,
  FaSearch,
} from "react-icons/fa";
import SearchEmployee from "../../SearchEmployee/SearchEmployee";
import { useNavigate } from "react-router-dom";
import NavMenuProfile from "../../Profile/NavMenuProfile";

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

  const navigate = useNavigate();

  return (
    <>
      <div className="menubar-top-768 box-shadow">
        <div className="menubar-profile menubar-top-768-profile">
          <NavMenuProfile setIsActive={setIsActive} setActiveTab={setActiveTab}/>
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
            onClick={() => {navigate('/notifications/')}}
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
            // onClick={() => {navigate('/notifications/')}}
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
              {(showMails || activeTab === "Mails") && "Mails"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar768;
