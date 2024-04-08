import React from "react";
import ProjectDetails from "../Projects/ProjectDetails";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Leave from "../Services/Leaves/Leave";

const MainBar = ({
  isActive,
}) => {
  return (
    <div className='MainBar-Pad-Mar scroll-bar'>
      {isActive === "Home" ? <Home/> : null}
      {isActive === "Profile" ? <Profile/> : null}
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
      {isActive === "Leave" ? <Leave/> : null}
      {isActive === "Salaryslips" ? "Salaryslips" : null}
      {isActive === "Daily report" ? "Daily report" : null}
      {isActive === "News Feed" ? "News Feed" : null}
    </div>
  );
};

export default MainBar;
