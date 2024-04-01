import React from 'react';
import { FaHouseUser, FaDeskpro, FaBandcamp} from "react-icons/fa";
import Services from "../images/SvgServices.png";
import Projects from "../images/SvgProject.png";

const BottomMenuBar = ({isActive, setIsActive, setActiveTab, setShowSearchEmployee, setShowNotifications ,setShowMails}) => {

  const handleMenuItem = (tabItem) => {
    setIsActive(tabItem);
    setActiveTab(null);
    setShowSearchEmployee(null);
    setShowNotifications(null);
    setShowMails(null);
  };
  
    return (
        <>
            {/* ----------------------------- Menu Bar below 768px  (bottom) ------------------------------- */}
      <div className="menubar-bottom-768">
        
            <div
              className={`menubar-menu content-hover ${
                isActive === "Home" && "content-active"
              }`}
              title="Home"
              onClick={() => handleMenuItem("Home")}
            >
              <FaHouseUser className="menubar-icons" />
            </div>
            <div
              className={`menubar-menu content-hover ${
                isActive === "Daily-Reports" && "content-active"
              }`}
              title="Daily Reports"
              onClick={() => handleMenuItem("Daily-Reports")}
            >
              <FaDeskpro className="menubar-icons" />
            </div>
            <div
              className={`menubar-menu content-hover ${
                isActive === "News Feed" && "content-active"
              }`}
              title="News Feed"
              onClick={() => handleMenuItem("News Feed")}
            >
              <FaBandcamp className="menubar-icons" />
            </div>
          <button className="button">Checkin</button>
          <div
                className={`menubar-company-content content-hover ${
                  isActive === 'Projects' && "content-active"
                }`}
                title='Projects'
                onClick={() => handleMenuItem('Projects')}
              >
                <img
                  className="menubar-company-content-img"
                  src={Projects}
                  alt='Projects'
                />
              </div>
          <div
          title='Services'
              className={`menubar-services-content content-hover ${
                isActive === "Service" && "content-active"
              }`}
              onClick={() => handleMenuItem("Service")}
            >
              <img src={Services} className="menubar-services-content-img"  alt='Services'/>
            </div>
        </div>
        </>
    );
};

export default BottomMenuBar;