import React, { useEffect, useContext, useRef, useState } from "react";
import { Context } from "../../App";
import NosServices from "./NosServices";
import NotreMission from "./NotreMission";
import NousJoindre from "./NousJoindre";
import left from "../../assets/left-svg.svg";

import "./Body.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Body = () => {
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  const position = useContext(Context)[16];
  const setPosition = useContext(Context)[17];

  return (
    <section className="body">
      <div class="cards-box">
        <div className="nj-buttons">
          <button
            onClick={() => {
              const newPosition = position.split(",");
              const number = newPosition.shift();
              newPosition.push(number);
              setPosition(newPosition.join(","));
            }}
          >
            <img className="njb-image" src={left} alt="left" />
          </button>
          <div className="njb-midddle">
            {" "}
            <div
              className="njbm-title"
              style={{
                background: position[0] == 1 ? "#fbbdb6" : null,
                opacity: position[0] != 1 ? "0" : "1",
              }}
            >
              Première Étape
            </div>
            <div
              className="njbm-title"
              style={{
                background: position[0] == 3 ? "#c5d0ec" : null,
                opacity: position[0] != 3 ? "0" : "1",
              }}
            >
              Deuxième Étape
            </div>
            <div
              className="njbm-title"
              style={{
                background: position[0] == 2 ? "#bdb8fa" : null,
                opacity: position[0] != 2 ? "0" : "1",
              }}
            >
              Troisième Étape
            </div>
          </div>
          <button
            onClick={() => {
              const newPosition = position.split(",");
              const number = newPosition.pop();
              newPosition.unshift(number);
              setPosition(newPosition.join(","));
            }}
          >
            <img className="njb-image" src={left} alt="right" />
          </button>
        </div>
        <NosServices />
        <NotreMission />
        <NousJoindre />
      </div>
    </section>
  );
};
export default Body;
