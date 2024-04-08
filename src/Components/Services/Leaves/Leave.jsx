import React, { useEffect, useState } from "react";
import './Leave.css'
import ApplyLeave from "./ApplyLeave";
import { FaKitMedical, FaToiletsPortable } from "react-icons/fa6";
import { FaCalendarAlt, FaCoffee } from "react-icons/fa";

const Leave = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const logintl = JSON.parse(localStorage.getItem("logintl"));
  const logintesting = JSON.parse(localStorage.getItem("logintesting"));
  const logintltest = JSON.parse(localStorage.getItem("logintestingtl"));
  const loginbackend = JSON.parse(localStorage.getItem("loginbackend"));
  const loginbackendtl = JSON.parse(localStorage.getItem("loginbackendtl"));
  const loggedInadmin = JSON.parse(localStorage.getItem("loggedInadmin"));

  const [leaveRequest, setLeaveRequest] = useState([]);

  const [LeaveSucess, setLeaveSucess] = useState(false);
  const [LeaveError, setLeaveError] = useState(false);

  // ---------------- auto hide error popup after 5 seconds ----------------- //
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showErrorMessage]);

  useEffect(() => {
    fetch("https://empadmin.hola9.com/account/leaves/")
      .then((response) => response.json())
      .then((data) => setLeaveRequest(data))
      .catch((err) => console.log(err));
  }, []);



  const [showDetails, setShowDetails] = useState(null);

  const handleRowClick = (index) => {
    setShowDetails((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAdminAction = (leaveId, action) => {
    const updatedLeaveStatus = {
      admin_approve: action === "approve",
      admin_cancel: action === "cancel",
    };

    fetch(`https://empadmin.hola9.com/account/leaves/${leaveId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLeaveStatus),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Leave status updated:", data);
        setShowErrorMessage(true);
        setLeaveSucess(true);
        setLeaveRequest((prevLeaveRequests) =>
          prevLeaveRequests.map((leave) =>
            leave.id === leaveId ? { ...leave, ...updatedLeaveStatus } : leave
          )
        );
      })
      .catch((error) => {
        console.error("Error updating leave status:", error);
        setShowErrorMessage(true);
        setLeaveError(true);
      });
  };


  const [leaveReq, setLeaveReq] = useState([]);

  useEffect(() => {
    fetch(`https://empadmin.hola9.com/account/leaves/`)
      .then((response) => response.json())
      .then((data) => {
        setLeaveReq(data);
      })
      .catch((err) => console.log(err));
  }, []);


  
  return (
    <>
     {/* {loggedInUser ||
            logintesting ||
            loginbackend ||
            logintl ||
            loginbackendtl ||
            logintltest ? ( */}
            <div className="Leave-section">
        <div className="Leaves-contaier">
            <h4>Leave Allowance Report</h4>
            <section className="Leaves-component-section">
              <div className="Leaves-section-container border" title="Annual Leave">
                <FaCalendarAlt className="leaces-icons" style={{background: 'rgb(214, 195, 138)'}}/>
                <span>
              <h6>Annual Leave</h6>
                <h5>24 days</h5>
              </span>
              </div>
              <div className="Leaves-section-container border" title="Medical Leave">
                <FaKitMedical className="leaces-icons" style={{background: 'lightcoral'}}/>
                <span>
              <h6>Medical Leave</h6>
                <h5>12 days</h5>
              </span>
              </div>
              <div className="Leaves-section-container border" title="Casual Leave">
                <FaCoffee className="leaces-icons" style={{background: 'rgb(141, 187, 164)'}}/>
                <span>
              <h6>Casual Leave</h6>
                <h5>12 days</h5>
              </span>
              </div>
              <div className="Leaves-section-container border" title="Remaining Leave">
                <FaToiletsPortable className="leaces-icons" style={{background: 'rgb(218, 142, 226)'}}/>
                <span>
              <h6>Remaining Leave</h6>
                <h5>24 days</h5>
              </span>
              </div>
            </section>
        </div>
        <div className="apply-leave-container container-boxShadow border scroll-bar">
          <ApplyLeave/>
      </div>
        </div>
        
          <div className="Leaves-report-component">
          <table>
                  <thead>
                    <th>Status</th>
                    <th>Leave Type</th>
                    <th>From Date - To Date</th>
                    <th>Applied Date</th>
                  </thead>

                  
                      <td style={{ color: "darkorange" }}>
                       
                        <b
                              style={{
                                color:'lightgreen'
                              }}
                            >
                             ✔ Approved
                            </b>
                            </td>
                      <td>Medical leave</td>
                  <td> 10-12-2026 - 12-45-1551 </td>
                      <td>56-54-5161</td>
                  

                  {leaveReq.map((data) => (
                    <tbody>
                      <td>
                        <>
                          {data.admin_approve ? (
                            <b
                            style={{
                              color:'lightgreen'
                            }}
                          >
                             ✔  Approved
                            </b>
                          ) : data.admin_cancel ? (
                            <b
                              style={{
                                color:'darkred'
                              }}
                            >
                             ❌ Denied
                            </b>
                          ) : (
                            <b
                              style={{
                                color: "darkorange"
                              }}
                            > ⏳ Pending ...</b>
                          )}
                        </>
                      </td>
                      <td>{data.leave_type}</td>
                      <td>{`${data.from_date} - ${data.to_date}`}</td>
                      <td>{data.posted_date}</td>
                      </tbody>
                  ))}
                </table>
          </div>
      {/* ) : null } */}


<br/>


{/* {loggedInadmin ? ( */}
<div className="Leaves-report-component">
                <table>
                <thead>
                <th>Employee Name</th>
                    <th>Leave Type</th>
                    <th>From Date - To Date</th>
                    <th>Status</th>
                  </thead>
                  {leaveRequest.map((data, index) => (
                    <React.Fragment key={index}>
                      <tbody>
                        <td>{data.name}</td>
                        <td>{data.leave_type}</td>
                        <td>
                          {data.from_date} - {data.to_date}
                        </td>
                        <td style={{ color: "white" }}>
                          {!data.admin_approve && !data.admin_cancel && (
                            <div>
                              <button
                                onClick={() =>
                                  handleAdminAction(data.id, "approve")
                                }
                                className="button"
                            style={{

                              marginRight:'5px',
                              marginBottom:'3px'
                            }}
                          >
                                Approve
                              </button>
                              <button
                                onClick={() =>
                                  handleAdminAction(data.id, "cancel")
                                }
                                className="cancel-button">
                                Cancel
                              </button>
                            </div>
                          )}
                          {data.admin_approve && (
                            <button
                              onClick={() =>
                                handleAdminAction(data.id, "cancel")
                              }
                              className="cancel-button">
                              Cancel
                            </button>
                          )}
                          {data.admin_cancel && (
                            <button
                            className="button"
                              onClick={() =>
                                handleAdminAction(data.id, "approve")
                              }
                              >
                              Approve
                            </button>
                          )}
                        </td>
                      </tbody>
                      {showDetails === index && (
                        <div>
                          <p>{`subject : ${data.subject}`}</p>
                          <p>{`tlname : ${data.tlname}`}</p>
                          <p>{`department : ${data.department}`}</p>
                          <p>{`description : ${data.description}`}</p>
                          <p>{`admin approve : ${data.admin_approve}`}</p>
                          <p>{`tl approve : ${data.tl_approve}`}</p>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </table>
              </div>
             {/* ) : null}  */}




      {showErrorMessage && (
        <i
          className={`side-pop-message ${
            LeaveSucess ? "sucess-message" : "error-message"
          }`}
        >
          {LeaveError ? "Error updating Leave status" : null}
          {LeaveSucess ? "Leave status updated." : null}
        </i>
      )}
    </>
  );
};

export default Leave;
