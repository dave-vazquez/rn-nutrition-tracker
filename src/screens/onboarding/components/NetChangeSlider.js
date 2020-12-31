import g from "_globalstyles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Slider, Text } from "react-native-elements";

const NetChangeSlider = ({
  weightLbs,
  weightGoal,
  targetWeightLbs,
  netWeeklyChangeLbs,
  setNetWeeklyChangeLbs,
}) => {
  if (targetWeightLbs === "") return null;

  const calcWeeks = () => {
    return +Math.abs(
      (+weightLbs - +targetWeightLbs) / +netWeeklyChangeLbs
    ).toFixed(2);
  };

  return (
    <View style={s.container}>
      <Slider
        step={0.1}
        style={s.slider}
        disabled={false}
        maximumValue={2}
        value={netWeeklyChangeLbs}
        minimumValue={0.5}
        trackStyle={s.track}
        thumbStyle={s.thumb}
        onValueChange={(value) =>
          setNetWeeklyChangeLbs(weightGoal === "lose" ? -value : +value)
        }
      />
      <Text style={s.netChangeText}>{netWeeklyChangeLbs} lbs / week</Text>
      <Text style={s.netChangeText}>{calcWeeks()} weeks</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  slider: {
    marginHorizontal: 5,
  },
  track: {
    backgroundColor: g.color.grey_8,
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: g.color.blue,
  },
  netChangeText: {
    textAlign: "right",
    fontFamily: "Lato_Regular",
    fontSize: 18,
    marginVertical: 5,
  },
});

export default NetChangeSlider;
