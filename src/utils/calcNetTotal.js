const calcNetTotal = (amount, quantity, precision = 0, formatted = false) => {
  const netTotal = +((amount || 0) * (quantity || 0)).toFixed(precision);

  if (netTotal === 0) return formatted ? "-" : 0;

  if (netTotal < 0.1) return formatted ? "< .1" : netTotal;

  return netTotal;
};

export default calcNetTotal;
