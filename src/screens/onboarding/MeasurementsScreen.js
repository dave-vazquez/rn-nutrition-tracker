import { Context as OnboardingContext } from "_contexts/OnboardingContext.js";
import g from "_globalstyles";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import VMasker from "vanilla-masker";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextButton, OnboardingView } from "./components";
import { measurementsSchema } from "./validationSchemas";

const MeasurementsScreen = ({ navigation: { navigate } }) => {
  const { updateMeasurements } = useContext(OnboardingContext);

  const { handleSubmit, control, errors } = useForm({
    mode: "onBlur",
    shouldFocusError: true,
    resolver: yupResolver(measurementsSchema),
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
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <Input
              label="Height"
              value={String(value)}
              placeholder="ft."
              errorStyle={s.error}
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
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <Input
              value={String(value)}
              placeholder="in."
              errorStyle={s.error}
              errorMessage={errors.heightIn?.message}
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
          name="weightLbs"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <Input
              label="Weight"
              value={String(value)}
              placeholder="lbs."
              errorStyle={s.error}
              errorMessage={errors.weightLbs?.message}
              keyboardType="numeric"
              onChangeText={onChange}
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
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <Input
              label="Date of Birth"
              value={value}
              errorStyle={s.error}
              errorMessage={errors.dateOfBirth?.message}
              placeholder="mm/dd/yyyy"
              keyboardType="numeric"
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
