import React from "react";
import "./QuotePage.css";
import blob1 from "../../assets/blob1.svg";
import picture from "../../assets/AVT.svg";
import "../Home/Home.css";

const QuotePage = () => {
  return (
    <section className="home">
      <img className="blob1" src={blob1} alt="blob1" />
      <div className="home-left">
        <img className="hl-image" src={picture} alt="family" />
      </div>
      <div className="home-right">
        <div className="hr-title">Assurez Votre Avenir.</div>
        <div className="hr-text">
          "AssurÉlite est là pour vous aider à trouver et à acheter efficacement
          la bonne police d'assurance. Rassurez votre famille pour qu'elle
          puisse se concentrer sur une seule chose: vivre pleinement."
        </div>
        <div className="hr-button-container">
          <button className="hr-button">Obtenir une Soumission</button>
        </div>
      </div>
    </section>
  );
};

export default QuotePage;
