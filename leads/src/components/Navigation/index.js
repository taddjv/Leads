import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-left">
        <img className="nl-logo" src={logo} alt="logo" />
        <a to="/" className="hr-Link">
          Assurance Maladie Grave
        </a>
      </div>
      <div className="navigation-right">FR</div>
    </div>
  );
}

export default Navigation;
