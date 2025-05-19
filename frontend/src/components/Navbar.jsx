import React from "react";
import { Link } from "react-router-dom";
import logoTransparent from "../assets/logo/logo-transparent.png";

const Navbar = () => {
  return (
    <header className="flex items-center gap-4 px-6 justify-between">

      <img src={logoTransparent} alt="BiteLine Logo" className="h-16 w-auto" />

      <div className="flex gap-10 text-sm font-semibold">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
      </div>
    </header>
  );
};

export default Navbar;
