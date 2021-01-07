import VMasker from "vanilla-masker";

const maskInputDate = (inputDate) => {
  return VMasker.toPattern(inputDate, "99/99/9999");
};

export default maskInputDate;
