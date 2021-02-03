import createStyles from "_global_styles/base.js";
import React from "react";
import { Text } from "react-native";

const s = createStyles();

const Heading = ({ title }) => {
  return <Text style={s.heading}>{title}</Text>;
};

export default Heading;
