import { Colors } from "_global_styles";

const useFormatCalorieData = (consumed, added, budget) => {
  const balance = budget - (consumed + added);
  const underBudget = consumed + added < budget;

  const data = [
    {
      consumed: underBudget ? consumed : budget,
      added: underBudget ? added : 0,
      budget: underBudget ? balance : 0,
    },
  ];

  const colors = underBudget
    ? [Colors.green.light.s4, Colors.green.light.s5, Colors.white]
    : [Colors.warning.s1, Colors.warning.s2, Colors.green.light.s5];

  return [data, colors];
};

export default useFormatCalorieData;
