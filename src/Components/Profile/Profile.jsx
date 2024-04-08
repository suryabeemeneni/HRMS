import React, { useEffect, useState } from "react";
import "./Profile.css";
import { FaFacebook, FaInstagram, FaSignOutAlt, FaTwitter, FaUserEdit } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import EditProfile from "./EditProfile";
import { useNavigate, useParams } from "react-router-dom";
import Logout from './Logout'

const Profile = () => {

  const { name } = useParams();

  const navigate = useNavigate();

  const [details, setDetails] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false)
  const [logoutPopUp, setLogoutPopUp] = useState(false)

  useEffect(() => {
    fetch(`https://empadmin.hola9.com/account/loginprofile/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [name]);


  return (
    <>
      <div className="Profile-container">
      {/* {details.map((user) => ( */}
        <div className="profile-dash-container" onClick={() => setOpenEditForm(false)}>
          <div className="profile-dash-card">
            <img 
            // src={user.image} alt={user.name}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUj1ciE6wDturbVa82fUvijTvwHFWrG7SPw&s"
            alt="profile"
             />
            <div className="profile-card-details">
              <span>
                <h2 title="Surya Narayana">Surya Narayana
                 {/* {user.name} */}
                 </h2>
                <p>beemeneni@gmail.com</p>
              </span>
              {/* <span className="profile-dash-socail">
              {user.facebook_link ? (
                <FaFacebook title="Facebook" onClick={() => window.open(user.facebook_link, "_blank")}
                    />
                  ) : null}
                 {user.insta_link ? (<FaInstagram title="Instagram" onClick={() => window.open(user.insta_link, "_blank")}
                    />
                  ) : null}
                {user.linkedin_link ? (<FaLinkedinIn title="Linked in"  onClick={() => window.open(user.linkedin_link, "_blank")}
                    />
                  ) : null}
                 {user.twitter_link ? (<FaTwitter title="twitter" onClick={() => window.open(user.twitter_link, "_blank")}
                    />
                  ) : null}
                </span> */}
                <span className="profile-dash-socail">
                <FaFacebook title="Facebook"/>
                <FaInstagram title="Instagram"/>
                <FaLinkedinIn title="Linked in"/>
                <FaTwitter title="twitter"/>
                <FaUserEdit title="Edit Profile" className="profile-edit-icon" onClick={(e) => {setOpenEditForm(true); e.stopPropagation()}} />
                </span>
            </div>
          </div>

          <div className="profile-dash-details p-d-d">
            <h5>Personal</h5>
            <div className="profile-dash-details-row">
              <span>
                <h6>Date of Birth</h6>
                {/* <p>{user.dob}</p> */}
                <p>19-05-2023</p>
              </span>
              <span>
                <h6>Blood Group</h6>
                {/* <p>{user.blood_group}</p> */}
                <p>O+</p>
              </span>
              <span>
                <h6>Phone Number</h6>
                <p>+91 -------- </p>
              </span>
              <span>
                <h6>Marital Status</h6>
                {/* <p>{user.marital_status}</p> */}
                <p>Single</p>
              </span>
              <span>
                <h6>Gender</h6>
                {/* <p>{user.gender}</p> */}
                <p>Male</p>
              </span>
            </div>
          </div>

          <div className="profile-dash-details">
            <h5>Professional</h5>
            <div className="profile-dash-details-row">
              <span>
                <h6>Employee ID</h6>
                {/* <p>{user.userid}</p> */}
                <p>H-1078</p>
              </span>
              <span>
                <h6>Reporting</h6>
                {/* <p>{user.reporting_to}</p> */}
                <p>Santhosh Rabada</p>
              </span>
              <span>
                <h6>Designation</h6>
                {/* <p>{user.role}</p> */}
                <p>Front End Developer</p>
              </span>
              <span>
                <h6>Joining Date</h6>
                {/* <p>{user.working_since}</p> */}
                <p>18-20-1235</p>
              </span>
            </div>
          </div>

          <div className="profile-dash-details">
            <h5>Projects</h5>
            <div className="profile-dash-Projects">
              <span>
                <p>Hola9 &nbsp; | &nbsp; on going</p>
              </span>
              <span>
                <p>HRMS &nbsp; | &nbsp; on going</p>
              </span>
              <span>
                <p>Services website &nbsp; | &nbsp; 09-10-23 to 05-01-24</p>
              </span>
            </div>
          </div>
          
          
          <div className="Profile-mobile-options content-hover" onClick={() => {navigate('/editProfile/')}}>
          <FaUserEdit />
          <h5>Edit Profile</h5>
          </div>
          <div className="Profile-mobile-options content-hover" onClick={() => {setLogoutPopUp(!logoutPopUp)}} style={{marginTop:'0', paddingBottom:'100px'}}>
            <FaSignOutAlt />
          <h5>Logout</h5>
          </div>
        </div>
        {/* ))} */}

        {openEditForm === true ? 
        <form className="profile-edit-container border container-background">
            <EditProfile />
        </form>
        : null}
      </div>
      {logoutPopUp ? 
      <div className="logout-pop" onClick={() => setLogoutPopUp(false)}>
      <div className="lunchpop-container container-background logout-pop-container" onClick={(e) => e.stopPropagation()}>
        <Logout setLogoutPopUp={setLogoutPopUp}/>
        </div>
        </div>
        : null}
    </>

  );
};

export default Profile;
