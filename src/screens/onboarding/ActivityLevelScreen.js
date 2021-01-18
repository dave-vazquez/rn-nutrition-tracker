import { NextButton, RadioButton } from "_components/common";
import { Heading } from "_components/flows/onboarding";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { withNavigationFocus } from "react-navigation";

const NOT_ACTIVE = 1.2;
const LIGHT_ACTIVE = 1.375;
const MODERATE_ACTIVE = 1.465;
const ACTIVE = 1.55;
const VERY_ACTIVE = 1.725;
const EXTREMELY_ACTIVE = 1.9;

const ActivityLevelScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { activityLevel },
    updateActivityLevel,
  } = useContext(OnboardingContext);

  return (
    <SafeAreaView style={s.container}>
      {isFocused && (
        <StatusBar backgroundColor={g.color.blue} barStyle="light-content" />
      )}
      <Heading title="How active are you?" />
      <View style={s.radioGroup}>
        <RadioButton
          label="Not Active"
          subLabel="little to no exercise"
          selected={activityLevel === NOT_ACTIVE}
          setSelected={() => updateActivityLevel(NOT_ACTIVE)}
        />
        <RadioButton
          label="Lightly Active"
          subLabel="exercise 1-3 days per week"
          selected={activityLevel === LIGHT_ACTIVE}
          setSelected={() => updateActivityLevel(LIGHT_ACTIVE)}
        />
        <RadioButton
          label="Moderately Active"
          subLabel="exercise 4-5 days per week)"
          selected={activityLevel === MODERATE_ACTIVE}
          setSelected={() => updateActivityLevel(MODERATE_ACTIVE)}
        />
        <RadioButton
          label="Active"
          subLabel="intense exercise 3-4 days per week"
          selected={activityLevel === ACTIVE}
          setSelected={() => updateActivityLevel(ACTIVE)}
        />
        <RadioButton
          label="Very Active"
          subLabel="intense exercise 6-7 days per week"
          selected={activityLevel === VERY_ACTIVE}
          setSelected={() => updateActivityLevel(VERY_ACTIVE)}
        />
        <RadioButton
          label="Extremely Active"
          subLabel="very intense exercise daily or physical job"
          selected={activityLevel === EXTREMELY_ACTIVE}
          setSelected={() => updateActivityLevel(EXTREMELY_ACTIVE)}
        />
      </View>
      <NextButton onPress={() => navigate("UserInfo")} gutterTop={0} />
    </SafeAreaView>
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
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: g.color.white,
  },
  radioGroup: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 10,
  },
});

export default ActivityLevelScreen;
