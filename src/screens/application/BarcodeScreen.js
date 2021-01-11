import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BarcodeScreen = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Barcode</Text>
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

export default BarcodeScreen;
