import "./style.css";
import { TiTick } from "react-icons/ti";
import { IoWarningOutline } from "react-icons/io5";

const RecentActivity = () => (
  <div className="recent-activity">
    <h1>Recent Medication Activity</h1>

    <div className="daily-reminder-container">
      <div className="reminder">
        <p className="tick">
          <TiTick />
        </p>
        <div>
          <h3>Monday, June 10</h3>
          <p>Taken at 8:30 AM</p>
        </div>
      </div>
      <p className="completed">Completed</p>
    </div>
    <div className="daily-reminder-container">
      <div className="reminder">
        <p className="tick">
          <TiTick />
        </p>
        <div>
          <h3>Sunday, June 9</h3>
          <p>Taken at 8:15 AM</p>
        </div>
      </div>
      <p className="completed">Completed</p>
    </div>
    <div className="daily-reminder-container">
      <div className="reminder">
        <p className="missed tick">
          <IoWarningOutline color="red" />
        </p>
        <div>
          <h3>Saturday, June 8</h3>
          <p>Medication missed</p>
        </div>
      </div>
      <p className="red">Missed</p>
    </div>
    <div className="daily-reminder-container">
      <div className="reminder">
        <p className="tick">
          <TiTick />
        </p>
        <div>
          <h3>Friday, June 7</h3>
          <p>Taken at 8:45 AM</p>
        </div>
      </div>
      <p className="completed">Completed</p>
    </div>
  </div>
);

export default RecentActivity;
