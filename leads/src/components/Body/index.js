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
        <SwiperSlide>
          <NousJoindre />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Body;
