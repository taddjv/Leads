import  { useLayoutEffect, useState } from 'react';
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

export const  useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}