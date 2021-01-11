import g from "_globalstyles";
import { maskInputDate } from "_utils";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";

const BasicInfoForm = ({
  rules,
  setRef,
  weightGoal,
  focusNextInput,
  form: { errors, control },
}) => {
  return (
    <View>
      <Controller
        name="dateOfBirth"
        defaultValue=""
        control={control}
        rules={rules.dateOfBirth}
        render={({ onChange, onBlur, value }) => (
          <Input
            value={value}
            onBlur={onBlur}
            errorStyle={s.error}
            blurOnSubmit={false}
            label="Date of Birth"
            nativeID="dateOfBirth"
            keyboardType="numeric"
            placeholder="mm/dd/yyyy"
            labelStyle={{ color: g.color.grey_8 }}
            errorMessage={errors.dateOfBirth?.message}
            ref={(input) => setRef("dateOfBirth", input)}
            leftIconContainerStyle={s.inputIconContainer}
            onSubmitEditing={() => focusNextInput("heightFt")}
            onChangeText={(text) => onChange(maskInputDate(text))}
            leftIcon={{
              type: "font-awesome-5",
              name: "calendar",
              color: g.color.grey_8,
            }}
          />
        )}
      />
      <View style={s.heightContainer}>
        <Controller
          name="heightFt"
          defaultValue=""
          control={control}
          rules={rules.heightFt}
          render={({ onChange, onBlur, value }) => (
            <Input
              label="Height"
              value={value}
              onBlur={onBlur}
              placeholder="ft."
              errorStyle={s.error}
              blurOnSubmit={false}
              keyboardType="numeric"
              onChangeText={onChange}
              containerStyle={{ flex: 1 }}
              labelStyle={{ color: g.color.grey_8 }}
              errorMessage={errors.heightFt?.message}
              leftIconContainerStyle={s.inputIconContainer}
              ref={(input) => setRef("heightFt", input)}
              onSubmitEditing={() => focusNextInput("heightIn")}
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
              value={value}
              onBlur={onBlur}
              placeholder="in."
              blurOnSubmit={false}
              errorStyle={s.error}
              keyboardType="numeric"
              onChangeText={onChange}
              containerStyle={{ flex: 1 }}
              labelStyle={{ color: g.color.grey_8 }}
              errorMessage={errors.heightIn?.message}
              ref={(input) => setRef("heightIn", input)}
              onSubmitEditing={() => focusNextInput("weightLbs")}
            />
          )}
        />
      </View>
      <Controller
        defaultValue=""
        name="weightLbs"
        control={control}
        rules={rules.weightLbs}
        render={({ onChange, onBlur, value }) => (
          <Input
            value={value}
            label="Weight"
            onBlur={onBlur}
            placeholder="lbs."
            errorStyle={s.error}
            keyboardType="numeric"
            onChangeText={onChange}
            labelStyle={{ color: g.color.grey_8 }}
            blurOnSubmit={weightGoal === "maintain"}
            errorMessage={errors.weightLbs?.message}
            ref={(input) => setRef("weightLbs", input)}
            leftIconContainerStyle={s.inputIconContainer}
            onSubmitEditing={() =>
              weightGoal !== "maintain" && focusNextInput("targetWeightLbs")
            }
            leftIcon={{
              type: "font-awesome-5",
              name: "weight",
              color: g.color.grey_8,
            }}
          />
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({
  heightContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  inputIconContainer: {
    width: 30,
    alignItems: "flex-start",
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default BasicInfoForm;
