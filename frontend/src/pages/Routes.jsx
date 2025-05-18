import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Homepage from "./Homepage";
import Menupage from "./Menupage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/menu" element={<Menupage/>}/>
    </Routes>
  );
};

export default AppRoutes;
