import React from "react";

const HomeDropDown = () => {
  return (
    <div className="hrb-dopdown">
      <div className="hrbd-left">
        <div className="hrbdl-title">Assurance Vie</div>
        <div className="hrbdl-container">
          <div className="hrbdl-icon"></div>
          <a href="/" className="hrbdl-link">
            Assurance Vie Permanente
          </a>
        </div>
        <div className="hrbdl-container">
          <div className="hrbdl-icon"></div>
          <a href="/" className="hrbdl-link">
            Assurance Vie Temporaire
          </a>
        </div>
        <div className="hrbdl-container">
          <div className="hrbdl-icon"></div>
          <a href="/" className="hrbdl-link">
            Assurance Hypothécaire
          </a>
        </div>
      </div>
      <div className="hrbd-right">
        {" "}
        <div className="hrbdl-title">Assurance Prestation du Vivant</div>
        <div className="hrbdl-container">
          <div className="hrbdl-icon"></div>
          <a href="/" className="hrbdl-link">
            Assurance Maladie-Grave
          </a>
        </div>
        <div className="hrbdl-container">
          <div className="hrbdl-icon"></div>
          <a href="/" className="hrbdl-link">
            Assurance Salaire
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeDropDown;
