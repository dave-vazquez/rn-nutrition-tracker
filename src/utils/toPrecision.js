const toPrecision = (num, precision) => {
  if (precision === 0) return Math.round(num);
  return Math.round(num * (10 * precision)) / (10 * precision);
};

export default toPrecision;
