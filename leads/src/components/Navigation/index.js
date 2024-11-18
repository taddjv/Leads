import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

function Navigation() {
  const [showing, setShowing] = useState(false);
  return (
    <div
      className={
        window.location.pathname.includes("soumission")
          ? "navigation-s"
          : "navigation"
      }
      //  className="navigation"
    >
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
        <div
          onClick={() => {
            if (showing) {
              setShowing(false);
            } else {
              setShowing(true);
            }
          }}
          className={showing ? "nr-x" : "nr-burger"}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className="nr-button">EN</button>
      </div>
      {showing ? (
        <div className="navigation-popup">
          <div className="np-top">
            {" "}
            <a href="/" className="npt-ink">
              accueil
            </a>
            <a href="/" className="npt-ink">
              nos services
            </a>
            <a href="/" className="npt-ink">
              notre mission
            </a>
            <a href="/" className="npt-ink">
              nous joindre
            </a>
          </div>
          <div className="np-bottom">
            <a href="/" className="npt-ink">
              <img className="npb-logo" src={facebook} alt="facebook" />
            </a>
            <a href="/" className="npt-ink">
              <img className="npb-logo" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navigation;
