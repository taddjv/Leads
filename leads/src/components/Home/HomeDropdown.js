import React, { useContext } from "react";
import { Context } from "../../App";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import { useWindowSize, activeScreenList } from "../../assets/helpers";

const HomeDropDown = () => {
  const [width] = useWindowSize();
  const active = useContext(Context)[18];
  const setActive = useContext(Context)[19];

  const left = (
    <>
      <div className="hrbdl-title">Assurance Prestation du Vivant</div>
      <div className="hrbdl-container">
        <img src={p4} alt="person" className="hrbdl-icon" />
        <a href="/assurance-maladie-grave" className="hrbdl-link">
          Assurance Maladie-Grave
        </a>
      </div>
      <div
        className="hrbdl-container"
        style={width < 679 ? { marginBottom: "24px" } : null}
      >
        <img src={p5} alt="person" className="hrbdl-icon" />
        <a href="/assurance-salaire" className="hrbdl-link">
          Assurance Salaire
        </a>
      </div>
    </>
  );
  return (
    <div
      className={activeScreenList(active, width)}
      style={width < 679 ? { gridTemplateColumns: "auto" } : null}
    >
      <div className="hrbd-left">
        <div className="hrbdl-title">Assurance Vie</div>
        <div className="hrbdl-container">
          <img src={p1} alt="person" className="hrbdl-icon" />
          <a href="/soumission" className="hrbdl-link">
            Assurance Vie Permanente
          </a>
        </div>
        <div className="hrbdl-container">
          <img src={p2} alt="person" className="hrbdl-icon" />
          <a href="/assurance-vie-temporaire" className="hrbdl-link">
            Assurance Vie Temporaire
          </a>
        </div>
        <div
          className="hrbdl-container"
          style={width < 679 ? { marginBottom: "24px" } : null}
        >
          <img src={p3} alt="person" className="hrbdl-icon" />
          <a href="/assurance-hypothecaire" className="hrbdl-link">
            Assurance Hypothécaire
          </a>
        </div>
        {width < 679 ? left : null}
        {width < 679 ? (
          <button
            className="hr-button"
            onClick={(e) => {
              e.stopPropagation();
              setActive(false);
            }}
          >
            Retour
          </button>
        ) : null}
      </div>
      {width > 679 ? <div className="hrbd-right">{left}</div> : null}
    </div>
  );
};

export default HomeDropDown;
