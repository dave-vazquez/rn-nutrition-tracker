import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Heading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default Heading;
