import { Button, Heading } from "_components/common";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { Colors, Layout } from "_global_styles";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const WeightGoalScreen = ({ navigation: { navigate, isFocused } }) => {
  const { updateWeightGoal } = useContext(OnboardingContext);

  const handlePress = (weightGoal) => {
    updateWeightGoal(weightGoal, () => navigate("ActivityLevel"));
  };

  return (
    <SafeAreaView style={Layout.container.onboarding}>
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
      )}
      <Heading title="What's your goal?" size="h3" />
      <View style={s.content}>
        <Button
          width={300}
          size="large"
          buttonStyles={{ justifyContent: "space-between" }}
          title="Lose Weight"
          onPress={() => handlePress("lose")}
          iconRight={{
            name: "run-fast",
            type: "material-community",
          }}
        />
        <Button
          width={300}
          size="large"
          title="Maintain Weight"
          buttonStyles={{ justifyContent: "space-between" }}
          onPress={() => handlePress("maintain")}
          iconRight={{
            name: "barchart",
            type: "ant-design",
          }}
        />
        <Button
          width={300}
          title="Gain Weight"
          buttonStyles={{ justifyContent: "space-between" }}
          onPress={() => handlePress("gain")}
          iconRight={{
            name: "weight-lifter",
            type: "material-community",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

WeightGoalScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: Colors.white,
  headerStyle: {
    backgroundColor: Colors.blue.s2,
  },
};

const s = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFill,
  },
});

export default WeightGoalScreen;
