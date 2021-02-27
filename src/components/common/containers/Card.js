import { Colors } from "_global_styles";
import React from "react";
import { View } from "react-native";
import CardStyles from "./styles";

const Card = ({ children, bgColor = Colors.white, containerStyle }) => {
  return (
    <View
      style={[CardStyles.card, { backgroundColor: bgColor }, containerStyle]}
    >
      {children}
    </View>
  );
};

Card.Divider = () => <View style={CardStyles.divider} />;

export default Card;
