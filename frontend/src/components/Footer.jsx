import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center font-semibold textarea-md bg-amber-300 text-black p-1">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by NAM
          Power Tools
        </p>
      </footer>
    </>
  );
};

export default Footer;
