import React from "react";
import "./QuotePage.css";
import blob1 from "../../assets/blob1.svg";
import picture from "../../assets/AVT.svg";
import "../Home/Home.css";

const QuotePage = () => {
  return (
    <section className="quotepage">
      <img className="blob1" src={blob1} alt="blob1" />
      <div className="quotepage-top">
      <div className="qpt-left">
        <div className="hr-title">Assurance Vie</div>
        <div className="hr-text">
          "AssurÉlite est là pour vous aider à trouver et à acheter efficacement
          la bonne police d'assurance. Rassurez votre famille pour qu'elle
          puisse se concentrer sur une seule chose: vivre pleinement."
        </div>
        <button className="hr-button">Commencer</button>
        </div>
        <div className="qpt-right">
          <img src={picture} alt="person" className="qptr-image"/>
        </div>
        
      </div>
      <div className="quotepage-bottom">hello</div>
    </section>
  );
};

export default QuotePage;
