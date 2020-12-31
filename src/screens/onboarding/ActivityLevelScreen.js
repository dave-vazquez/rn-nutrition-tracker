import { RadioButton } from "_common";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NextButton, OnboardingView } from "./components";

const INACTIVE = 1.375;
const LIGHT_ACTIVE = 1.55;
const ACTIVE = 1.725;
const VERY_ACTIVE = 1.9;

const ActivityLevelScreen = ({ navigation: { navigate } }) => {
  const {
    state: { activityLevel },
    updateActivityLevel,
  } = useContext(OnboardingContext);

  return (
    <OnboardingView
      headingText="How active are you?"
      containerStyles={s.container}
    >
      <View style={s.radioGroup}>
        <RadioButton
          selected={activityLevel === INACTIVE}
          setSelected={() => updateActivityLevel(INACTIVE)}
          label="Not Very Active"
          subLabel="(little to no exercise)"
        />
        <RadioButton
          selected={activityLevel === LIGHT_ACTIVE}
          setSelected={() => updateActivityLevel(LIGHT_ACTIVE)}
          label="Lightly Active"
          subLabel="(light exercise 1 - 3 days/week)"
        />
        <RadioButton
          selected={activityLevel === ACTIVE}
          setSelected={() => updateActivityLevel(ACTIVE)}
          label="Active"
          subLabel="(moderate exercise 3 - 5 days / week)"
        />
        <RadioButton
          selected={activityLevel === VERY_ACTIVE}
          setSelected={() => updateActivityLevel(VERY_ACTIVE)}
          label="Very Active"
          subLabel="(strenuous exercise daily)"
        />
      </View>
      <NextButton
        handlePress={() => navigate("AuthScreen", { authType: "signup" })}
      />
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
