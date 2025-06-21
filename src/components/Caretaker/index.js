import Header from "../Header";
import OverView from "../OverView";
import RecentActivity from "../RecentActivity";
import MedicationCalendar from "../MedicationCalendar";
import Notifications from "../Notifications";

import "./style.css";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { useState } from "react";

const buttonConstants = {
  overview: "OVERVIEW",
  recent: "RECENT",
  calendar: "CALENDAR",
  notification: "NOTIFICATIOn",
};

const Caretaker = () => {
  const [activeBtn, setActivebtn] = useState(buttonConstants.overview);

  return (
    <div className="patient">
      <Header />
      <div className="main-patient">
        <div className="medicatioon-card caretaker">
          <div className="person">
            <div className="icon">
              <MdOutlinePeopleAlt color="white" fontSize="30px" />
            </div>
            <div className="greetings-container">
              <h1>Caretaker Dashboard</h1>
              <p>Monitoring Eleanor Thompson's medication adherence</p>
            </div>
          </div>

          <div className="streaks-container">
            <div>
              <h2>85%</h2>
              <p>Adherence Rate</p>
            </div>
            <div>
              <h2>5</h2>
              <p>Current Streak</p>
            </div>
            <div>
              <h2>3</h2>
              <p>Missed this Month</p>
            </div>
            <div>
              <h2>4</h2>
              <p>Taken This Week</p>
            </div>
          </div>
        </div>
        <div className="btns-container">
          <button
            type="button"
            className={`${
              activeBtn === buttonConstants.overview && "active-btn"
            }`}
            onClick={() => setActivebtn(buttonConstants.overview)}
          >
            Overview
          </button>

          <button
            type="button"
            className={`${
              activeBtn === buttonConstants.recent && "active-btn"
            }`}
            onClick={() => setActivebtn(buttonConstants.recent)}
          >
            Recent Activity
          </button>

          <button
            type="button"
            className={`${
              activeBtn === buttonConstants.calendar && "active-btn"
            }`}
            onClick={() => setActivebtn(buttonConstants.calendar)}
          >
            Calendar View
          </button>

          <button
            type="button"
            className={`${
              activeBtn === buttonConstants.notification && "active-btn"
            }`}
            onClick={() => setActivebtn(buttonConstants.notification)}
          >
            Notifications
          </button>
        </div>

        {(() => {
          switch (activeBtn) {
            case buttonConstants.overview:
              return <OverView />;
            case buttonConstants.recent:
              return <RecentActivity />;
            case buttonConstants.calendar:
              return <MedicationCalendar />;
            case buttonConstants.notification:
              return <Notifications />;
            default:
              return <OverView />;
          }
        })()}
      </div>
    </div>
  );
};

export default Caretaker;
