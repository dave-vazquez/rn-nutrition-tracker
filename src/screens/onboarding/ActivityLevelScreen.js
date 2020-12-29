import React from "react";
import { StyleSheet, Text } from "react-native";
import OnboardingView from "./components/OnboardingView";

const ActivityLevelScreen = () => {
  return (
    <OnboardingView
      headingText="How active are you?"
      containerStyles={s.container}
    >
      <Text style={s.textStyle}>ActivityLevelScreen</Text>
    </OnboardingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});

export default ActivityLevelScreen;
