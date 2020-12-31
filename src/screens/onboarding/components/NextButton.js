import g from "/global-styles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const NextButton = ({ title = "Next", handlePress, gutterTop = 50 }) => {
  return (
    <>
      <View style={{ flex: 1, minHeight: gutterTop }} />
      <View style={s.bottom}>
        <Button
          raised
          onPress={handlePress}
          buttonStyle={s.button}
          titleStyle={s.buttonTitle}
          icon={{
            name: "arrow-right",
            size: 30,
            color: "white",
          }}
          iconRight
          title={title}
        />
      </View>
    </>
  );
};

const s = StyleSheet.create({
  bottom: {
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  button: {
    backgroundColor: g.color.light_green_4,
  },
  buttonTitle: {
    fontFamily: "Lato_Regular",
    fontSize: 22,
    marginRight: 10,
  },
});

export default NextButton;
