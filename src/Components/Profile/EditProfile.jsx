import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { name } = useParams();


  const [editSucess, setEditSucess] = useState(false)
  const [editError, setEditError] = useState(false)

  // ---------------- auto hide error popup after 5 seconds ----------------- //
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showErrorMessage]);

  const [hasChanges, setHasChanges] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    blood_group: "",
    userid: "",
    dob: "",
    image: "",
    organization: "",
    role: "",
    email: "",
    reporting_to: "",
    marital_status: "",
    gender: "",
    project_name: "",
    working_since: "",
    sick_leave: "",
    casual_leave: "",
    earned_leav: "",
    // phone_number : "",
    facebook_link: null,
    insta_link: null,
    linkedin_link: null,
    twitter_link: null,
  });

  useEffect(() => {
    const fetchUserDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `https://empadmin.hola9.com/account/loginprofile/?name=${name}`
        );
        const data = response.data[0] || {}; // Ensure data exists
        setUserData(data);
        setHasChanges(false); // Reset changes state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserDataFromAPI();
  }, [name]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const inputValue = type === "file" ? e.target.files[0] : value;

    if (name === "working_since") {
      return;
    }

    setUserData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    setHasChanges(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(userData).forEach((key) => {
      if (key !== "image") {
        formData.append(key, userData[key]);
      }
    });

    if (userData.image instanceof File) {
      formData.append("image", userData.image);
    }

    try {
      const response = await axios.put(
        `https://empadmin.hola9.com/account/loginprofile/${userData.id}/`,
        formData
      );

      if (response.status === 200) {
        console.log("Profile updated successfully!", response.data);
        setShowErrorMessage(true);
        setEditSucess(true)
        setHasChanges(false); // Reset changes state after successful submission
      } else {
        console.error(
          "Failed to update profile. Server returned:",
          response.status
        );
        alert('error')
        setShowErrorMessage(true);
        setEditError(true)
      }
    } catch (error) {
      console.error("Failed to update profile.", error);
      setShowErrorMessage(true);
      setEditError(true)
    }
  };

  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const loggedInadmin = JSON.parse(localStorage.getItem("loggedInadmin"));

  const isEditable = loggedInadmin;

  return (
    <>
      <center className="edit-profile-container-img ">
        {/* {userData.image &&  */}
        <img
          // src={userData.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUj1ciE6wDturbVa82fUvijTvwHFWrG7SPw&s"
          alt="User Image"
        />
        {/* } */}
      </center>
      <div className="edit-profile-container scroll-bar">
        <h6>Personal Details</h6>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            disabled={!isEditable}
            placeholder="name"
          />
        </label>
        <label>
          Date of Birth
          <input
            type="date"
            name="dob"
            value={userData.dob}
            onChange={handleInputChange}
            placeholder="Date of Birth"
          />
        </label>
        <label>
          {" "}
          Blood Group
          <select
            name="blood_group"
            value={userData.blood_group}
            onChange={handleInputChange}
            placeholder="Blood Group"
          >
            {bloodGroupOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Phone Number
          <input
            type="number"
            name="Phone number"
            value={userData.phone_number}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
        </label>
        <label>
          Marital Status
          <input
            type="text"
            name="marital_status"
            value={userData.marital_status}
            onChange={handleInputChange}
            placeholder="Marital Status"
          />
        </label>
        <label>
          Gender
          <input
            type="text"
            name="gender"
            value={userData.gender}
            onChange={handleInputChange}
            placeholder="Gender"
          />
        </label>

        <h6>Professional Details</h6>
        <label>
          Employee ID
          <input
            type="text"
            name="userid"
            value={userData.userid}
            onChange={handleInputChange}
            placeholder="userid"
            disabled={!isEditable}
          />
        </label>
        <label>
          Reporting to
          <input
            type="text"
            name="reporting_to"
            value={userData.reporting_to}
            onChange={handleInputChange}
            placeholder="Reporting Manager"
          />
        </label>
        <label>
          Designation
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleInputChange}
            placeholder="role"
          />
        </label>
        <label>
          Joinng Date
          <input
            type="date"
            name="working_since"
            value={userData.working_since}
            onChange={handleInputChange}
            placeholder="Joining Date"
            disabled={!isEditable}
          />
        </label>
        <label>
          email
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="email"
            disabled={!isEditable}
          />
        </label>
        <label>
          Organization
          <input
            type="text"
            name="organization"
            value={userData.organization}
            onChange={handleInputChange}
            placeholder="Organization"
            disabled={!isEditable}
          />
        </label>

        <label>
          Project Name
          <input
            type="text"
            name="project_name"
            value={userData.project_name}
            onChange={handleInputChange}
            placeholder="Project Name"
          />
        </label>

        {loggedInadmin ? (
          <>
            <h6>Leaves</h6>
            <label>
              casual leaves
              <input
                type="text"
                name="casual_leave"
                value={userData.casual_leave}
                onChange={handleInputChange}
                placeholder="casual leave"
              />
            </label>
            <label>
              Earned leaves
              <input
                type="text"
                name="earned_leave"
                value={userData.earned_leave}
                onChange={handleInputChange}
                placeholder="earned leave"
              />
            </label>
            <label>
              Sick leaves
              <input
                type="text"
                name="sick_leave"
                value={userData.sick_leave}
                onChange={handleInputChange}
                placeholder="sick leave"
              />
            </label>
          </>
        ) : null}

        <h6>Socail Medial Links</h6>
        <label>
          Facebook Link
          <input
            type="text"
            name="facebook_link"
            placeholder="facebook link"
            value={userData.facebook_link || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Instagram Link
          <input
            type="text"
            name="insta_link"
            value={userData.insta_link || ""}
            onChange={handleInputChange}
            placeholder="instagram link"
          />
        </label>
        <label>
          LinkedIn Link
          <input
            type="text"
            name="linkedin_link"
            value={userData.linkedin_link || ""}
            onChange={handleInputChange}
            placeholder="linked link"
          />
        </label>
        <label>
          Twitter Link
          <input
            type="text"
            name="twitter_link"
            value={userData.twitter_link || ""}
            onChange={handleInputChange}
            placeholder="twitter link"
          />
        </label>
      </div>
      <div className="edit-profile-submit">
        <button className="button" onClick={handleFormSubmit} style={{cursor: hasChanges ? "pointer" : "not-allowed"}} title={hasChanges ? "Save changes" : "No changes to save"}
            disabled={!hasChanges}>
          Edit Profile
        </button>
      </div>



      {showErrorMessage && (
        <i
          className={`side-pop-message ${
            editSucess
              ? "sucess-message"
              : "error-message"
          }`}
        >
          {editError ? 'Failed to update profile.' : null}
          {editSucess ? 'Profile updated successfully.' : null}
          </i>
)}
    </>
  );
};

export default EditProfile;
