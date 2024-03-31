import React from 'react';
import { FaHouseUser, FaEnvelopeOpenText, FaDeskpro} from "react-icons/fa";
import Services from "../images/SvgServices.png";
import Settings from "../images/SvgSettings.png";
import Projects from "../images/SvgProject.png";

const BottomMenuBar = ({isActive, setIsActive}) => {
    return (
        <>
            {/* ----------------------------- Menu Bar below 768px  (bottom) ------------------------------- */}
      <div className="menubar-bottom-768">
        
            <div
              className={`menubar-menu content-hover ${
                isActive === "Home" && "content-active"
              }`}
              title="Home"
              onClick={() => setIsActive("Home")}
            >
              <FaHouseUser className="menubar-icons" />
            </div>
            <div
              className={`menubar-menu content-hover ${
                isActive === "Daily-Reports" && "content-active"
              }`}
              title="Daily Reports"
              onClick={() => setIsActive("Daily-Reports")}
            >
              <FaDeskpro className="menubar-icons" />
            </div>
            <div
              className={`menubar-menu content-hover ${
                isActive === "Mail" && "content-active"
              }`}
              title="Mail"
              onClick={() => setIsActive("Mail")}
            >
              <FaEnvelopeOpenText className="menubar-icons" />
            </div>
          <button className="button">Checkin</button>
          <div
                className={`menubar-company-content content-hover ${
                  isActive === 'Projects' && "content-active"
                }`}
                title='Projects'
                onClick={() => setIsActive('Projects')}
              >
                <img
                  className="menubar-company-content-img"
                  src={Projects}
                  alt='Projects'
                />
              </div>
          <div
              className={`menubar-services-content content-hover ${
                isActive === "Service" && "content-active"
              }`}
              onClick={() => setIsActive("Service")}
            >
              <img src={Services} className="menubar-services-content-img" />
            </div>
        </div>
        </>
    );
};

export default BottomMenuBar;