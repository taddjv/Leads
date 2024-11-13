import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import blob1 from "../../assets/blob1.svg";
import "./QuotePage.css";
import "../Home/Home.css";
import "swiper/css";
import companies from "../../assets/companies";

const QuotePage = ({ name, picture }) => {
  return (
    <section className="quotepage">
      <img className="blob1" src={blob1} alt="blob1" />

      <div className="quotepage-top">
        <div className="qpt-left">
          <div className="qptl-title">{name}</div>
          <div className="hr-text">
            "AssurÉlite est là pour vous aider à trouver et à acheter
            efficacement la bonne police d'assurance. Rassurez votre famille
            pour qu'elle puisse se concentrer sur une seule chose: vivre
            pleinement."
          </div>
          <button className="hr-button">Commencer</button>
        </div>
        <div className="qpt-right">
          <img src={picture} alt="person" className="qptr-image" />
        </div>
      </div>
      <div className="quotepage-bottom">
        {" "}
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper qpb-swiper"
        >
          {companies.map((ele, i) => {
            return (
              <SwiperSlide className="qpbs-slide">
                <img className="qpbss-image" src={ele} alt={i + ele} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default QuotePage;
