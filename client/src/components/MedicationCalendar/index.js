import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { useState } from "react";

import "./style.css";

const MedicationCalendar = () => {
  //   const [date, setDate] = useState(new Date());
  //   const [medicationStatus, setMedicationStatus] = useState({});

  //   const handleDateChange = (newDate) => {
  //     setDate(newDate);
  //   };

  //   const handleStatusChange = (date, status) => {
  //     const dateKey = date.toDateString();
  //     setMedicationStatus((prev) => ({
  //       ...prev,
  //       [dateKey]: status,
  //     }));
  //   };

  //   const getStatus = (date) => {
  //     return medicationStatus[date.toDateString()] || "";
  //   };

  //   const tileContent = ({ date, view }) => {
  //     if (view === "month") {
  //       const status = getStatus(date);
  //       return (
  //         <div className="medication-indicators">
  //           {status === "taken" && <div className="taken">✓</div>}
  //           {status === "missed" && <div className="missed">✕</div>}
  //         </div>
  //       );
  //     }
  //   };

  return (
    <div className="medication-calendar-container">
      <h2>Medication Calendar</h2>
      <div className="calendar-wrapper">
        <Calendar
        // onChange={handleDateChange}
        // value={date}
        // tileContent={tileContent}
        />
      </div>

      <div className="color-details">
        <div>
          <div className="taken"></div>
          <span>Medication taken</span>
        </div>

        <div>
          <div className="missed"></div>
          <span>Missed medication</span>
        </div>

        <div>
          <div className="today"></div>
          <span>today</span>
        </div>
      </div>
    </div>
  );
};
export default MedicationCalendar;
