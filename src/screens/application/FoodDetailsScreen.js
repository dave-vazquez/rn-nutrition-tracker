import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FoodDetailsScreen = ({ navigation }) => {
  const foodData = navigation.getParam("foodData");

  return (
    <View style={s.container}>
      <Text style={s.title}>Food Details Screen</Text>
      <Text style={s.title}>{foodData.label}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
});

export default FoodDetailsScreen;
