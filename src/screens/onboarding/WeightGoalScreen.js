import { Button } from "_components/common";
import { Heading } from "_components/flows/onboarding";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { Colors } from "_global_styles";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

const WeightGoalScreen = ({ navigation: { navigate, isFocused } }) => {
  const { updateWeightGoal } = useContext(OnboardingContext);

  const handlePress = (weightGoal) => {
    updateWeightGoal(weightGoal, () => navigate("ActivityLevel"));
  };

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
      )}
      <NavigationEvents onWillFocus={() => null} />
      <Heading title="What's your goal?" />
      <View style={s.content}>
        <Button
          width={300}
          title="Lose Weight"
          onPress={() => handlePress("lose")}
          icon={{
            size: 30,
            color: "white",
            name: "run-fast",
            type: "material-community",
          }}
        />
        <Button
          width={300}
          title="Maintain Weight"
          onPress={() => handlePress("maintain")}
          icon={{
            size: 30,
            color: "white",
            name: "barchart",
            type: "ant-design",
          }}
        />
        <Button
          width={300}
          title="Gain Weight"
          onPress={() => handlePress("gain")}
          icon={{
            size: 30,
            color: "white",
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
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFill,
  },
});

export default WeightGoalScreen;
