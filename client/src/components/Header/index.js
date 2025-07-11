import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import "./style.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const user = useLocation().pathname.slice(1);

  const handleLogout = () => {
    Cookies.remove("medicare_token");
    navigate("/login");
  };

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

        <div className="flex-row large-scr">
          <button
            type="button"
            onClick={() => {
              navigate(user === "patient" ? "/caretaker" : "/patient", {
                replace: true,
              });
            }}
          >
            <IoPersonOutline />
            <span>
              Switch to {user === "patient" ? "Caretaker" : "Patient"}
            </span>
          </button>

          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="flex-row small-scr">
          <button
            type="button"
            onClick={() => {
              navigate(user === "patient" ? "/caretaker" : "/patient", {
                replace: true,
              });
            }}
          >
            {user === "patient" ? "Caretaker" : "Patient"}
          </button>

          <button type="button" className="logout-btn" onClick={handleLogout}>
            <IoIosLogOut />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
