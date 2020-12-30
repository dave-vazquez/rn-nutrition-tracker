import React, { useContext, useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "../../components";
import { Context as AuthContext } from "../../contexts/AuthContext";
import g from "../../style";
import NextButton from "./components/NextButton";
import OnboardingView from "./components/OnboardingView";

const initialState = {
  inactive: false,
  lightlyActive: false,
  active: false,
  veryActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INACTIVE":
      return {
        ...initialState,
        inactive: true,
      };
    case "ACTIVE":
      return {
        ...initialState,
        active: true,
      };
    case "LIGHT_ACTIVE":
      return {
        ...initialState,
        lightlyActive: true,
      };
    case "VERY_ACTIVE":
      return {
        ...initialState,
        veryActive: true,
      };
    default:
      return state;
  }
};

const ActivityLevelScreen = () => {
  const {
    state: { activityLevel },
    updateActivityLevel,
  } = useContext(AuthContext);
  return (
    <OnboardingView
      headingText="How active are you?"
      containerStyles={s.container}
    >
      <View style={s.radioGroup}>
        <RadioButton
          selected={activityLevel === 1.375}
          setSelected={() => updateActivityLevel(1.375)}
          label="Not Very Active"
          subLabel="(little to no exercise)"
        />
        <RadioButton
          selected={activityLevel === 1.55}
          setSelected={() => updateActivityLevel(1.55)}
          label="Lightly Active"
          subLabel="(light exercise 1 - 3 days/week)"
        />
        <RadioButton
          selected={activityLevel === 1.725}
          setSelected={() => updateActivityLevel(1.725)}
          label="Active"
          subLabel="(moderate exercise 3 - 5 days / week)"
        />
        <RadioButton
          selected={activityLevel === 1.9}
          setSelected={() => updateActivityLevel(1.9)}
          label="Very Active"
          subLabel="(strenuous exercise daily)"
        />
      </View>
      <NextButton onPress={() => { }} />
    </OnboardingView>
  );
};

ActivityLevelScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 30,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  radioGroup: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 10,
  },
});

export default ActivityLevelScreen;
