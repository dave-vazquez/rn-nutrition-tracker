import g from "_globalstyles";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-svg-charts";

const screen = Dimensions.get("screen");

const MacroWheel = ({ budget, consumed, colors, title }) => {
  // console.log("title", title);
  // console.log("budget", budget);
  // console.log("consumed", consumed);
  // console.log("\n");
  const data = [
    {
      key: 1,
      amount: consumed,
      svg: {
        fill: colors[0],
        stroke: colors[2] ? colors[2] : colors[0],
      },
    },
    {
      key: 2,
      amount: budget - consumed,
      svg: {
        fill: colors[1],
        stroke: colors[2] ? colors[2] : colors[0],
      },
    },
  ];

  return (
    <View style={s.container}>
      <Title title={title} bgColor={colors[0]} />
      <ValueOverlay consumed={consumed} budget={budget} />
      <PieChart
        data={data}
        style={s.chart}
        valueAccessor={({ item }) => item.amount}
        padAngle={0}
        innerRadius={35}
        animate
      />
    </View>
  );
};

const Title = ({ bgColor, title }) => {
  return (
    <View style={[s.title, { backgroundColor: bgColor }]}>
      <Text
        style={[
          s.titleText,
          { color: title === "Fats" ? g.color.grey_8 : "white" },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const ValueOverlay = ({ consumed, budget }) => {
  return (
    <View style={s.overlay}>
      <Text style={s.value}>{consumed} g</Text>
      <Text style={[s.value, s.budget]}>{budget} g</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    height: 100,
    width: screen.width / 4,
  },
  title: {
    height: 25,
    elevation: 3,
    width: "100%",
    shadowRadius: 1,
    borderRadius: 5,
    marginBottom: 10,
    shadowOpacity: 2,
    justifyContent: "center",
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
  },
  titleText: {
    fontSize: 16,
    textAlign: "center",
    color: g.color.grey_8,
    fontFamily: "Lato_Regular",
  },
  overlay: {
    height: 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: screen.width / 4 - 5,
    backgroundColor: g.color.white,
    ...StyleSheet.absoluteFillObject,
    top: 35,
    left: 3,
  },
  value: {
    fontSize: 16,
    color: g.color.grey_8,
    fontFamily: "Lato_Regular",
  },
  budget: {
    fontSize: 17,
    marginTop: 4,
  },
});

export default MacroWheel;
