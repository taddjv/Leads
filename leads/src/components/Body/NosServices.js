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
          <li className="njr-bullet"></li>
        </ul>
        <div className="njr-text"></div>
      </div>
    </section>
  );
};
export default NosServices;
