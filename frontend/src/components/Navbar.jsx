import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  return (
    <header className="flex items-center gap-4 px-4 md:py-2 justify-between bg-neutral-50 text-black">

      <img src={logo} alt="BiteLine Logo" className="h-12 w-auto" />

      <div className="flex gap-10 text-sm font-semibold">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
      </div>
    </header>
  );
};

export default Navbar;
