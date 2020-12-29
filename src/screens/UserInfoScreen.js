import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserInfoScreen = () => {
  return (
    <View>
      <Text style={s.textStyle}>About You</Text>
    </View>
  );
};

const s = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default UserInfoScreen;
