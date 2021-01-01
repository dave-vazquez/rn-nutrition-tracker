import { Context as OnboardingContext } from "_contexts/OnboardingContext.js";
import g from "_globalstyles";
import { isAfter, isBefore } from "date-fns";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import VMasker from "vanilla-masker";
import isValidDate from "../../util/isValidDate";
import { NextButton, OnboardingView } from "./components";

const DATE_MAX = new Date().setFullYear(new Date().getFullYear() - 13);
const DATE_MIN = new Date().setFullYear(new Date().getFullYear() - 100);

const MeasurementsScreen = ({ navigation: { navigate } }) => {
  const { updateMeasurements } = useContext(OnboardingContext);

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
          control={control}
          defaultValue=""
          rules={rules.heightFt}
          render={({ onChange, onBlur, value }) => (
            <Input
              label="Height"
              value={value}
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
          control={control}
          defaultValue=""
          rules={rules.heightIn}
          render={({ onChange, onBlur, value }) => (
            <Input
              value={value}
              placeholder="in."
              errorStyle={s.error}
              onBlur={onBlur}
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
          rules={rules.weightLbs}
          render={({ onChange, onBlur, value }) => (
            <Input
              label="Weight"
              value={value}
              placeholder="lbs."
              onBlur={onBlur}
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
          rules={rules.dateOfBirth}
          render={({ onChange, onBlur, value }) => (
            <Input
              label="Date of Birth"
              value={value}
              errorStyle={s.error}
              onBlur={onBlur}
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

const rules = {
  heightFt: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 2,
      message: "Are you sure? The world record is 1'11\"",
    },
    max: {
      value: 9,
      message: "Are you sure? The world record is 8'11\"",
    },
  },
  heightIn: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 0,
      message: "Inches should be at least 0",
    },
    max: {
      value: 11,
      message: "Inches should be less than 12",
    },
  },
  weightLbs: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 66,
      message: "Weight should be at least 66 lbs",
    },
    max: {
      value: 1399,
      message: "This weight is not supported",
    },
  },
  dateOfBirth: {
    required: {
      value: true,
      message: "Required field",
    },
    validate: {
      isValid: (dateOfBirth) =>
        isValidDate(dateOfBirth) ? true : "Invalid Date",
      min: (dateOfBirth) =>
        isAfter(new Date(dateOfBirth), DATE_MIN)
          ? true
          : "This age is not supported",
      max: (dateOfBirth) =>
        isBefore(new Date(dateOfBirth), DATE_MAX)
          ? true
          : "Must be at least 13 years old",
    },
  },
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
