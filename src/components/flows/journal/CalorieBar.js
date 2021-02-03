import { colors } from "_global_styles";
import { useFormatCalorieData } from "_hooks";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";

const keys = ["consumed", "added", "budget"];

const CalorieBar = ({ consumed, added, budget }) => {
  const [data, colors] = useFormatCalorieData(consumed, added, budget);

  console.log("data", ...data);

  return (
    <View style={s.container}>
      <ValueOverlay budget={budget} consumed={consumed + added} />
      <StackedBarChart
        animate
        horizontal
        data={data}
        colors={colors}
        style={s.chart}
        animationDuration={500}
        keys={keys}
      />
    </View>
  );
};

const ValueOverlay = ({ budget, consumed }) => {
  const color = {
    consumed: {
      color: consumed / budget <= 0.25 ? colors.grey_8 : colors.white,
    },
    budget: {
      color: consumed / budget >= 0.96 ? colors.white : colors.grey_8,
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
    backgroundColor: colors.white,
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
    zIndex: 1,
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

CalorieBar.whyDidYouRender = true;

export default memo(CalorieBar);
