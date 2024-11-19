import React from "react";
import service from "../../assets/service-cropped.svg";

const NosServices = () => {
  return (
    <section className="nousjoindre">
      {" "}
      <div className="nj-left">
        <img src={service} alt="letter" />
      </div>
      <div className="nj-right">
        <div className="njr-title">Nos Services</div>

        <ul className="njr-bullets">
          <li className="njr-bullet">Personalized Advisor Matching:</li>
          We connect clients with financial advisors who specialize in their
          specific insurance needs, ensuring a tailored and effective advisory
          experience.
          <li className="njr-bullet">Comprehensive Insurance Solutions:</li>
          <div className="njrb-text">
            From life insurance to health, property, and more, our advisors
            provide expert guidance on a wide range of insurance products to
            help clients find the best coverage.
          </div>
          <li className="njr-bullet">Ongoing Support and Consultation:</li>
          <div className="njrb-text">
            Our platform offers continuous support, with advisors available for
            follow-ups and consultations to adjust and optimize insurance plans
            as clients' needs evolve.
          </div>
        </ul>
        <div className="njr-text"></div>
      </div>
    </section>
  );
};
export default NosServices;
