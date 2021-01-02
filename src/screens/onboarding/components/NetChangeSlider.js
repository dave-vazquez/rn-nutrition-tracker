import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Slider, Text } from "react-native-elements";

const NetChangeSlider = () => {
  const {
    state: { weightLbs, targetWeightLbs, weightGoal },
    updateNetWeeklyChange,
  } = useContext(OnboardingContext);

  const [value, setValue] = useState(0.5);

  if (!targetWeightLbs || !weightGoal || weightGoal === "maintain") return null;

  const calcWeeks = () => {
    return +Math.abs((+weightLbs - +targetWeightLbs) / +value).toFixed(1);
  };

  return (
    <View style={s.container}>
      <Slider
        step={0.1}
        style={s.slider}
        disabled={false}
        maximumValue={2}
        value={value}
        minimumValue={0.5}
        trackStyle={s.track}
        thumbStyle={s.thumb}
        onValueChange={setValue}
        onSlidingComplete={(value) => updateNetWeeklyChange(+value)}
      />
      <Text style={s.netChangeText}>{value.toFixed(1)} lbs / week</Text>
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
