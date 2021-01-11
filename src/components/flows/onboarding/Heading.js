import g from "_globalstyles";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const Heading = ({ title }) => {
  return (
    <Text h2 h2Style={s.heading}>
      {title}
    </Text>
  );
};

const s = StyleSheet.create({
  heading: {
    marginBottom: 20,
    color: g.color.grey_8,
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: "NunitoSans_Regular",
  },
});

export default Heading;
