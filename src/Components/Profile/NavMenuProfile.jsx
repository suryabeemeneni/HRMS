import React from 'react';
import Hand from "../images/HelloHand.png";
import { FaMapMarked } from 'react-icons/fa';

const NavMenuProfile = ({setIsActive,  setActiveTab}) => {

  const CheckIn = localStorage.getItem("Check In");
  const loation = localStorage.getItem("check in Time");

  const handleProfile = () => {
    setIsActive("Profile")
    setActiveTab('')
  }
  
    return (
        <>
          <img
            className="menubar-profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HxBHJqRkvtgM9Z7RyR3bLV2mlG01SzkgB51gGui1Hewzt6sjpD3FrceNug5R-8nGPA&usqp=CAU"
            alt="profile"
            title="profile"
            style={{ border: CheckIn ? "2.5px solid green" : "2.5px solid red"}}
            onClick={handleProfile}/>
          <span className={`menubar-profile-cont ${loation ? 'location-color' : ''}`} >
            <p>
          {loation ?(<><FaMapMarked/> {loation}</>)  : 
          <>
              Good Day
              <img src={Hand} width={13} height={13} alt="Hello-icon" />
              </>
            }
            </p>
            <h5 title="profile" onClick={handleProfile}>Surya Beemeneni</h5>
          </span>
        </>
    );
};

export default NavMenuProfile;