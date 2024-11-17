import React, { useEffect } from "react";
import HomeDropDown from "./HomeDropdown";
import "./Home.css";
import icon from "../../assets/insurance.svg";
import background from "../../assets/home-background-svg (1)-cropped.svg";

const Home = () => {
  useEffect(() => {
    const str = "Couvertures Sans Examen Medical";
    const text = document.getElementById("text");

    window.onload = function () {
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${11 * i}deg)`;
      }
    };
  }, []);
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-title">
          <mark>
            Trouvez la <br />
            meilleure Assurance
          </mark>
        </div>
        <div className="home-text">
          Access wholesale mortgage rates with down payments as low as 1%*
        </div>
        <div
          onMouseEnter={() => {
            document.querySelector(".hrb-dopdown").style.display = "grid";
            document.querySelector(".hr-button").style.borderTopLeftRadius =
              "0";
            document.querySelector(".hr-button").style.borderTopRightRadius =
              "0";
            document.querySelector(
              ".hrb-dopdown"
            ).style.borderBottomLeftRadius = "0";
          }}
          onMouseLeave={() => {
            document.querySelector(".hrb-dopdown").style.display = "none";
            document.querySelector(".hr-button").style.borderTopLeftRadius =
              "12px";
            document.querySelector(".hr-button").style.borderTopRightRadius =
              "12px";
            document.querySelector(
              ".hrb-dopdown"
            ).style.borderBottomLeftRadius = "1rem";
          }}
          className="hr-button-container"
        >
          <HomeDropDown />
          <button className="hr-button">Obtenir une Soumission</button>
        </div>
        <div className="spin">
          <img className="icon" src={icon} alt="icon" />
          <p id="text"></p>
        </div>
      </div>
      <img src={background} alt="background" className="home-background" />
    </section>
  );
};

export default Home;
