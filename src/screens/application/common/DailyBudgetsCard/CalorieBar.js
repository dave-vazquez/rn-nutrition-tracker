import { Colors, Layout, Typography } from "_global_styles";
import { useFormatCalorieData } from "_hooks";
import React, { memo } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";

const keys = ["consumed", "added", "budget"];

const CalorieBar = ({ consumed, added, budget }) => {
  const [data, colors] = useFormatCalorieData(consumed, added, budget);

  return (
    <View>
      <View style={s.container}>
        <ValueOverlay budget={budget} consumed={consumed + added} />
        <StackedBarChart
          horizontal
          data={data}
          colors={colors}
          style={s.chart}
          keys={keys}
        />
      </View>
    </View>
  );
};

const ValueOverlay = ({ budget, consumed }) => {
  const color = {
    consumed: {
      color: consumed / budget <= 0.25 ? Colors.grey.s8 : Colors.white,
    },
    budget: {
      color: consumed / budget <= 0.96 ? Colors.grey.s8 : Colors.white,
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
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowRadius: 1,
        shadowOpacity: 2,
        shadowColor: "#00000030",
        shadowOffset: { width: 0, height: 2 },
      },
    }),
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  chart: {
    top: -3,
    height: 50,
    position: "relative",
  },
  overlay: {
    zIndex: 1,
    elevation: 4,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Layout.spacing.md,
    justifyContent: "space-between",
    ...StyleSheet.absoluteFill,
  },
  value: {
    fontSize: 20,
    fontFamily: Typography.font.lato.regular,
  },
});

CalorieBar.whyDidYouRender = true;

export default memo(CalorieBar);
