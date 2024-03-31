import React, { useState, useEffect } from "react";
import Hand from "../images/HelloHand.png";
import { FaBell, FaFacebookMessenger, FaSearch } from "react-icons/fa";
import SearchEmployee from "../SearchEmployee/SearchEmployee";
import '../SearchEmployee/SearchEmployee.css'

const Navbar768 = ({ isActive, setIsActive, activeTab, setActiveTab }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [showSearchPop, setShowSearchPop] = useState(false)

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      console.log("Scroll Position:", currentScrollPos);
      console.log("Is Scrolling Down:", isScrollingDown);

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
              className={`menubar-menu content-hover ${
                activeTab === "Search" && "content-active"
              }`}
              title="Search"
              onClick={() => {setActiveTab("Search"); setShowSearchPop(!showSearchPop)}}
            >
              <FaSearch className="menubar-icons"/>
            </div>
          <div
            className={`menubar-menu content-hover ${
              activeTab === "Notifications" && "content-active"
            }`}
            title="Notifications"
            onClick={() => setActiveTab("Notifications")}
          >
            <FaBell className="menubar-icons" />
            <div
              className="menubar-icons-notification-dot"
              style={{ display: isNavbarVisible ? "" : "none" }}
            ></div>
          </div>

          <div
            className={`menubar-menu content-hover ${
              isActive === "Chats" && "content-active"
            }`}
            title="Chats"
            onClick={() => setIsActive("Chats")}
          >
            <FaFacebookMessenger className="menubar-icons" />
            <div
              className="menubar-icons-notification-dot"
              style={{ display: isNavbarVisible ? "" : "none" }}
            ></div>
          </div>
        </div>
      </div>

      {showSearchPop && 
      <div className="searchEmp-768" onClick={() => setShowSearchPop(false)}>
        <div  className="searchEmp-768-sub scroll-bar"  onClick={(e) => e.stopPropagation()}><SearchEmployee /></div></div>}
    </>
  );
};

export default Navbar768;
