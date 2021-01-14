const toPrecision = (num, precision) => {
  return Math.round(num * (10 * precision)) / (10 * precision);
};

export default toPrecision;
