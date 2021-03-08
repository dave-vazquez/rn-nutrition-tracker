import { Colors, Layout, Typography } from "_global_styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slider } from "react-native-elements";

const NetChangeSlider = ({
  containerStyle,
  value,
  onValueChange,
  weightLbs,
  targetWeightLbs,
}) => {
  //
  const calcWeeks = (netWeeklyChangeLbs) => {
    return +Math.abs(
      (weightLbs - targetWeightLbs) / netWeeklyChangeLbs
    ).toFixed(1);
  };

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.sliderLabel}>Net Change / Week</Text>
      <Slider
        step={0.1}
        value={value}
        allowTouchTrack
        style={s.slider}
        disabled={false}
        maximumValue={2}
        minimumValue={0.5}
        animateTransitions
        trackStyle={s.track}
        thumbStyle={s.thumb}
        animationType="spring"
        onValueChange={onValueChange}
        maximumTrackTintColor={Colors.blue.s2}
        minimumTrackTintColor={Colors.green.light.s4}
      />
      <Text style={s.netChangeText}>{value.toFixed(1)} lbs / week</Text>
      <Text style={s.netChangeText}>{calcWeeks(value)} weeks</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 100,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: Layout.spacing.sm,
    paddingRight: Layout.spacing.xs,
    paddingLeft: Layout.spacing.xs,
  },
  thumb: {
    width: 20,
    margin: 0,
    padding: 0,
    height: 20,
    elevation: 5,
    backgroundColor: Colors.blue.s2,
  },
  sliderLabel: {
    color: Colors.grey.s8,
    fontSize: Typography.size.sm,
    paddingLeft: Layout.spacing.xs,
    paddingVertical: Layout.spacing.xs,
    fontFamily: Typography.font.lato.regular,
  },
  netChangeText: {
    textAlign: "right",
    fontFamily: Typography.font.lato.regular,
    fontSize: Typography.size.sm,
    color: Colors.grey.s8,
    marginVertical: Layout.spacing.xs,
  },
  slider: { marginHorizontal: 3 },
  track: { backgroundColor: Colors.grey.s8 },
});

export default NetChangeSlider;
