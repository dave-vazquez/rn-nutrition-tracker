import { Colors } from "_global_styles";
import React from "react";
import { View } from "react-native";
import { cardStyles as s } from "./styles";

const Card = ({ children, bgColor = Colors.white, style }) => {
  return (
    <View style={[s.card, { backgroundColor: bgColor }, style]}>
      {children}
    </View>
  );
};

export default Card;
