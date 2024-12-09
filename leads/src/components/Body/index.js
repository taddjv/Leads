import React, { useEffect, useContext, useRef, useState } from "react";
import { Context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import NosServices from "./NosServices";
import NotreMission from "./NotreMission";
import NousJoindre from "./NousJoindre";

import left from "../../assets/left-svg.svg";
import { useWindowSize } from "../../assets/helpers";

import "./Body.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Body = () => {
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  const position = useContext(Context)[16];
  const setPosition = useContext(Context)[17];

  const [width] = useWindowSize();

  useEffect(() => {
    const njWidth = document.querySelector(".nousjoindre").offsetWidth;
    const width = document.querySelector(":root");
    const height = 0.000635186 * Math.pow(njWidth, 2) - 0.145233 * njWidth;

    width.style.setProperty("--njheight", `${height + 550}px`);
    width.style.setProperty("--njheight2", `${height + 600}px`);
    width.style.setProperty("--njheight3", `${height + 625}px`);
  }, [width]);

  return (
    <section className="body">
      <div class="cards-box">
        <NosServices />
        <NotreMission />
        <NousJoindre />
        <div className="nj-buttons">
          <button
            onClick={() => {
              const newPosition = position.split(",");
              const number = newPosition.shift();
              newPosition.push(number);
              setPosition(newPosition.join(","));
            }}
            style={{
              left: "-23px",
            }}
          >
            <img
              className="njb-image"
              src={left}
              alt="left"
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </button>
          <div className="njb-midddle">
            {" "}
            <div
              className="njbm-title"
              style={{
                background: position[0] == 1 ? "#fbbdb6" : null,
                opacity: position[0] != 1 ? "0" : "1",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
                paddingLeft: "3em",
              }}
            >
              Étape 1
            </div>
            <div
              className="njbm-title"
              style={{
                background: position[0] == 3 ? "#c5d0ec" : null,
                opacity: position[0] != 3 ? "0" : "1",
                borderRadius: "12px",
              }}
            >
              Étape 2
            </div>
            <div
              className="njbm-title"
              style={{
                background: position[0] == 2 ? "#bdb8fa" : null,
                opacity: position[0] != 2 ? "0" : "1",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
                paddingRight: "3em",
              }}
            >
              Étape 3
            </div>
          </div>
          <button
            onClick={() => {
              const newPosition = position.split(",");
              const number = newPosition.pop();
              newPosition.unshift(number);
              setPosition(newPosition.join(","));
            }}
            style={{
              right: "-23px",
            }}
          >
            <img className="njb-image" src={left} alt="right" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Body;
