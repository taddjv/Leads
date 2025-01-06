import React from "react";
import mission from "../../assets/mission.svg";

const NotreMission = () => {
  return (
    <section>
      {" "}
      <div className="nj-container">
        <div className="njr-title">Notre Mission</div>
        <div className="notremission">
          <div className="nj-left">
            <img src={mission} alt="letter" />
          </div>
          <div className="nj-right">
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
                Our mission is to foster long-term relationships with our
                clients, ensuring they have access to expert support and
                resources at every stage of their insurance journey.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotreMission;
