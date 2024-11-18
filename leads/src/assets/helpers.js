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
