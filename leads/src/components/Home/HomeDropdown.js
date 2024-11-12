import React from "react";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";

const HomeDropDown = () => {
  return (
    <div className="hrb-dopdown">
      <div className="hrbd-left">
        <div className="hrbdl-title">Assurance Vie</div>
        <div className="hrbdl-container">
          <img src={p1} alt="person" className="hrbdl-icon" />
          <a href="/" className="hrbdl-link">
            Assurance Vie Permanente
          </a>
        </div>
        <div className="hrbdl-container">
          <img src={p2} alt="person" className="hrbdl-icon" />
          <a href="/assurance-vie-temporaire" className="hrbdl-link">
            Assurance Vie Temporaire
          </a>
        </div>
        <div className="hrbdl-container">
          <img src={p3} alt="person" className="hrbdl-icon" />
          <a href="/" className="hrbdl-link">
            Assurance Hypothécaire
          </a>
        </div>
      </div>
      <div className="hrbd-right">
        {" "}
        <div className="hrbdl-title">Assurance Prestation du Vivant</div>
        <div className="hrbdl-container">
          <img src={p4} alt="person" className="hrbdl-icon" />
          <a href="/" className="hrbdl-link">
            Assurance Maladie-Grave
          </a>
        </div>
        <div className="hrbdl-container">
          <img src={p5} alt="person" className="hrbdl-icon" />
          <a href="/" className="hrbdl-link">
            Assurance Salaire
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeDropDown;
