import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  const handleLoginform = () => (
    <form className="login-form" onSubmit={handleLogin} id="login">
      {renderUsernameAndpassword()}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="showPassword"
          onClick={(e) => setShowPassword(e.target.checked)}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  );

  const handleRefistrationForm = () => (
    <form className="login-form" onSubmit={handleLogin} id="registration">
      {renderUsernameAndpassword()}
      <div className="input-container">
        <input type="password" id="newpassword" />
        <label htmlFor="newpassword">Re-type New password</label>
      </div>

      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  );

  const renderUsernameAndpassword = () => (
    <>
      <div className="input-container">
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <label htmlFor="username">User Name</label>
      </div>
      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="off"
        />
        <label htmlFor="password">
          {isLogin ? "Password" : "New Password"}
        </label>
      </div>
    </>
  );

  return (
    <div className="main-login">
      <div className="login-container">
        <div className="login-type-container">
          <button
            type="button"
            className={isLogin ? "active" : "not-active"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={!isLogin ? "active" : "not-active"}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? handleLoginform() : handleRefistrationForm()}
      </div>
    </div>
  );
};

export default Login;
