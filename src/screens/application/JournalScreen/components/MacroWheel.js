import g from "_globalstyles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { VictoryContainer, VictoryPie } from "victory-native";

const MacroWheel = ({ colors, data, width, title }) => {
  if (!width) return null;

  const stroke = {
    data: {
      fillOpacity: 1,
      stroke: colors[2],
      strokeWidth: 1,
    },
  };

  return (
    <View>
      <Title title={title} bgColor={colors[0]} />
      <MacroValueOverlay consumed={data[0]} budget={data[1]} />
      <VictoryPie
        data={data}
        padding={0}
        height={106}
        style={stroke}
        innerRadius={40}
        width={width - 10}
        labels={() => null}
        colorScale={colors}
        animate={{ duration: 1000 }}
        containerComponent={
          <VictoryContainer
            padding={0}
            width={width - 11}
            style={s.container}
          />
        }
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

const MacroValueOverlay = ({ consumed, budget }) => {
  return (
    <View style={s.overlay}>
      <Text style={s.value}>{consumed} g</Text>
      <Text style={[s.value, s.budget]}>{budget} g</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 100,
    backgroundColor: g.color.white,
  },
  title: {
    height: 25,
    elevation: 3,
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
    fontFamily: "Lato_Regular",
    color: g.color.grey_8,
    textAlign: "center",
  },
  overlay: {
    zIndex: 1,
    elevation: 3,
    shadowOpacity: 0,
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
    top: 33,
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
