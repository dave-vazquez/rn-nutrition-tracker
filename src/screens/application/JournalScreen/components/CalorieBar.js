import g from "_globalstyles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  VictoryBar,
  VictoryStack,
  VictoryVoronoiContainer,
} from "victory-native";

const CalorieBar = ({ width, budget, consumed }) => {
  if (!width) return null;

  /*
    Nutrition Budgets on fetch Start
    is 0, so invalid prop at that time
  */

  const data = [{ x: 0.5, y: consumed }];
  const domain = { x: [0, 1], y: [0, budget] };

  const animate = {
    duration: 500,
    // onLoad: { duration: 1000 },
  };

  return (
    <View>
      <CalValueOverlay consumed={consumed} budget={budget} />
      <VictoryStack
        height={50}
        padding={0}
        width={width}
        domain={domain}
        animate={animate}
        colorScale={[g.color.light_green_4, g.color.grey_2]}
        containerComponent={
          <VictoryVoronoiContainer
            width={width}
            labels={() => null}
            style={s.barContainer}
          />
        }
      >
        <VictoryBar
          horizontal
          data={data}
          barWidth={50}
          cornerRadius={{ bottomLeft: 5, bottomRight: 5 }}
        />
      </VictoryStack>
    </View>
  );
};

const CalValueOverlay = ({ consumed, budget }) => {
  const fontColor = {
    consumed: {
      color: consumed / budget <= 0.22 ? g.color.grey_8 : g.color.white,
    },
    budget: {
      color: consumed / budget >= 0.96 ? g.color.white : g.color.grey_8,
    },
  };

  return (
    <View style={s.overlay}>
      <Text style={[s.value, fontColor.consumed]}>{consumed} cal</Text>
      <Text style={[s.value, fontColor.budget]}>{budget} cal</Text>
    </View>
  );
};

const s = StyleSheet.create({
  barContainer: {
    elevation: 3,
    shadowRadius: 1,
    borderRadius: 5,
    shadowOpacity: 2,
    shadowColor: "#00000030",
    backgroundColor: g.color.white,
    shadowOffset: { width: 0, height: 2 },
  },
  overlay: {
    zIndex: 1,
    elevation: 3,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    ...StyleSheet.absoluteFillObject,
  },
  value: {
    fontSize: 20,
    fontFamily: "Lato_Regular",
  },
});

export default CalorieBar;
