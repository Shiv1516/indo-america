import React from "react";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`hamburger-menu ${isOpen ? "open-nav" : ""}`}
      onClick={toggleMenu}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
};

export default HamburgerMenu;
