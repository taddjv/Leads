import React, { useEffect, useContext } from "react";
import { Context } from "../../App";
import mission from "../../assets/mission.svg";

const NotreMission = () => {
  const position = useContext(Context)[16];
  useEffect(() => {
    const container = document.querySelector(".nousjoindre").classList;
    document.querySelector(".nousjoindre").classList.remove(position);
  }, [position]);
  return (
    <div
      className={`nousjoindre position-${position[2]}`}
      style={{ background: "#c5d0ec" }}
    >
      {window.innerWidth < 1000 ? (
        <div className="njr-title">Notre Mission</div>
      ) : null}
      <div className="nj-left">
        <img src={mission} alt="letter" />
      </div>
      <div className="nj-right">
        {window.innerWidth > 1000 ? (
          <div className="njr-title">Notre Mission</div>
        ) : null}
        <div className="njr-main">
          <div className="njrm-title">Empowering Informed Decisions</div>
          <div className="njrm-desc">
            We are committed to helping clients make confident, informed
            decisions about their insurance needs by connecting them with
            experienced advisors who offer personalized guidance tailored to
            their unique situations.
          </div>
        </div>
        <div className="njr-main">
          <div className="njrm-title">Building Lasting Relationships</div>
          <div className="njrm-desc">
            Our mission is to foster long-term relationships with our clients,
            ensuring they have access to expert support and resources at every
            stage of their insurance journey.
          </div>
        </div>
        <button
          className="hr-button"
          style={{
            background: "#f77162",
            fontSize: "1rem",
            padding: "12px 18px",
          }}
        >
          Soumission
        </button>
      </div>
    </div>
  );
};
export default NotreMission;
