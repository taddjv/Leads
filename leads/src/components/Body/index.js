import React, { useEffect, useContext } from "react";
import { Context } from "../../App";
import NosServices from "./NosServices";
import NotreMission from "./NotreMission";
import NousJoindre from "./NousJoindre";

import "./Body.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Body = () => {
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  return (
    <section className="body">
      <div class="cards-box">
        <NosServices />
        {/* <NotreMission /> */}
        <NousJoindre />
      </div>
    </section>
  );
};
export default Body;
