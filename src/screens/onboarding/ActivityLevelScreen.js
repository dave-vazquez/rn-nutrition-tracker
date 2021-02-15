import { Button, Heading, Radio } from "_components/common";
import {
  ACTIVE,
  EXTREMELY_ACTIVE,
  LIGHT_ACTIVE,
  MODERATE_ACTIVE,
  NOT_ACTIVE,
  VERY_ACTIVE,
} from "_constants";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { Colors, Layout } from "_global_styles";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

const ActivityLevelScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { activityLevel },
    updateActivityLevel,
  } = useContext(OnboardingContext);

  return (
    <SafeAreaView style={Layout.container.onboarding}>
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
      )}
      <Heading title="How active are you?" size="h3" />
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
      <View style={Layout.fixedBottom}>
        <Button
          title="Next"
          size="large"
          onPress={() => navigate("UserInfo")}
        />
      </View>
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

export default ActivityLevelScreen;
