import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const TargetWeightInput = ({ weightGoal }) => {
  if (weightGoal === "initial" || weightGoal === "maintain") return null;

  const {
    state: { weightLbs },
    updateTargetWeight,
  } = useContext(OnboardingContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [targetWeightLbs, setTargetWeightLbs] = useState("");

  const validate = () => {
    if (weightGoal === "lose" && weightLbs <= +targetWeightLbs) {
      setErrorMessage("Target weight should be less than current weight");
      updateTargetWeight("");
    } else if (weightGoal === "gain" && weightLbs >= +targetWeightLbs) {
      setErrorMessage("Target weight should be more than current weight");
      updateTargetWeight("");
    } else if (+targetWeightLbs >= 661) {
      setErrorMessage("Target goal should be less than 661 lbs");
      updateTargetWeight(targetWeightLbs);
    } else if (+targetWeightLbs <= 66) {
      setErrorMessage("Target goal should be greater than 66 lbs");
      updateTargetWeight("");
    } else {
      updateTargetWeight(targetWeightLbs);
    }
  };

  const handleSetTargetWeight = (target) => {
    if (errorMessage) setErrorMessage("");

    setTargetWeightLbs(target);
  };

  return (
    <Input
      value={targetWeightLbs}
      onChangeText={handleSetTargetWeight}
      onBlur={validate}
      errorStyle={s.error}
      errorMessage={errorMessage}
      placeholder="lbs."
      label="Target Weight"
      keyboardType="numeric"
      leftIcon={{
        type: "feather",
        name: "target",
        color: g.color.grey_8,
      }}
    />
  );
};

const s = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default TargetWeightInput;
