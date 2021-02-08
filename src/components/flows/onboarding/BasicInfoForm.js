import { TextInput } from "_components/common";
import { Colors } from "_global_styles";
import { maskInputDate } from "_utils";
import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

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
          <TextInput
            value={value}
            onBlur={onBlur}
            variant="large"
            blurOnSubmit={false}
            label="Date of Birth"
            keyboardType="numeric"
            placeholder="mm/dd/yyyy"
            errorMessage={errors.dateOfBirth?.message}
            ref={(input) => setRef("dateOfBirth", input)}
            onSubmitEditing={() => focusNextInput("heightFt")}
            onChangeText={(text) => onChange(maskInputDate(text))}
            leftIcon={{
              type: "font-awesome-5",
              name: "calendar",
              color: Colors.grey.s8,
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
            <TextInput
              label="Height"
              value={value}
              onBlur={onBlur}
              variant="large"
              placeholder="ft."
              blurOnSubmit={false}
              keyboardType="numeric"
              onChangeText={onChange}
              errorMessage={errors.heightFt?.message}
              ref={(input) => setRef("heightFt", input)}
              onSubmitEditing={() => focusNextInput("heightIn")}
              leftIcon={{
                type: "font-awesome-5",
                name: "ruler-vertical",
                color: Colors.grey.s8,
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
            <TextInput
              value={value}
              onBlur={onBlur}
              variant="large"
              placeholder="in."
              blurOnSubmit={false}
              keyboardType="numeric"
              onChangeText={onChange}
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
          <TextInput
            value={value}
            label="Weight"
            onBlur={onBlur}
            variant="large"
            placeholder="lbs."
            keyboardType="numeric"
            onChangeText={onChange}
            blurOnSubmit={weightGoal === "maintain"}
            errorMessage={errors.weightLbs?.message}
            ref={(input) => setRef("weightLbs", input)}
            onSubmitEditing={() =>
              weightGoal !== "maintain" && focusNextInput("targetWeightLbs")
            }
            leftIcon={{
              type: "font-awesome-5",
              name: "weight",
              color: Colors.grey.s8,
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
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default BasicInfoForm;
