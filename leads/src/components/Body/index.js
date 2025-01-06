import React from "react";

import NosServices from "./NosServices";
import NotreMission from "./NotreMission";
import NousJoindre from "./NousJoindre";

import "./Body.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Body = () => {
  return (
    <section className="body">
      <NosServices />
      <NotreMission />
      <NousJoindre />
    </section>
  );
};
export default Body;
