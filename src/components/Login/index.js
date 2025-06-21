import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isLogin ? "/api/login" : "/api/signup";
    const body = isLogin
      ? { username, password }
      : { username, email, password };

    try {
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to the server");
      console.error(err);
    }
  };

  return (
    <div className="main-login">
      <div className="login-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="USERNAME"
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="EMAIL"
              />
            </div>
          )}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="PASSWORD"
            />
          </div>
          <button type="submit" className="login-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {error && <div className="error-message">* {error}</div>}
        </form>
        <p className="toggle-form">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/", { replace: true });
//   };

//   const handleLoginform = () => (
//     <form className="login-form" onSubmit={handleLogin} id="login">
//       {renderUsernameAndpassword()}
//       <div className="checkbox-container">
//         <input
//           type="checkbox"
//           id="showPassword"
//           onClick={(e) => setShowPassword(e.target.checked)}
//         />
//         <label htmlFor="showPassword">Show Password</label>
//       </div>
//       <button type="submit" className="login-btn">
//         Login
//       </button>
//     </form>
//   );

//   const handleRefistrationForm = () => (
//     <form className="login-form" onSubmit={handleLogin} id="registration">
//       {renderUsernameAndpassword()}
//       <div className="input-container">
//         <input
//           type="password"
//           id="newpassword"
//           required
//           onChange={(e) => setNewPassword(e.target.value)}
//           value={newPassword}
//         />
//         <label htmlFor="newpassword">Re-type New password</label>
//       </div>

//       <button type="submit" className="login-btn">
//         Login
//       </button>
//     </form>
//   );

//   const renderUsernameAndpassword = () => (
//     <>
//       <div className="input-container">
//         <input
//           type="text"
//           id="username"
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//           required
//         />
//         <label htmlFor="username">User Name</label>
//       </div>
//       <div className="input-container">
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="off"
//         />
//         <label htmlFor="password">
//           {isLogin ? "Password" : "New Password"}
//         </label>
//       </div>
//     </>
//   );

//   return (
//     <div className="main-login">
//       <div className="login-container">
//         <div className="login-type-container">
//           <button
//             type="button"
//             className={isLogin ? "active" : "not-active"}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//           <button
//             type="button"
//             className={!isLogin ? "active" : "not-active"}
//             onClick={() => setIsLogin(false)}
//           >
//             Sign Up
//           </button>
//         </div>
//         {isLogin ? handleLoginform() : handleRefistrationForm()}
//       </div>
//     </div>
//   );
// };

// export default Login;
