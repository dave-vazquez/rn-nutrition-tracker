/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../../contexts/AuthContext";
import g from "../../style";
import NetChangeSlider from "./components/NetChangeSlider";
import NextButton from "./components/NextButton";
import OnboardingView from "./components/OnboardingView";
import TargetWeightInput from "./components/TargetWeightInput";
import WeightGoalButtonGroup from "./components/WeightGoalButtonGroup";

const WeightGoalScreen = () => {
  const {
    state: { weight },
  } = useContext(AuthContext);
  const [goal, setGoal] = useState("initial");
  const [netChange, setNetChange] = useState(0.5);
  const [targetWeight, setTargetWeight] = useState("");

  const handlePress = () => { };

  return (
    <OnboardingView
      headingText="Let's set some goals!"
      containerStyles={s.container}
    >
      <WeightGoalButtonGroup goal={goal} setGoal={setGoal} />
      <TargetWeightInput
        goal={goal}
        targetWeight={targetWeight}
        setTargetWeight={setTargetWeight}
      />
      <NetChangeSlider
        weight={weight ? weight : 180}
        targetWeight={targetWeight}
        netChange={netChange}
        setNetChange={setNetChange}
      />
      {(targetWeight !== "" || goal === "maintain") && (
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
