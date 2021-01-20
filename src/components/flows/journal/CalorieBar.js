import g from "_globalstyles";
import { useFormatCalorieData } from "_hooks";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";

const CalorieBar = ({ budget, consumed, added }) => {
  //
  const [data, colors] = useFormatCalorieData(budget, consumed, added);

  return (
    <View style={s.container}>
      <ValueOverlay budget={budget} consumed={consumed + added} />
      <StackedBarChart
        animate
        horizontal
        data={[data]}
        colors={colors}
        style={s.chart}
        animationDuration={500}
        keys={["consumed", "added", "budget"]}
      />
    </View>
  );
};

const ValueOverlay = ({ budget, consumed }) => {
  const color = {
    consumed: {
      color: consumed / budget <= 0.25 ? g.color.grey_8 : g.color.white,
    },
    budget: {
      color: consumed / budget >= 0.96 ? g.color.white : g.color.grey_8,
    },
  };

  return (
    <View style={s.overlay}>
      <Text style={[s.value, color.consumed]}>{Math.round(consumed)} cal</Text>
      <Text style={[s.value, color.budget]}>{budget} cal</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: 39,
    elevation: 3,
    width: "100%",
    shadowRadius: 1,
    borderRadius: 5,
    shadowOpacity: 2,
    overflow: "hidden",
    justifyContent: "center",
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
  },
  chart: {
    top: -3,
    height: 50,
    position: "relative",
  },
  overlay: {
    elevation: 4,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    ...StyleSheet.absoluteFill,
  },
  value: {
    fontSize: 20,
    fontFamily: "Lato_Regular",
  },
});

export default CalorieBar;
