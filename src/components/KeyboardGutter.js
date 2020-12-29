import React from "react";
import { View } from "react-native";

const KeyboardGutter = ({ minHeight = 50, show = false }) => (
  <View
    style={{
      flex: 1,
      minHeight,
      borderWidth: show ? 1 : 0,
      borderColor: "red",
    }}
  />
);

export default KeyboardGutter;
