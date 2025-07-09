import { useNavigate, useLocation } from "react-router-dom";

import "./style.css";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const user = useLocation().pathname.slice(1);

  return (
    <nav className="main-header">
      <div className="header-container">
        <div className="header-main-container">
          <div className="logo-container">
            <p className="">M</p>
          </div>
          <div className="header-text-container">
            <h1>MediCare Companion</h1>
            <p>{user} View</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            navigate(user === "patient" ? "/caretaker" : "/patient", {
              replace: true,
            });
          }}
        >
          <IoPersonOutline />
          <span>Switch to {user === "patient" ? "Caretaker" : "Patient"}</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
