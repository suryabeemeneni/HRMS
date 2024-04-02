import React from 'react';
import SearchEmployee from "../SearchEmployee/SearchEmployee";
import Notifications from "../Notifications/Notifications";
import Holidays from "../Services/Holidays/Holidays";
import Projects from "../Projects/Projects";

const SideBar = ({
    isActive,
    setIsActive,
    sideBar,
    setSideBar,
    activeTab,
    setActiveTab,
  }) => {
    return (
        <>
             {activeTab === "Settings" ||
            activeTab === "Search" ||
            activeTab === "Notifications" ||
            activeTab === "Holidays" ||
            activeTab === "Mails" ||
            activeTab === "Projects"? (
              <div
                className="sub-menubar-container"
                onClick={() => setActiveTab("")}
              >
                <div
                  className={`sub-menubar scroll-bar`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {activeTab === "Settings" ? "Settings" : null}
                  {activeTab === "Search" ? (
                   <>
                   <div className="notification-heading">
                     <h5>Search For Employee</h5>
                   </div>
                   <div style={{marginTop:'10px'}}>
                   <SearchEmployee />
                   </div>
                   </>
                  ) : null}
                  {activeTab === "Notifications" ? (
                    <>
                      <div className="notification-heading">
                        <h5>Notifications</h5>
                      </div>
                      <Notifications />
                    </>
                  ) : null}
                  {activeTab === "Holidays" ? (
                   <>
                   <div className="notification-heading">
                     <h5>Holidays</h5>
                   </div>
                    <Holidays /> 
                    </>
                   ) : null}
                   {activeTab === "Projects" ? (
                   <>
                   <div className="notification-heading">
                     <h5>Projects</h5>
                   </div>
                    <Projects/> 
                    </>
                   ) : null}
                  {activeTab === "Mails" ? (
                   <>
                   <div className="notification-heading">
                     <h5>Mails</h5>
                   </div>
                   "Mails" 
                    </>
                   ) : null}
                </div>
              </div>
            ) : null}
        </>
    );
};

export default SideBar;