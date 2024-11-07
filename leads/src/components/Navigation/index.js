import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-left">
        <img className="nl-logo" src={logo} alt="logo" />
        <div className="nl-name">name</div>
      </div>
      <div className="navigation-right">
        {" "}
        <a href="/" className="nr-Link">
          accueil
        </a>
        <a href="/" className="nr-Link">
          nos services
        </a>
        <a href="/" className="nr-Link">
          notre mission
        </a>
        <a href="/" className="nr-Link">
          nous joindre
        </a>
        <button className="nr-button">EN</button>
      </div>
    </div>
  );
}

export default Navigation;
