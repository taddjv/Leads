import React, { useEffect, useContext } from "react";
import { Context } from "../../App";

import support from "../../assets/support.svg";
import solution from "../../assets/solution.svg";
import advisor from "../../assets/advisor.svg";

const NosServices = () => {
  return (
    <section>
      <div className="nj-container">
        <div className="njr-title">Nos Services</div>
        <div className="nosservices">
          <div className="njr-main">
            <img src={advisor} className="njrm-image" alt="advisor" />
            <div className="njrm-image"></div>
            <div className="njrm-title">Personalized Advisor Matching</div>
            <div className="njrm-desc">
              We connect clients with financial advisors who specialize in their
              specific insurance needs, ensuring a tailored and effective
              advisory experience.
            </div>
          </div>
          <div className="njr-main">
            <img src={solution} className="njrm-image" alt="solution" />
            <div className="njrm-title">Comprehensive Insurance Solutions</div>
            <div className="njrm-desc">
              From life insurance to health, property, and more, our advisors
              provide expert guidance on a wide range of insurance products to
              help clients find the best coverage.
            </div>
          </div>
          <div className="njr-main">
            <img src={support} className="njrm-image" alt="support" />
            <div className="njrm-title">Ongoing Support and Consultation</div>
            <div className="njrm-desc">
              Our platform offers continuous support, with advisors available
              for follow-ups and consultations to adjust and optimize insurance
              plans as clients' needs evolve.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosServices;
