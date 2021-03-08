export const calcNetTotal = (
  amount,
  quantity,
  precision = 1,
  format = false
) => {
  amount = (amount * quantity).toFixed(precision);

  return format && amount < 0.1 ? "< .1" : amount;
};

export const calcDailyVal = (dailyValue, quantity) => {
  return (dailyValue * quantity).toFixed(0) + " %";
};
