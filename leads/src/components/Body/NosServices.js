import React, { useEffect, useContext } from "react";
import { Context } from "../../App";
import service from "../../assets/service-cropped-svg (1).svg";

const NosServices = () => {
  const position = useContext(Context)[16];
  return (
    <div
      className={`nousjoindre position-${position[0]}`}
      style={{ background: "#fbbdb6" }}
    >
      {window.innerWidth < 1000 ? (
        <div className="njr-title">Nos Services</div>
      ) : null}
      <div className="nj-left">
        <img src={service} alt="letter" />
      </div>
      <div className="nj-right">
        {window.innerWidth > 1000 ? (
          <div className="njr-title">Nos Services</div>
        ) : null}

        <div className="njr-main">
          <div className="njrm-title">Personalized Advisor Matching</div>
          <div className="njrm-desc">
            We connect clients with financial advisors who specialize in their
            specific insurance needs, ensuring a tailored and effective advisory
            experience.
          </div>
        </div>
        <div className="njr-main">
          <div className="njrm-title">Comprehensive Insurance Solutions</div>
          <div className="njrm-desc">
            From life insurance to health, property, and more, our advisors
            provide expert guidance on a wide range of insurance products to
            help clients find the best coverage.
          </div>
        </div>
        <button
          className="hr-button"
          style={{
            background: "#4A6EDB",
            fontSize: "1rem",
            padding: "12px 18px",
          }}
        >
          Soumission
        </button>
        {/* <div className="njr-main">
          <div className="njrm-title">Ongoing Support and Consultation</div>
          <div className="njrm-desc">
            Our platform offers continuous support, with advisors available for
            follow-ups and consultations to adjust and optimize insurance plans
            as clients' needs evolve.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NosServices;
