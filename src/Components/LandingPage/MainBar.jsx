import React from "react";
import ProjectDetails from "../Projects/ProjectDetails";

const MainBar = ({
  isActive,
  setIsActive,
  sideBar,
  setSideBar,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className='MainBar-Pad-Mar'>
      {isActive === "Home" ? "Home" : null}
      {isActive === "Chat" ? "Chat" : null}
      {isActive && isActive.startsWith("Projects/") ? (
        <ProjectDetails project={isActive.split("/")[1]} />
      ) : null}
      {isActive === "Contact" ? "Contact" : null}
      {isActive === "About" ? "About" : null}
      {isActive === "Gallery" ? "Gallery" : null}
      {isActive === "Your details - logs" ? "Your details - logs" : null}
      {isActive === "checkIn Details" ? "checkIn Details" : null}
      {isActive === "Task list" ? "Task list" : null}
      {isActive === "Leave" ? "Leave" : null}
      {isActive === "Salaryslips" ? "Salaryslips" : null}
      {isActive === "Daily report" ? "Daily report" : null}
      {isActive === "News Feed" ? "News Feed" : null}
    </div>
  );
};

export default MainBar;
