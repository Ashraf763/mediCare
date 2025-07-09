import { SlCalender } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./style.css";

const OverView = () => (
  <>
    <div className="big-screen">
      <div className="todays-medication-container">
        <h2>
          <span>
            <SlCalender
              color="blue"
              style={{ marginRight: "8px", fontSize: "20px" }}
            />
          </span>
          Today's Status
        </h2>

        <div className="daily-reminder-container">
          <div className="reminder">
            <div>
              <h3>Daily Medication Set</h3>
              <p>8:00 AM</p>
            </div>
          </div>
          <p className="reminder-time red">Pending</p>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div>
          <MdOutlineMail style={{ fontSize: "16px" }} />
          <span>Send Remainder Email</span>
        </div>
        <div>
          <CiBellOn style={{ fontSize: "18px" }} />
          <span>Configure Notifications</span>
        </div>
        <div>
          <SlCalender style={{ fontSize: "14px" }} />
          <span>View Full Calendar</span>
        </div>
      </div>
    </div>

    <div className="progress-cont">
      <h2>Monthly Adherence Progress</h2>

      <div className="progress-container">
        <div className="progress-label">
          Overall Progress: <span>85%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "85%" }}></div>
        </div>
      </div>

      <div className="days-container">
        <div>
          <h3 className="green">22 days</h3>
          <p>Taken</p>
        </div>
        <div>
          <h3 className="red-text">3 days</h3>
          <p>Missed</p>
        </div>
        <div>
          <h3 className="blue">5 days</h3>
          <p>Remaining</p>
        </div>
      </div>
    </div>
  </>
);

export default OverView;
