import { useNavigate } from "react-router-dom";

import "./style.css";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/patient", { replace: true });
  };

  const handleCaretaker = () => {
    navigate("/caretaker", { replace: true });
  };

  return (
    <div className="main">
      <div className="main-home">
        <div className="heart-container">
          <FaRegHeart color="white" style={{ fontSize: "30px" }} />
        </div>

        <div className="home-intro">
          <h1>Welcome to MediCare Companion</h1>
          <p>
            Your trusted partner in medication management. Choose your role to
            get started with personalized features.
          </p>
        </div>

        <div className="desc-container">
          <div className="home-desc-container">
            <div className="patient-icon">
              <IoPersonOutline
                color="rgb(29 78 216)"
                style={{ fontSize: "25px" }}
              />
            </div>
            <h1>I'm a Patient</h1>
            <p>
              {" "}
              Track your medication schedule and maintain your health records
            </p>

            <ul>
              <li>Mark medications as taken</li>
              <li> Upload proof photos (optional) </li>
              <li>View your medication calendar </li>
              <li>Large, easy-to-use interface</li>
            </ul>

            <button type="button" onClick={handlenavigate}>
              Continue as Patient
            </button>
          </div>

          <div className="home-desc-container second">
            <div className="caretaker-icon">
              <MdOutlinePeopleAlt
                color="rgb(12, 154, 12)"
                style={{ fontSize: "25px" }}
              />
            </div>
            <h1>I'm a Caretaker</h1>
            <p>Monitor and support your loved one's medication adherence</p>
            <ul>
              <li>Monitor medication compliance</li>
              <li>Set up notification preferences</li>
              <li>View detailed reports</li>
              <li>Receive email alerts</li>
            </ul>
            <button type="button" onClick={handleCaretaker}>
              Continue as Caretaker
            </button>
          </div>
        </div>

        <p className="gray-txt">
          You can switch between roles anytime after setup
        </p>
      </div>
    </div>
  );
};

export default Home;
