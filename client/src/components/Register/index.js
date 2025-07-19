import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./style.css";

const Register = () => {
  const [newpassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("medicare_token");
    if (token !== undefined) {
      navigate("/");
    }
  });

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== newpassword) {
      setError("Passwords do not match");
      return;
    } else if (
      password === username ||
      password.toLocaleLowerCase() === username.toLowerCase()
    ) {
      setError("Username and Password should not match");
      return;
    }

    try {
      const userDetails = { username, password };
      const response = await axios.post(
        "http://localhost:5000/register",
        userDetails
      );

      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };
  return (
    <div className="main-login">
      <div className="login-container">
        <h2>Register</h2>
        <form
          className="login-form"
          onSubmit={handleRegistration}
          id="registration"
        >
          <div className="input-container">
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              required
              autoComplete="off"
            />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
              placeholder="Password"
            />
            <input
              type="password"
              id="newpassword"
              placeholder="Re-type New Password"
              autoComplete="off"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newpassword}
              className="user-input"
            />
          </div>

          {error && <p className="error-msg">*{error}</p>}

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <p className="have-an-account">
          Already have an account?
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
