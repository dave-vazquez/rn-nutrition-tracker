import { Context as OnboardingContext } from "_contexts/OnboardingContext.js";
import g from "_globalstyles";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import VMasker from "vanilla-masker";
import { NextButton, OnboardingView } from "./components";
import useFocusNextInput from "./hooks/useFocusNextInput";
import { measurementRules as rules } from "./validationRules";

const MeasurementsScreen = ({ navigation: { navigate } }) => {
  const { updateMeasurements } = useContext(OnboardingContext);

  const [setRef, focusNextInput] = useFocusNextInput();
  const { handleSubmit, control, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (measurements) => {
    updateMeasurements(measurements, () => navigate("WeightGoal"));
  };

  const maskAndSetDateOfBirth = (inputDate) => {
    return VMasker.toPattern(inputDate, "99/99/9999");
  };

  return (
    <OnboardingView
      containerStyles={s.container}
      headingText="Tell us a little bit about you!"
    >
      <View>
        <Controller
          name="heightFt"
          defaultValue=""
          control={control}
          rules={rules.heightFt}
          render={({ onChange, onBlur, value }) => (
            <Input
              label="Height"
              value={value}
              onSubmitEditing={() => focusNextInput("heightIn")}
              blurOnSubmit={false}
              placeholder="ft."
              errorStyle={s.error}
              onBlur={onBlur}
              errorMessage={errors.heightFt?.message}
              keyboardType="numeric"
              onChangeText={onChange}
              leftIcon={{
                type: "font-awesome-5",
                name: "ruler-vertical",
                color: g.color.grey_8,
              }}
            />
          )}
        />
        <Controller
          name="heightIn"
          defaultValue=""
          control={control}
          rules={rules.heightIn}
          render={({ onChange, onBlur, value }) => (
            <Input
              ref={setRef}
              value={value}
              onBlur={onBlur}
              placeholder="in."
              nativeID="heightIn"
              blurOnSubmit={false}
              errorStyle={s.error}
              keyboardType="numeric"
              onChangeText={onChange}
              errorMessage={errors.heightIn?.message}
              onSubmitEditing={() => focusNextInput("weightLbs")}
              leftIcon={{
                type: "font-awesome-5",
                name: "ruler-vertical",
                color: g.color.grey_8,
              }}
            />
          )}
        />
        <Controller
          name="weightLbs"
          defaultValue=""
          control={control}
          rules={rules.weightLbs}
          render={({ onChange, onBlur, value }) => (
            <Input
              ref={setRef}
              value={value}
              label="Weight"
              onBlur={onBlur}
              placeholder="lbs."
              nativeID="weightLbs"
              blurOnSubmit={false}
              errorStyle={s.error}
              keyboardType="numeric"
              onChangeText={onChange}
              errorMessage={errors.weightLbs?.message}
              onSubmitEditing={() => focusNextInput("dateOfBirth")}
              leftIcon={{
                type: "font-awesome-5",
                name: "weight",
                color: g.color.grey_8,
              }}
            />
          )}
        />
        <Controller
          name="dateOfBirth"
          defaultValue=""
          control={control}
          rules={rules.dateOfBirth}
          render={({ onChange, onBlur, value }) => (
            <Input
              ref={setRef}
              value={value}
              onBlur={onBlur}
              errorStyle={s.error}
              label="Date of Birth"
              nativeID="dateOfBirth"
              keyboardType="numeric"
              placeholder="mm/dd/yyyy"
              errorMessage={errors.dateOfBirth?.message}
              onChangeText={(text) => onChange(maskAndSetDateOfBirth(text))}
              leftIcon={{
                type: "font-awesome-5",
                name: "calendar",
                color: g.color.grey_8,
              }}
            />
          )}
        />
      </View>
      <NextButton gutterTop={20} onPress={handleSubmit(onSubmit)} />
    </OnboardingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

MeasurementsScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

export default MeasurementsScreen;
