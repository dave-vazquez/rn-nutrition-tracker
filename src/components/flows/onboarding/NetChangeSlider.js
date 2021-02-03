import { Colors } from "_global_styles";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Slider, Text } from "react-native-elements";

const NetChangeSlider = ({ display }) => {
  const { control, getValues } = useFormContext();

  const { weightLbs, targetWeightLbs } = getValues();

  const calcWeeks = (netWeeklyChangeLbs) => {
    return +Math.abs(
      (+weightLbs - +targetWeightLbs) / +netWeeklyChangeLbs
    ).toFixed(1);
  };

  return (
    <Controller
      name="netWeeklyChangeLbs"
      defaultValue={0}
      control={control}
      render={({ onChange, value }) => (
        <View style={[s.container, !display ? s.hidden : null]}>
          <Slider
            step={0.1}
            style={s.slider}
            disabled={false}
            maximumValue={2}
            value={value}
            minimumValue={0.5}
            trackStyle={s.track}
            thumbStyle={s.thumb}
            onValueChange={onChange}
          />
          <Text style={s.netChangeText}>{value.toFixed(1)} lbs / week</Text>
          <Text style={s.netChangeText}>{calcWeeks(value)} weeks</Text>
        </View>
      )}
    />
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: Colors.blue.s2,
  },
  netChangeText: {
    textAlign: "right",
    fontFamily: "Lato_Regular",
    fontSize: 18,
    marginVertical: 5,
  },
  hidden: { display: "none" },
  slider: { marginHorizontal: 5 },
  track: { backgroundColor: Colors.blue.s2 },
});

export default NetChangeSlider;
