import { colors } from "_globalstyles";
import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children, bgColor = colors.white, style }) => {
  return (
    <View style={[s.card, { backgroundColor: bgColor }, style]}>
      {children}
    </View>
  );
};

const s = StyleSheet.create({
  card: {
    padding: 15,
    elevation: 4,
    borderRadius: 5,
    marginBottom: 15,
    shadowOpacity: 2,
    shadowColor: "#00000030",
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Card;
