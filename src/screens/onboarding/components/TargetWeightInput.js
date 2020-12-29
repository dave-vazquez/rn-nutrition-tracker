import React from "react";
import { Input } from "react-native-elements";
import g from "../../../style";

const TargetWeightInput = ({ goal, targetWeight, setTargetWeight }) => {
  if (goal === "initial" || goal === "maintain") return null;

  return (
    <Input
      value={targetWeight}
      onChangeText={setTargetWeight}
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
