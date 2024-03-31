import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar/MenuBar";
import Navbar768 from "./MenuBar/Navbar768";
import BottomMenuBar from "./MenuBar/BottomMenuBar";
import SearchEmployee from "./SearchEmployee/SearchEmployee";

const LandingPage = () => {
  const [sideBar, setSideBar] = useState(false);

  const storedTab = sessionStorage.getItem("isactivetab");
  const [isActive, setIsActive] = useState(storedTab ? storedTab : "Home");
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    sessionStorage.setItem("isactivetab", isActive);
  }, [isActive]);
  

  return (
    <>
      <Navbar768 isActive={isActive} setIsActive={setIsActive} activeTab={activeTab} setActiveTab={setActiveTab}/>

      {/* -------------------- main menubar -------------------------------------- */}

      <div style={{ display: "flex", height: " 100dvh", overflow: "hidden" }}>
        <div style={{ flex: "0 0 auto" }}>
          <div
            className={`menubar box-shadow ${
              sideBar === true && "menubar-half"
            }`}
            // onMouseEnter={() => setSideBar(false)}
            // onMouseLeave={() => setSideBar(true)}
          >
            <MenuBar
              isActive={isActive}
              setIsActive={setIsActive}
              sideBar={sideBar}
              setSideBar={setSideBar}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {activeTab === "Settings" ? (
              <div className={`sub-menubar`}>Settings</div>
            ) : null}
            {activeTab === "Search" ? (
              <div className={`sub-menubar`}><SearchEmployee/></div>
            ) : null}
            {activeTab === "Notifications" ? (
              <div className={`sub-menubar`}>Notifications</div>
            ) : null}
            {activeTab === "Holidays" ? (
              <div className={`sub-menubar`}>Holidays</div>
            ) : null}
          </div>
        </div>
        <div
          className="active-content scroll-bar"
          style={{ flex: "1", overflow: "scroll" }}
        >
          {isActive === "Service" ? "Service" : null}
          {isActive === "Home" ? "Home" : null}
          {isActive === "Chat" ? "Chat" : null}
          {isActive === "Mails" ? "Mails" : null}
          {isActive === "Projects" ? "Projects" : null}
          {isActive === "Contact" ? "Contact" : null}
          {isActive === "About" ? "About" : null}
          {isActive === "Gallery" ? "Gallery" : null}
        </div>
      </div>

      <BottomMenuBar isActive={isActive} setIsActive={setIsActive} activeTab={activeTab} setSActiveTab={setActiveTab}/>
    </>
  );
};

export default LandingPage;
