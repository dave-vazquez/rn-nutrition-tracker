import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";
import HeadingStyles from "./styles";

const s = HeadingStyles;

const Heading = ({ title, size }) => {
  return <Text style={s[size]}>{title}</Text>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["h1", "h2", "h3"]).isRequired,
};

export default Heading;
