import { Route, Routes, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Cookies from "js-cookie";

import Home from "../Home";
import Patient from "../Patient";
import Caretaker from "../Caretaker";
import NotFound from "../NotFound";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("medicare_token");
    if (token === undefined) {
      navigate("/login");
    }
  });

  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/patient" Component={Patient} />
        <Route exact path="/caretaker" Component={Caretaker} />
        <Route Component={NotFound} />
      </Routes>
    </>
  );
};

export default ProtectedRoute;
