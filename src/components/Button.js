import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { default as s } from "../style";

const Button = ({
  text,
  buttonStyles = styles.button,
  textStyles = styles.buttonText,
  onPress,
}) => {
  console.log("buttonStyles", buttonStyles);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ ...styles.button, ...buttonStyles }}
    >
      <Text style={{ ...styles.buttonText, ...textStyles }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    elevation: 2,
    marginTop: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: s.color.light_green_4,
  },
  buttonText: {
    fontSize: 24,
    color: s.color.white,
    letterSpacing: 2,
    fontFamily: "Lato_Regular",
  },
});

export default Button;
