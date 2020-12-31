import g from "/global-styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  text,
  buttonStyles = s.button,
  textStyles = s.buttonText,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ ...s.button, ...buttonStyles }}
    >
      <Text style={{ ...s.buttonText, ...textStyles }}>{text}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    elevation: 4,
    marginTop: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: g.color.light_green_4,
  },
  buttonText: {
    fontSize: 24,
    color: g.color.white,
    letterSpacing: 2,
    fontFamily: "Lato_Regular",
  },
});

export default Button;
