import { budget_palette, colors } from "_global_styles/base.js";

const useFormatMacroData = (title, added, budget, consumed) => {
  const colorKey = title.toLowerCase();
  const underBudget = consumed + added < budget;

  const titleBgColor = underBudget
    ? budget_palette[colorKey][0]
    : colors.warning_1;

  const titleColor =
    // always white with the exception of "Fats" when under budget
    title === "Fats" && underBudget ? colors.grey_8 : colors.white;

  const consumedColor = underBudget ? colors.grey_8 : colors.warning_1;

  const pieChartData = [
    // "consumed" slice
    {
      key: 1,
      // when over budget, "consumed" is set to maximum amount: "budget"
      amount: underBudget ? consumed : budget,
      svg: {
        fill: underBudget ? budget_palette[colorKey][0] : colors.warning_1,
        stroke: underBudget ? budget_palette[colorKey][1] : colors.warning_2,
      },
    },
    // "added" slice
    {
      key: 2,
      // when over budget, "added" is set 0 so the "consumed" slice fills the whole chart
      amount: underBudget ? added : 0,
      svg: {
        fill: underBudget ? budget_palette[colorKey][1] : colors.warning_1,
        stroke: underBudget ? budget_palette[colorKey][1] : colors.warning_2,
      },
    },
    // "budget" slice
    {
      key: 3,
      // when over budget, "budget" is set 0 so the "consumed" slice fills the whole chart
      amount: underBudget ? budget : 0,
      svg: {
        fill: underBudget ? budget_palette[colorKey][2] : colors.warning_1,
        stroke: underBudget ? budget_palette[colorKey][1] : colors.warning_2,
      },
    },
  ];

  // handles exception for stroke color when formatting data for Fats
  if (title === "Fats") {
    pieChartData.map((slice) => {
      slice.svg.stroke = underBudget ? colors.yellow_4 : slice.svg.stroke;
      return slice;
    });
  }

  return {
    data: pieChartData,
    consumedColor,
    titleBgColor,
    titleColor,
  };
};

export default useFormatMacroData;
