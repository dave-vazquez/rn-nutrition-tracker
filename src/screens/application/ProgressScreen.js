import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressScreen = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Progress</Text>
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

export default ProgressScreen;
