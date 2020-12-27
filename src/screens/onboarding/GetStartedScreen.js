import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GetStartedScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>GetStartedScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default GetStartedScreen;
