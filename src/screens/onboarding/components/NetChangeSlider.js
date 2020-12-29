import React from "react";
import { StyleSheet, View } from "react-native";
import { Slider, Text } from "react-native-elements";
import g from "../../../style";

const NetChangeSlider = ({ weight, targetWeight, netChange, setNetChange }) => {
  if (targetWeight === "") return null;

  const calcWeeks = () => {
    return +Math.abs((+weight - +targetWeight) / +netChange).toFixed(1);
  };

  return (
    <View style={s.container}>
      <Slider
        step={0.1}
        style={s.slider}
        disabled={false}
        maximumValue={2}
        value={netChange}
        minimumValue={0.5}
        trackStyle={s.track}
        thumbStyle={s.thumb}
        onValueChange={setNetChange}
      />
      <Text style={s.netChangeText}>{netChange} lbs / week</Text>
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
