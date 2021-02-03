import { Colors } from "_global_styles";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Input, Slider, Text } from "react-native-elements";

const TargetWeightForm = ({
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

  const calcWeeks = (netWeeklyChangeLbs) => {
    return +Math.abs(
      (+getValues("weightLbs") - +targetWeightLbs) / +netWeeklyChangeLbs
    ).toFixed(1);
  };

  return (
    <View>
      <Controller
        defaultValue=""
        control={control}
        name="targetWeightLbs"
        rules={{
          ...rules.targetWeightLbs,
          validate: (targetWeightLbs) => {
            if (weightGoal === "lose")
              return (
                +targetWeightLbs < +getValues("weightLbs") ||
                "Target weight should be less than current weight"
              );

            return (
              +targetWeightLbs > +getValues("weightLbs") ||
              "Target weight should be more than current weight"
            );
          },
        }}
        render={({ onChange, value }) => (
          <Input
            value={value}
            placeholder="lbs."
            errorStyle={s.error}
            label="Target Weight"
            keyboardType="numeric"
            onChangeText={onChange}
            onBlur={() => triggerValidation(value)}
            labelStyle={{ color: Colors.grey.s8 }}
            leftIconContainerStyle={s.inputIconContainer}
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
          <View style={[s.container, !targetWeightLbs ? s.hidden : null]}>
            <Text style={s.sliderLabel}>Net Change / Week</Text>
            <Slider
              allowTouchTrack
              animateTransitions
              minimumTrackTintColor={Colors.green.light.s4}
              animationType="spring"
              step={0.1}
              value={value}
              style={s.slider}
              disabled={false}
              maximumValue={2}
              minimumValue={0.5}
              trackStyle={s.track}
              thumbStyle={s.thumb}
              onValueChange={onChange}
            />
            <Text style={s.netChangeText}>{value.toFixed(1)} lbs / week</Text>
            <Text style={s.netChangeText}>{calcWeeks(value)} weeks</Text>
          </View>
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({
  inputIconContainer: {
    width: 30,
    alignItems: "flex-start",
  },
  error: {
    fontSize: 16,
    color: "red",
  },
  container: {
    alignItems: "stretch",
    justifyContent: "center",
    marginBottom: 100,
    paddingRight: 4,
    paddingLeft: 5,
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: Colors.blue.s2,
    elevation: 5,
  },
  sliderLabel: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 6,
    color: Colors.grey.s8,
    paddingBottom: 5,
  },
  netChangeText: {
    textAlign: "right",
    fontFamily: "Lato_Regular",
    fontSize: 18,
    marginVertical: 5,
  },
  hidden: { display: "none" },
  slider: { marginHorizontal: 5 },
  track: { backgroundColor: Colors.grey.s8 },
});

export default TargetWeightForm;
