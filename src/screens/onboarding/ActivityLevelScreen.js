import { NextButton, RadioButton } from "_components/common";
import { Heading } from "_components/flows/onboarding";
import {
  ACTIVE,
  EXTREMELY_ACTIVE,
  LIGHT_ACTIVE,
  MODERATE_ACTIVE,
  NOT_ACTIVE,
  VERY_ACTIVE,
} from "_constants";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { colors } from "_global_styles";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const ActivityLevelScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { activityLevel },
    updateActivityLevel,
  } = useContext(OnboardingContext);

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar backgroundColor={colors.blue_2} barStyle="light-content" />
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
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.blue_2,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  radioGroup: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 10,
  },
});

export default ActivityLevelScreen;
