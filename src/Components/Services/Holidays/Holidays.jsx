import React, { useEffect, useState } from "react";
import "./Holidays.css";


const Holidays = () => {

  // ------------------------ fetch holiday data -------------------------- //
  const [holidays, setHolidays] = useState([]);

  const fetchHolidayData = async () => {
    try {
      const response = await fetch(
        "https://empadmin.hola9.com/account/holiday/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setHolidays(data);
    } catch (error) {
      console.error("Error fetching holidays:", error);
    }
  };
  useEffect(() => {
    fetchHolidayData();
  }, []);



  // ------------------------- delete holiday data ------------------ //

  const deleteHoliday = async (holidayId) => {
    try {
      const response = await fetch(`https://empadmin.hola9.com/account/holiday/${holidayId}/`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchHolidayData();
    } catch (error) {
      console.error("Error deleting holiday data:", error);
    }
  };


  // --------------------- edit holiday data --------------------- //

  const [editingHoliday, setEditingHoliday] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    date: "",
    week: ""
  });

  const editHoliday = (holiday) => {
    setEditingHoliday(holiday);
    setFormData({
      name: holiday.name,
      desc: holiday.desc,
      date: holiday.date,
      week: holiday.week
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitEdit = async () => {
    try {
      const response = await fetch(`https://empadmin.hola9.com/account/holiday/${editingHoliday.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchHolidayData();
      setEditingHoliday(null);
      setFormData({
        name: "",
        desc: "",
        date: "",
        week: ""
      });
    } catch (error) {
      console.error("Error editing holiday data:", error);
    }
  };

  
  //  ---------------- check for holiday ------------------- //
  const [currentDate, setCurrentDate] = useState(new Date());


  const isHoliday = (date) => {
    return holidays.some(
      (holiday) => new Date(holiday.date).toDateString() === date.toDateString()
    );
  };

  // -------------------------  generate calendar days for each month ----------------------------- //
  const generateCalendarDays = (year, month) => {
    const days = [];
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const startDayOfWeek = startDate.getDay(); // 0 (Sunday) to 6 (Saturday)

    // -------------- empty cells ----------------- //
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(
        <div className="holiday-empty-cell" key={`holiday-empty-${i}`}></div>
      );
    }

    // ------------------ get dates ,todays-date,  holidays, sat & sun ------------------------------- //
    for (let i = 1; i <= endDate.getDate(); i++) {
      const date = new Date(year, month, i);
      const classNames = ["holiday-day"];
      if (isHoliday(date)) {
        classNames.push("holiday-holiday");
      }
      if (date.getDay() === 0) {
        classNames.push("holiday-sunday");
      } else if (date.getDay() === 6) {
        classNames.push("holiday-saturday");
      }
      if (
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        classNames.push("holiday-today");
      }
      days.push(
        <div
          className={classNames.join(" ")}
          key={date.getDate()}
          // onClick={() => handleDayClick(date)}
        >
          {date.getDate()}
        </div>
      );
    }

    return days;
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };


  // ----------- current month  ------------- holidays - desciption ---------------------- //
  const filteredHolidays = holidays.filter((holiday) => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getMonth() === currentDate.getMonth() && holidayDate.getFullYear() === currentDate.getFullYear();
  });


  return (
    <>
      <div className="holiday-header">
        <h2>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          className="holiday-nav-button content-hover"
          onClick={goToPreviousMonth}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          className="holiday-nav-button content-hover"
          onClick={goToNextMonth}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="holiday-days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div className="holiday-day-label" key={day}>
            {day}
          </div>
        ))}
        {generateCalendarDays(
          currentDate.getFullYear(),
          currentDate.getMonth()
        )}
      </div>

      <br/>
      <br/>

      {filteredHolidays.map((selectedHoliday) => (
        <>
        <div className="holiday-pop-Home-Card ">
         <span className="holiday-pop-date-info border">
                <p>{new Date(selectedHoliday.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <h3>{new Date(selectedHoliday.date).getDate()}</h3>
              </span>
              <span className="holiday-pop-details">
                <b>{selectedHoliday.name}</b>
              </span>
            </div>
                <p className="holiday-pop-details-p">{selectedHoliday.desc}</p>
                <div className="edit-delete">
                <button className="button" 
                onClick={() => editHoliday(selectedHoliday)}
                >Edit</button>
            <button className="button" 
            onClick={() => deleteHoliday(selectedHoliday.id)}
            >Delete</button>
            </div>
            </>
      ))}


{editingHoliday && (
        <form onSubmit={submitEdit}>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <input type="text" name="desc" value={formData.desc} onChange={handleInputChange} />
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
          <input type="text" name="week" value={formData.week} onChange={handleInputChange} />
          <button type="submit">Change</button>
        </form>
      )}
    </>
  );
};

export default Holidays;
