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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/patient" element={<Patient />} />
        <Route exact path="/caretaker" element={<Caretaker />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default ProtectedRoute;
