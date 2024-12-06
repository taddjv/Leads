import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-curve"></div>
      <div className="footer-contact">
        <div className="fc-left">
          <button></button>
          <button></button>
        </div>
        <div className="fc-right">
          <div>Lundi au vendredi : 8 h à 20 h</div>
          <div>Samedi et dimanche : 10 h à 18 h</div>
        </div>
      </div>
      <div className="footer-socials"></div>
      <div className="footer-links">
        <a href="/">Conditions d’utilisations</a>
        <a href="/">Protection des renseignements personnels</a>
        <a href="/">Divulgation de renseignements</a>
        <a href="/">Plaintes</a>
      </div>
      <div className="footer-bottom">
        Genie Assurance © 2024 – Tous droits réservés.
      </div>
    </div>
  );
};

export default Footer;
