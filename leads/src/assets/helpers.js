import { useLayoutEffect, useState, useEffect } from "react";
export const validData = (
  name,
  email,
  number,
  type,
  age,
  sex,
  smoke,
  money
) => {
  return (
    name.length > 0 &&
    email.includes("@" && ".") &&
    number?.length === 12 &&
    age?.length > 0 &&
    //   sex &&
    //   smoke &&
    money?.length > 0
  );
};

export const spinner = () => {
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
};

export const numberSlider = (window) => {
  let val = 6;
  if (window < 450) {
    return 2;
  } else if (window < 600) {
    return 3;
  } else if (window < 750) {
    return 4;
  } else if (window < 1200) {
    return 5;
  } else return val;
};

export const activeScreenList = (active, width) => {
  if (active && width > 679) {
    return "hrb-dopdown hrbd1";
  } else if (active && width < 679) {
    return "hrb-dopdown hrbd2";
  } else {
    return "hrb-dopdown";
  }
};
export const activeScreenButton = (active, width) => {
  if (active && width > 679) {
    return "hr-button hrb1";
  } else if (active && width < 679) {
    return "hr-button";
  } else {
    return "hr-button";
  }
};

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
