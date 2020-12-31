import g from "/global-styles";
import React from "react";
import { Input } from "react-native-elements";

const TargetWeightInput = ({
  weightGoal,
  targetWeightLbs,
  setTargetWeightLbs,
}) => {
  if (weightGoal === "initial" || weightGoal === "maintain") return null;

  return (
    <Input
      value={targetWeightLbs}
      onChangeText={setTargetWeightLbs}
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

export default TargetWeightInput;
