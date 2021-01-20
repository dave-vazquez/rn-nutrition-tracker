import g from "_globalstyles";

const useFormatMacroData = (title, added, budget, consumed) => {
  const colorKey = title.toLowerCase();
  const underBudget = consumed + added < budget;

  const titleBgColor = underBudget
    ? g.budget_palette[colorKey][0]
    : g.color.warning_1;

  const titleColor =
    // always white with the exception of "Fats" when under budget
    title === "Fats" && underBudget ? g.color.grey_8 : g.color.white;

  const consumedColor = underBudget ? g.color.grey_8 : g.color.warning_1;

  const pieChartData = [
    // "consumed" slice
    {
      key: 1,
      // when over budget, "consumed" is set to maximum amount: "budget"
      amount: underBudget ? consumed : budget,
      svg: {
        fill: underBudget ? g.budget_palette[colorKey][0] : g.color.warning_1,
        stroke: underBudget ? g.budget_palette[colorKey][1] : g.color.warning_2,
      },
    },
    // "added" slice
    {
      key: 2,
      // when over budget, "added" is set 0 so the "consumed" slice fills the whole chart
      amount: underBudget ? added : 0,
      svg: {
        fill: underBudget ? g.budget_palette[colorKey][1] : g.color.warning_1,
        stroke: underBudget ? g.budget_palette[colorKey][1] : g.color.warning_2,
      },
    },
    // "budget" slice
    {
      key: 3,
      // when over budget, "budget" is set 0 so the "consumed" slice fills the whole chart
      amount: underBudget ? budget : 0,
      svg: {
        fill: underBudget ? g.budget_palette[colorKey][2] : g.color.warning_1,
        stroke: underBudget ? g.budget_palette[colorKey][1] : g.color.warning_2,
      },
    },
  ];

  // handles exception for stroke color when formatting data for Fats
  if (title === "Fats") {
    pieChartData.map((slice) => {
      slice.svg.stroke = underBudget ? g.color.yellow_4 : slice.svg.stroke;
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
