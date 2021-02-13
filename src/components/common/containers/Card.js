import { Colors } from "_global_styles";
import React from "react";
import { View } from "react-native";
import CardStyles from "./styles";

const s = CardStyles;

const Card = ({ children, bgColor = Colors.white, style }) => {
  return (
    <View style={[s.card, { backgroundColor: bgColor }, style]}>
      {children}
    </View>
  );
};

export default Card;
