import React, { useEffect,useContext } from "react";
import { Context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import HomeDropDown from "./HomeDropdown";

import icon from "../../assets/insurance.svg";
import background from "../../assets/home-background-svg (1)-cropped.svg";
import companies from "../../assets/companies";
import { useWindowSize,spinner,numberSlider,activeScreenButton } from "../../assets/helpers";

import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Home = () => {
  const [width] = useWindowSize();
  const active = useContext(Context)[18];
  const setActive = useContext(Context)[19];


  useEffect(() => {
    spinner()
  }, []);

  return (
    <section className="home">
      <div className= "home-container"
      >
        <div className="home-title">
          Trouvez la <br />
          meilleure Assurance
        </div>
        <div className="home-text">
          Access wholesale mortgage rates with down payments as low as 1%*
        </div>
        <div
          onMouseEnter={() => {setActive(true)}}
          onMouseLeave={() => {setActive(false)}}
          className="hr-button-container"
        >
          <HomeDropDown />
          <button className={activeScreenButton(active,width)}>Obtenir une Soumission</button>
        </div>
        <div className="spin">
          <img className="icon" src={icon} alt="icon" />
          <p id="text"></p>
        </div>
      </div>
      <img src={background} alt="background" className="home-background" />
      <Swiper
        slidesPerView={numberSlider(width)}
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
