import React from 'react';
import Hand from "../images/HelloHand.png";

const NavMenuProfile = () => {
    return (
        <>
                      <img
            className="menubar-profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HxBHJqRkvtgM9Z7RyR3bLV2mlG01SzkgB51gGui1Hewzt6sjpD3FrceNug5R-8nGPA&usqp=CAU"
            alt="profile"
            title="profile"
            style={{ border: "2.5px solid green" }}
          />
          <span className="menubar-profile-cont">
            <p>
              Good Day
              <img src={Hand} width={13} height={13} alt="Hello-icon" />
            </p>
            <h5 title="profile">Surya Beemeneni</h5>
          </span>
        </>
    );
};

export default NavMenuProfile;