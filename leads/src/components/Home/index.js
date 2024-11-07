import React from "react";
import "./Home.css";
import family from "../../assets/family.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <img className="hl-image" src={family} alt="family" />
      </div>
      <div className="home-right">
        <div className="hr-title"></div>
        <div className="hr-text"></div>
        <button className="hr-button"></button>
      </div>
    </div>
  );
};

export default Home;
