import React from "react";
import { View } from "react-native";

const Gutter = ({ width = 0, height = 0 }) => (
  <View style={{ width, height, backgroundColor: "yellow" }} />
);

export default Gutter;
