import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="first">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="socials">facebook</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
