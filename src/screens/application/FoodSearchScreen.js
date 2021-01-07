import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FoodSearchScreen = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Food Search</Text>
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

export default FoodSearchScreen;
