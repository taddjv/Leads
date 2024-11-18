import React from "react";
import letter from "../../assets/letter-cropped.svg";

const NousJoindre = () => {
  return (
    <section className="nousjoindre">
      <div className="nj-left">
        <img src={letter} alt="letter" />
      </div>
      <div className="nj-right">
        <div className="njr-title">Nous Joindre</div>
        <div className="njr-form"></div>
      </div>
    </section>
  );
};
export default NousJoindre;
