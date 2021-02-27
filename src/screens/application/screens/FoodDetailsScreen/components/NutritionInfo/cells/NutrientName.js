import { Colors } from "_global_styles";
import React from "react";
import { Cell } from "react-native-table-component";
import { default as s } from "../styles";

const titleColors = {
  Calories: Colors.white,
  Fats: Colors.grey.s8,
  Carbohydrates: Colors.white,
  Protein: Colors.white,
};

const bgColors = {
  Calories: Colors.green.light.s4,
  Fats: Colors.yellow.s2,
  Carbohydrates: Colors.blue.s2,
  Protein: Colors.pink.s2,
};

const NutrientName = ({ flex, name, keyNutrient, macroNutrient }) => {
  const cellStyle = macroNutrient && [
    s.macro_cell,
    { backgroundColor: bgColors[name] },
  ];
  const textStyle = macroNutrient
    ? [
      s.regular,
      {
        color: titleColors[name],
        textAlign: "center",
      },
    ]
    : keyNutrient
      ? [s.bold, { textAlign: "left" }]
      : [s.regular, { textAlign: "center" }];

  return (
    <Cell flex={flex} data={name} style={cellStyle} textStyle={textStyle} />
  );
};

export default NutrientName;
