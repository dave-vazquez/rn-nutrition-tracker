/* eslint-disable react/no-unescaped-entities */
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import {
  NetChangeSlider,
  NextButton,
  OnboardingView,
  TargetWeightInput,
  WeightGoalButtonGroup,
} from "./components";

const WeightGoalScreen = ({ navigation: { navigate } }) => {
  const {
    state: { targetWeightLbs },
  } = useContext(OnboardingContext);

  const [weightGoal, setWeightGoal] = useState("initial");

  return (
    <OnboardingView
      headingText="Let's set some goals!"
      containerStyles={s.container}
    >
      <WeightGoalButtonGroup
        weightGoal={weightGoal}
        setWeightGoal={setWeightGoal}
      />
      <TargetWeightInput weightGoal={weightGoal} />
      <NetChangeSlider />
      {(targetWeightLbs !== "" || weightGoal === "maintain") && (
        <NextButton onPress={() => navigate("ActivityLevel")} />
      )}
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

WeightGoalScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

export default WeightGoalScreen;
