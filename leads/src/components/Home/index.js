// import React, { useEffect } from "react";
// import HomeDropDown from "./HomeDropdown";
// import "./Home.css";
// import family from "../../assets/family2.png";
// import blob1 from "../../assets/blob1.svg";
// import icon from "../../assets/icon.png";

// const Home = () => {
//   useEffect(() => {
//     const str = "Couvertures Sans Examen Medical";
//     const text = document.getElementById("text");

//     window.onload = function () {
//       for (let i = 0; i < str.length; i++) {
//         let span = document.createElement("span");
//         span.innerHTML = str[i];
//         text.appendChild(span);
//         span.style.transform = `rotate(${11 * i}deg)`;
//       }
//     };
//   }, []);

//   return (
//     <section className="home">
//       <img className="blob1" src={blob1} alt="blob1" />
//       <div className="home-left">
//         <img className="hl-image" src={family} alt="family" />
//       </div>
//       <div className="home-right">
//         <div className="hr-title">
//           {/* <div>Assurez Votre</div> Avenir. */}
//           Assurez Votre Avenir
//         </div>
//         <div className="hr-text">
//           {/* "AssurÉlite est là pour vous aider à trouver et à acheter efficacement
//           la bonne police d'assurance.  */}
//           Rassurez votre famille pour qu'elle puisse se concentrer sur une seule
//           chose: vivre pleinement."
//         </div>
//         <div
//           onMouseEnter={() => {
//             document.querySelector(".hrb-dopdown").style.display = "grid";
//           }}
//           onMouseLeave={() => {
//             document.querySelector(".hrb-dopdown").style.display = "none";
//           }}
//           className="hr-button-container"
//         >
//           <HomeDropDown />
//           <button className="hr-button">Obtenir une Soumission</button>
//         </div>
//       </div>
//       <div className="spin">
//         <img className="icon" src={icon} alt="icon" />
//         <p id="text"></p>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useEffect } from "react";
import HomeDropDown from "./HomeDropdown";
import "./Home.css";
import icon from "../../assets/insurance.svg";
import background from "../../assets/home-background-svg (1)-cropped.svg";

const Home = () => {
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
          <mark>
            Trouvez la <br />
            meilleure Assurance
          </mark>
        </div>
        <div className="home-text">
          Access wholesale mortgage rates with down payments as low as 1%*
        </div>
        <div
          onMouseEnter={() => {
            document.querySelector(".hrb-dopdown").style.display = "grid";
          }}
          onMouseLeave={() => {
            document.querySelector(".hrb-dopdown").style.display = "none";
          }}
          className="hr-button-container"
        >
          <HomeDropDown />
          <button className="hr-button">Obtenir une Soumission</button>
        </div>
        {/* <button className="hr-button">Obtenir une Soumission</button> */}
        <div className="spin">
          <img className="icon" src={icon} alt="icon" />
          <p id="text"></p>
        </div>
      </div>
      <img src={background} alt="background" className="home-background" />
    </section>
  );
};

export default Home;
