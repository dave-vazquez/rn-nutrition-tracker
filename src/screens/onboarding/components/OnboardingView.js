import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-elements";

const OnboardingView = ({ children, headingText, containerStyles }) => {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
      <KeyboardAvoidingView
        behavior="position"
        style={[s.container, containerStyles]}
      >
        <Text h2 style={s.h1}>
          {headingText}
        </Text>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  h1: {
    fontFamily: "NunitoSans_Bold",
    textAlign: "center",
  },
});

export default OnboardingView;
