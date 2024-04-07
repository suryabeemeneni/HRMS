import React from 'react';

const Logout = ({setLogoutPopUp}) => {
    return (
        <>
        <div>
          <h4 onClick={() => {localStorage.removeItem("loggedInUser")}} className="content-hover" title="Log out">Log out</h4>
          <h4 onClick={() => {localStorage.removeItem("loggedInUser")}} className="content-hover" title="Log out of all accounts">Log out of all accounts</h4>
          <h4 className="content-hover" onClick={() => setLogoutPopUp(false)} title="Cancel">Cancel</h4>
        </div>
        </>
    );
};

export default Logout;

