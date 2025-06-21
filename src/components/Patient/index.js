import Header from "../Header";
import MedicationCalendar from "../MedicationCalendar";
import "./style.css";

import { IoPersonOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegClock, FaImage } from "react-icons/fa6";

const Patient = () => (
  <div className="patient">
    <Header />
    <div className="main-patient">
      <div className="medicatioon-card">
        <div className="person">
          <div className="icon">
            <IoPersonOutline color="white" fontSize="30px" />
          </div>
          <div className="greetings-container">
            <h1>Good Evening!</h1>
            <p>Ready to stay on track with your medication?</p>
          </div>
        </div>

        <div className="streaks-container">
          <div>
            <h2>0</h2>
            <p>Days Streak</p>
          </div>
          <div>
            <h2>0</h2>
            <p>Today's status</p>
          </div>
          <div>
            <h2>0%</h2>
            <p>Monthly Rate</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="todays-medication-container">
          <h2>
            <span>
              <SlCalender
                color="blue"
                style={{ marginRight: "8px", fontSize: "21px" }}
              />
            </span>
            Today's Medication
          </h2>

          <div className="daily-reminder-container">
            <div className="reminder">
              <p className="no-of-medications">1</p>
              <div>
                <h3>Daily Medication Set</h3>
                <p>Complete set of daily tables</p>
              </div>
            </div>
            <p className="reminder-time">
              <span>
                <FaRegClock /> 8:00AM
              </span>
            </p>
          </div>

          <div className="add-image-container">
            <FaImage color="gray" style={{ fontSize: "40px" }} />
            <h3>Add Proof Photo (Optional)</h3>
            <p>
              Take a photo of your medication or pill organizer as confirmation
            </p>
            <input type="file" className="custom-file-input" />
          </div>
        </div>

        <div className="calender">
          <MedicationCalendar />
        </div>
      </div>
    </div>
  </div>
);

export default Patient;
