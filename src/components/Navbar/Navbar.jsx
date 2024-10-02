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
          <ul className="links">
            <li>Accueil</li>
            <li>A Propos</li>
            <li>Offres</li>
            <li>Processus</li>
            <li>Avis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
