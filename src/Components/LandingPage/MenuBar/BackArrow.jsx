import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotificationBackArrow = ({name}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="notification-heading">
        <FaArrowLeft
          className="content-hover notificaton-FaArrowLeft"
          onClick={() => navigate(-1)}
        />
        <h5>{name}</h5>
      </div>
    </>
  );
};

export default NotificationBackArrow;
