import { FaRegBell } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

const Notifications = () => {
  const [email, setEmail] = useState(false);

  return (
    <div>
      <div className="notification-preference">
        <h1>
          <span>
            <FaRegBell style={{ fontSize: "18px" }} color="blue" />
          </span>
          Notification Preferences
        </h1>

        <div className="notifications">
          <div>
            <h3>Email Notifications</h3>
            <p>Recieve medication alerts via email</p>
          </div>
          <input type="checkbox" onClick={(e) => setEmail(e.target.checked)} />
        </div>

        {email && (
          <div className="email-validation">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="caretaker@example.com"
            />
          </div>
        )}

        <hr />

        <div className="notifications">
          <div>
            <h3>Missed Medication Alerts</h3>
            <p>get notified medication when not taken on time</p>
          </div>
          <input type="checkbox" />
        </div>
      </div>

      <div className="save-notification">
        <button type="button">Save Notification Settings</button>
      </div>
    </div>
  );
};

export default Notifications;
