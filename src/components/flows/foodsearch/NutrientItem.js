import { colors } from "_globalstyles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NutrientItem = ({ name, quantity, unit, subNutrient = true }) => {
  const valueStyle = subNutrient ? s.regular : s.bold;
  const nameStyle = subNutrient ? [s.regular, { marginLeft: 10 }] : s.bold;

  return (
    <View style={s.row}>
      <View style={[s.col, { flex: 7 }]}>
        <Text style={nameStyle}>{name}</Text>
      </View>
      <View style={[s.col, { flex: 2 }]}>
        <Text style={[valueStyle, { textAlign: "right" }]}>{quantity}</Text>
      </View>
      <View style={[s.col, { flex: 1 }]}>
        <Text style={[valueStyle, { textAlign: "right" }]}>{unit}</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  row: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  col: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontFamily: "Lato_Bold",
    color: colors.grey_8,
    fontSize: 18,
    width: "100%",
  },
  regular: {
    fontFamily: "Lato_Regular",
    color: colors.grey_7,
    fontSize: 17,
    width: "100%",
  },
});

export default NutrientItem;
