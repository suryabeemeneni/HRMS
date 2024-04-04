import React from 'react';
import { FaHouseUser, FaDeskpro, FaBandcamp} from "react-icons/fa";
import Services from "../../images/SvgServices.png";
import projects from "../../images/SvgProject.png";
import Projects from '../../Projects/Projects';
import { services } from './DummyData';
import { useNavigate } from 'react-router-dom';

const BottomMenuBar = ({isActive, setIsActive, activeTab, setActiveTab, setShowSearchEmployee, setShowNotifications ,setShowMails}) => {

  const navigate = useNavigate();

  const handleMenuItem = (tabItem) => {
    if(tabItem === 'Projects' || tabItem === 'Services') {
      setActiveTab(tabItem);
      setShowSearchEmployee(false);
      setShowNotifications(false);
      setShowMails(false);
    } else if (tabItem === 'Holidays') {
      setActiveTab('')
      setShowSearchEmployee(false);
      setShowNotifications(false);
      setShowMails(false);
      navigate('/holidays/')
    } else {
    setIsActive(tabItem);
    setActiveTab(null);
    setShowSearchEmployee(null);
    setShowNotifications(null);
    setShowMails(null);
  }
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
                isActive === "Daily report" && "content-active"
              }`}
              title="Daily Reports"
              onClick={() => handleMenuItem("Daily report")}
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
                  isActive.startsWith('Projects/') ? "content-active" : ""
                }`}
                title='Projects'
                onClick={() => handleMenuItem('Projects')}
              >
                <img
                  className="menubar-company-content-img"
                  src={projects}
                  alt='Projects'
                />
              </div>
          <div
          title='Services'
              className={`menubar-services-content content-hover ${
                (activeTab === "Services" || services.some(service => isActive === service.title)) && "content-active"
              }`}
              onClick={() => handleMenuItem("Services")}
            >
              <img src={Services} className="menubar-services-content-img"  alt='Services'/>
            </div>
        </div>


        {(activeTab === 'Projects' || activeTab === 'Services' )? 
        <div className='bottom-popup' onClick={() => {setActiveTab('')}} >
          <div className='bottom-popup-services scroll-bar box-shadow' onClick={(e) => e.stopPropagation()}>
            {activeTab === 'Projects' &&
            <Projects 
            isActive={isActive}
            setIsActive={setIsActive}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
  />}
  {activeTab === 'Services' &&
  <>
  {services.map((data, index) => (
    <div key={index} className={`Projects content-hover ${isActive === data.title && 'content-active'}`} onClick={() => handleMenuItem(data.title)}>
        <img src={data.imgUrl} alt={data.project}/>
            <h5>{data.title}</h5>
    </div>
))}
</>
  }
          </div>
        </div>
         : null}
        </>
    );
};

export default BottomMenuBar;