import React from 'react';

const MainBar = (
    {
        isActive,
        setIsActive,
        sideBar,
        setSideBar,
        activeTab,
        setActiveTab,
      }
) => {
    return (
        <>
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
        </>
    );
};

export default MainBar;