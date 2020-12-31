/* eslint-disable react/no-unescaped-entities */
import { Context as OnboardingContext } from "_contexts/OnboardingContext.js";
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

const WeightGoalScreen = () => {
  const {
    state: { weightLbs },
    updateGoals,
  } = useContext(OnboardingContext);
  const [weightGoal, setWeightGoal] = useState("initial");
  const [netWeeklyChangeLbs, setNetWeeklyChangeLbs] = useState(0.5);
  const [targetWeightLbs, setTargetWeightLbs] = useState("");

  const handlePress = () => {
    updateGoals({
      targetWeightLbs,
      netWeeklyChangeLbs,
    });
  };

  return (
    <OnboardingView
      headingText="Let's set some goals!"
      containerStyles={s.container}
    >
      <WeightGoalButtonGroup
        weightGoal={weightGoal}
        setWeightGoal={setWeightGoal}
      />
      <TargetWeightInput
        weightGoal={weightGoal}
        targetWeightLbs={targetWeightLbs}
        setTargetWeightLbs={setTargetWeightLbs}
      />
      <NetChangeSlider
        weightGoal={weightGoal}
        weightLbs={weightLbs ? weightLbs : 180}
        targetWeightLbs={targetWeightLbs}
        netWeeklyChangeLbs={netWeeklyChangeLbs}
        setNetWeeklyChangeLbs={setNetWeeklyChangeLbs}
      />
      {(targetWeightLbs !== "" || weightGoal === "maintain") && (
        <NextButton handlePress={handlePress} />
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
