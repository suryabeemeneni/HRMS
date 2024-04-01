import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar/MenuBar";
import Navbar768 from "./MenuBar/Navbar768";
import BottomMenuBar from "./MenuBar/BottomMenuBar";
import SearchEmployee from "./SearchEmployee/SearchEmployee";
import Notifications from "./Notifications/Notifications";

const LandingPage = () => {
  const [sideBar, setSideBar] = useState(false);

  const storedTab = sessionStorage.getItem("isactivetab");
  const [isActive, setIsActive] = useState(storedTab ? storedTab : "Home");
  const [activeTab, setActiveTab] = useState('')

  const [showSearchEmployee, setShowSearchEmployee] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMails, setShowMails] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("isactivetab", isActive);
  }, [isActive]);
  

  return (
    <>
      <Navbar768 isActive={isActive} setIsActive={setIsActive} activeTab={activeTab} setActiveTab={setActiveTab} setShowSearchEmployee={setShowSearchEmployee} setShowNotifications={setShowNotifications} setShowMails={setShowMails} showSearchEmployee={showSearchEmployee} showNotifications={showNotifications} showMails={showMails}/>

      {/* -------------------- main menubar -------------------------------------- */}

      <div style={{ display: "flex", height: " 100dvh", overflow: "hidden" }}>
        <div style={{ flex: "0 0 auto" }}>
          <div
            className={`menubar box-shadow ${
              sideBar === true && "menubar-half"
            }`}>
            <MenuBar
              isActive={isActive}
              setIsActive={setIsActive}
              sideBar={sideBar}
              setSideBar={setSideBar}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {((activeTab === "Settings") || (activeTab === "Search") || (activeTab === "Notifications") || (activeTab === "Holidays") || (activeTab === "Mails") )? (
               <div className="sub-menubar-container" onClick={() => setActiveTab('')}>
              <div className={`sub-menubar scroll-bar`} onClick={(e) => e.stopPropagation()}>
                {activeTab === "Settings" ? ( 'Settings' ) : null}
                {activeTab === "Search" ? (<SearchEmployee/>) : null}
            {activeTab === "Notifications" ? (<Notifications/>) : null}
            {activeTab === "Holidays" ? ("Holidays") : null}
            {activeTab === "Mails" ? ("Mails") : null}
                </div></div>
            ) : null}
          </div>
        </div>
        <div
          className="active-content scroll-bar"
          style={{ flex: "1", overflowY: "scroll" }}
        >
          {isActive === "Service" ? "Service" : null}
          {isActive === "Home" ? "Home" : null}
          {isActive === "Chat" ? "Chat" : null}
          {isActive === "Projects" ? "Projects" : null}
          {isActive === "Contact" ? "Contact" : null}
          {isActive === "About" ? "About" : null}
          {isActive === "Gallery" ? "Gallery" : null}
          {isActive === "Your details - logs" ? "Your details - logs" : null}
          {isActive === "checkIn Details" ? "checkIn Details" : null}
          {isActive === "Task list" ? "Task list" : null}
          {isActive === "Leave" ? "Leave" : null}
          {isActive === "Salaryslips" ? "Salaryslips" : null}
        </div>
      </div>

      <BottomMenuBar isActive={isActive} setIsActive={setIsActive} activeTab={activeTab} setActiveTab={setActiveTab} setShowSearchEmployee={setShowSearchEmployee} setShowNotifications={setShowNotifications} setShowMails={setShowMails}/>
    </>
  );
};

export default LandingPage;
