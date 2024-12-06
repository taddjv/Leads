import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import HomeDropDown from "./HomeDropdown";

import icon from "../../assets/insurance.svg";
import background from "../../assets/home-background-svg (1)-cropped.svg";
import companies from "../../assets/companies";
import { useWindowSize } from "../../assets/helpers";

import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Home = () => {
  const [width] = useWindowSize();

  const num = (window) => {
    let val = 7
    if (window < 450) { return 2 } else
    if (window < 600) { return 3 } else
    if (window < 750) { return 4} else
    if (window < 900) {  return 5 } else
    if (window < 1050) {  return 6 } else
  
    return val;
  }

  useEffect(() => {
    const str = "Couvertures Sans Examen Medical";
    const text = document.getElementById("text");

    window.onload = function () {
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${11 * i}deg)`;
      }
    };
  }, []);
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-title">
          Trouvez la <br />
          meilleure Assurance
        </div>
        <div className="home-text">
          Access wholesale mortgage rates with down payments as low as 1%*
        </div>
        <div
          onMouseEnter={() => {
            document.querySelector(".hrb-dopdown").style.display = "grid";
            document.querySelector(".hr-button").style.borderTopLeftRadius =
              "0";
            document.querySelector(".hr-button").style.borderTopRightRadius =
              "0";
            document.querySelector(
              ".hrb-dopdown"
            ).style.borderBottomLeftRadius = "0";
          }}
          onMouseLeave={() => {
            document.querySelector(".hrb-dopdown").style.display = "none";
            document.querySelector(".hr-button").style.borderTopLeftRadius =
              "12px";
            document.querySelector(".hr-button").style.borderTopRightRadius =
              "12px";
            document.querySelector(
              ".hrb-dopdown"
            ).style.borderBottomLeftRadius = "1rem";
          }}
          className="hr-button-container"
        >
          <HomeDropDown />
          <button className="hr-button">Obtenir une Soumission</button>
        </div>
        <div className="spin">
          <img className="icon" src={icon} alt="icon" />
          <p id="text"></p>
        </div>
      </div>
      <img src={background} alt="background" className="home-background" />
      <Swiper
          slidesPerView={num(width)}
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
    </section>
  );
};

export default Home;
