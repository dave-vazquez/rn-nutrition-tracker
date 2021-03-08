import { TextInput } from "_components/common";
import { Colors, Layout } from "_global_styles";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import NetChangeSlider from "./NetChangeSlider";

const TargetWeightSection = ({
  rules,
  setRef,
  weightGoal,
  form: { trigger, getValues, control, errors },
}) => {
  const [targetWeightLbs, setTargetWeightLbs] = useState(null);

  const triggerValidation = async (targetWeightLbs) => {
    const isValid = await trigger("targetWeightLbs");
    setTargetWeightLbs(isValid ? targetWeightLbs : null);
  };

  const validateTarget = (targetWeightLbs) => {
    return weightGoal === "lose"
      ? +targetWeightLbs < +getValues("weightLbs") ||
      "Target weight should be less than current weight"
      : +targetWeightLbs > +getValues("weightLbs") ||
      "Target weight should be more than current weight";
  };

  return (
    <View>
      <Controller
        defaultValue=""
        control={control}
        name="targetWeightLbs"
        rules={{
          ...rules.targetWeightLbs,
          validate: validateTarget,
        }}
        render={({ onChange, value }) => (
          <TextInput
            value={value}
            size="large"
            placeholder="lbs."
            label="Target Weight"
            keyboardType="numeric"
            onChangeText={onChange}
            onBlur={() => triggerValidation(value)}
            errorMessage={errors.targetWeightLbs?.message}
            ref={(input) => setRef("targetWeightLbs", input)}
            leftIcon={{
              type: "feather",
              name: "target",
              color: Colors.grey.s8,
            }}
          />
        )}
      />
      <Controller
        defaultValue={0.5}
        control={control}
        name="netWeeklyChangeLbs"
        render={({ onChange, value }) => (
          <NetChangeSlider
            value={value}
            onValueChange={onChange}
            weightLbs={+getValues("weightLbs")}
            targetWeightLbs={+targetWeightLbs}
            containerStyle={!targetWeightLbs && Layout.hidden}
          />
        )}
      />
    </View>
  );
};

export default TargetWeightSection;
