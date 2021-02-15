import React from "react";
import { StyleSheet, View } from "react-native";

const HeaderBottom = ({ color }) => {
  return <View style={[s.background, { backgroundColor: color }]} />;
};

const s = StyleSheet.create({
  background: {
    height: 120,
    ...StyleSheet.absoluteFill,
  },
});

export default HeaderBottom;
