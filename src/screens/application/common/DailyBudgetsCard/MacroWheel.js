import { Colors, Layout, Typography } from "_global_styles";
import { useFormatMacroData } from "_hooks";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-svg-charts";

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
        padAngle={0}
        style={s.chart}
        innerRadius={35}
        valueAccessor={({ item }) => item.amount}
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
        {(+consumed).toFixed(0)} g
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
    width: Layout.screen.width / 4,
  },
  title: {
    height: 25,
    elevation: 1,
    width: "100%",
    shadowRadius: 1,
    borderRadius: 5,
    marginBottom: Layout.spacing.sm,
    shadowOpacity: 2,
    justifyContent: "center",
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
  },
  titleText: {
    fontSize: Typography.size.xs,
    textAlign: "center",
    fontFamily: Typography.font.lato.regular,
  },
  overlay: {
    height: 100,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: Layout.screen.width / 4 - 5,
    backgroundColor: Colors.white,
    ...StyleSheet.absoluteFillObject,
    top: 35,
    left: 3,
  },
  value: {
    fontSize: Typography.size.xs,
    color: Colors.grey.s8,
    fontFamily: Typography.font.lato.regular,
  },
  budget: {
    fontSize: 17,
    marginTop: 4,
  },
});

MacroWheel.whyDidYouRender = true;

export default memo(MacroWheel);
