import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import NosServices from "./NosServices";
import NotreMission from "./NotreMission";
import NousJoindre from "./NousJoindre";

import "./Body.css";
import "swiper/css";
import "swiper/css/pagination";

const Body = () => {
  return (
    <section className="body">
      {" "}
      <Swiper
        slidesPerView={1.2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide style={{ background: "#0c0961" }}>
          <NosServices />
        </SwiperSlide>
        <SwiperSlide style={{ background: "#f77162" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: "#6986ce" }}>
          <NousJoindre />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Body;
