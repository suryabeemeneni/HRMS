import React, { useEffect, useState } from "react";
import MenuBar from "../LandingPage/MenuBar/MenuBar";
import Navbar768 from "../LandingPage/MenuBar/Navbar768";
import BottomMenuBar from "./MenuBar/BottomMenuBar";
import SideBar from "./SideBar";
import MainBar from "./MainBar";

const LandingPage = () => {
  const [sideBar, setSideBar] = useState(false);

  const storedTab = sessionStorage.getItem("isactivetab");
  const [isActive, setIsActive] = useState(storedTab ? storedTab : "Home");
  const [activeTab, setActiveTab] = useState("");

  const [showSearchEmployee, setShowSearchEmployee] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMails, setShowMails] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("isactivetab", isActive);
  }, [isActive]);

  return (
    <>
      <Navbar768
        isActive={isActive}
        setIsActive={setIsActive}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowSearchEmployee={setShowSearchEmployee}
        setShowNotifications={setShowNotifications}
        setShowMails={setShowMails}
        showSearchEmployee={showSearchEmployee}
        showNotifications={showNotifications}
        showMails={showMails}
      />

      <div style={{ display: "flex", height: " 100dvh", overflow: "hidden" }}>
        <div style={{ flex: "0 0 auto" }}>
          <div
            className={`menubar box-shadow ${
              sideBar === true && "menubar-half"
            }`}
          >
            <MenuBar
              isActive={isActive}
              setIsActive={setIsActive}
              sideBar={sideBar}
              setSideBar={setSideBar}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <SideBar
              isActive={isActive}
              setIsActive={setIsActive}
              sideBar={sideBar}
              setSideBar={setSideBar}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        <div
          className="active-content scroll-bar"
          style={{ flex: "1", overflowY: "scroll" }}
        >
          <MainBar 
                        isActive={isActive}
                        setIsActive={setIsActive}
                        sideBar={sideBar}
                        setSideBar={setSideBar}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
          />
        </div>
      </div>

      <BottomMenuBar
        isActive={isActive}
        setIsActive={setIsActive}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setShowSearchEmployee={setShowSearchEmployee}
        setShowNotifications={setShowNotifications}
        setShowMails={setShowMails}
        />
    </>
  )
};

export default LandingPage;