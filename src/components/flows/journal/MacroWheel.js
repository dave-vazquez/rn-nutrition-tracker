import g from "_globalstyles";
import { useFormatMacroData } from "_hooks";
import { toPrecision } from "_utils";
import React, { memo } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-svg-charts";
const screen = Dimensions.get("screen");

const MacroWheel = ({ budget, consumed, added, title }) => {
  const { data, consumedColor, titleColor, titleBgColor } = useFormatMacroData(
    title,
    added,
    budget,
    consumed
  );

  return (
    <View style={s.container}>
      <Title
        title={title}
        titleColor={titleColor}
        titleBgColor={titleBgColor}
      />
      <ValueOverlay
        budget={budget}
        consumed={consumed + added}
        consumedColor={consumedColor}
      />
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

const Title = ({ title, titleColor, titleBgColor }) => {
  return (
    <View style={[s.title, { backgroundColor: titleBgColor }]}>
      <Text style={[s.titleText, { color: titleColor }]}>{title}</Text>
    </View>
  );
};

const ValueOverlay = ({ budget, consumed, consumedColor }) => {
  return (
    <View style={s.overlay}>
      <Text style={[s.value, { color: consumedColor }]}>
        {toPrecision(consumed, 0)} g
      </Text>
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

MacroWheel.whyDidYouRender = true;

export default memo(MacroWheel);
