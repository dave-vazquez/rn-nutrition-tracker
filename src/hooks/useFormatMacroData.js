import { Colors } from "_global_styles";

const bgColors = {
  Fats: Colors.yellow.s2,
  Carbs: Colors.blue.s2,
  Protein: Colors.pink.s2,
};

const chartColors = {
  Fats: [Colors.yellow.s2, Colors.yellow.s3, Colors.yellow.s1],
  Carbs: [Colors.blue.s2, Colors.blue.s3, Colors.blue.s1],
  Protein: [Colors.pink.s2, Colors.pink.s3, Colors.pink.s1],
};

const useFormatMacroData = (title, added, budget, consumed) => {
  const balance = budget - (consumed + added);
  const underBudget = consumed + added < budget;

  const titleBgColor = underBudget ? bgColors[title] : Colors.warning.s1;

  const titleColor =
    title === "Fats" && underBudget ? Colors.grey.s8 : Colors.white;

  const consumedColor = underBudget ? Colors.grey.s8 : Colors.warning.s1;

  const pieChartData = [
    {
      key: 1,
      amount: underBudget ? consumed : budget,
      svg: {
        fill: underBudget ? chartColors[title][0] : Colors.warning.s1,
        stroke: underBudget ? chartColors[title][1] : Colors.warning.s2,
      },
    },
    {
      key: 2,
      amount: underBudget ? added : 0,
      svg: {
        fill: underBudget ? chartColors[title][1] : Colors.warning.s1,
        stroke: underBudget ? chartColors[title][1] : Colors.warning.s2,
      },
    },
    {
      key: 3,
      amount: underBudget ? balance : 0,
      svg: {
        fill: underBudget ? chartColors[title][2] : Colors.warning.s1,
        stroke: underBudget ? chartColors[title][1] : Colors.warning.s2,
      },
    },
  ];

  // handles exception for stroke color when formatting data for Fats
  if (title === "Fats") {
    pieChartData.map((slice) => {
      slice.svg.stroke = underBudget ? Colors.yellow.s4 : slice.svg.stroke;
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
