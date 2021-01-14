import g from "_globalstyles";
import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children, bgColor = g.color.white }) => {
  return <View style={[s.card, { backgroundColor: bgColor }]}>{children}</View>;
};

const s = StyleSheet.create({
  card: {
    padding: 15,
    elevation: 4,
    borderRadius: 5,
    marginBottom: 15,
    shadowOpacity: 2,
    marginHorizontal: 10,
    shadowColor: "#00000030",
    backgroundColor: g.color.white,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Card;
