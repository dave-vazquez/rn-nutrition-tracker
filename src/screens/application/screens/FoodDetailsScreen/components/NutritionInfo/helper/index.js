export const calcAmount = (amount, quantity) => {
  return amount * quantity >= 0.1 ? (amount * quantity).toFixed(1) : "< .1";
};

export const calcDailyVal = (dailyValue, quantity) => {
  return (dailyValue * quantity).toFixed(0) + " %";
};
