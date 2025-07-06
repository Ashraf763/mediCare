import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newpassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("medicare_token");
    if (token !== undefined) {
      navigate("/");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    // navigate("/", { replace: true });
    const userDetails = { username, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userDetails
      );
      console.log(response);

      setError("");
      // navigate("/");
    } catch (err) {
      // setError(err.response?.data?.message || "failed to Login");
      // console.log(err.response?.data?.message || "failed to Login");
      console.log(err);
    }
  };

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
      console.log(response);

      setError("");
      isLogin(true);
    } catch (err) {
      console.log(err);
    }
  };

  const changeLoginMethod = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setNewPassword("");
  };

  const handleLoginform = () => (
    <form className="login-form" onSubmit={handleLogin} id="login">
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
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="off"
          placeholder="Password"
        />
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="showPassword"
          onClick={(e) => setShowPassword(e.target.checked)}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>

      {error && <p className="error-msg">*{error}</p>}

      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  );

  const handleRegistrationForm = () => (
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
          type={showPassword ? "text" : "password"}
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
  );

  return (
    <div className="main-login">
      <div className="login-container">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {isLogin ? handleLoginform() : handleRegistrationForm()}

        <p className="have-an-account">
          {isLogin ? "Don't" : "Already"} have an account?{" "}
          <button type="button" onClick={changeLoginMethod}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
