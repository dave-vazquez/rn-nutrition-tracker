import { NextButton, Radio } from "_components/common";
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
import { Colors } from "_global_styles";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const ActivityLevelScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { activityLevel },
    updateActivityLevel,
  } = useContext(OnboardingContext);

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
      )}
      <Heading title="How active are you?" />
      <Radio.Group>
        <Radio.Button
          label="Not Active"
          subLabel="little to no exercise"
          selected={activityLevel === NOT_ACTIVE}
          setSelected={() => updateActivityLevel(NOT_ACTIVE)}
        />
        <Radio.Button
          label="Lightly Active"
          subLabel="exercise 1-3 days per week"
          selected={activityLevel === LIGHT_ACTIVE}
          setSelected={() => updateActivityLevel(LIGHT_ACTIVE)}
        />
        <Radio.Button
          label="Moderately Active"
          subLabel="exercise 4-5 days per week)"
          selected={activityLevel === MODERATE_ACTIVE}
          setSelected={() => updateActivityLevel(MODERATE_ACTIVE)}
        />
        <Radio.Button
          label="Active"
          subLabel="intense exercise 3-4 days per week"
          selected={activityLevel === ACTIVE}
          setSelected={() => updateActivityLevel(ACTIVE)}
        />
        <Radio.Button
          label="Very Active"
          subLabel="intense exercise 6-7 days per week"
          selected={activityLevel === VERY_ACTIVE}
          setSelected={() => updateActivityLevel(VERY_ACTIVE)}
        />
        <Radio.Button
          label="Extremely Active"
          subLabel="very intense exercise daily or physical job"
          selected={activityLevel === EXTREMELY_ACTIVE}
          setSelected={() => updateActivityLevel(EXTREMELY_ACTIVE)}
        />
      </Radio.Group>
      <NextButton onPress={() => navigate("UserInfo")} gutterTop={0} />
    </SafeAreaView>
  );
};

ActivityLevelScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: Colors.white,
  headerStyle: {
    backgroundColor: Colors.blue.s2,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
});

export default ActivityLevelScreen;
