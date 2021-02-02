import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { colors } from "_globalstyles";
import { Heading } from "components/flows/onboarding";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

const WeightGoalScreen = ({ navigation: { navigate, isFocused } }) => {
  const { updateWeightGoal } = useContext(OnboardingContext);

  const handlePress = (weightGoal) => {
    updateWeightGoal(weightGoal, () => navigate("ActivityLevel"));
  };

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar backgroundColor={colors.blue_2} barStyle="light-content" />
      )}
      <NavigationEvents onWillFocus={() => null} />
      <Heading title="What's your goal?" />
      <View style={s.content}>
        <Button
          raised
          iconRight
          title="Lose Weight"
          buttonStyle={s.button}
          titleStyle={s.buttonTitle}
          containerStyle={s.buttonContainer}
          onPress={() => handlePress("lose")}
          icon={{
            size: 30,
            color: "white",
            name: "run-fast",
            type: "material-community",
          }}
        />
        <Button
          raised
          iconRight
          title="Maintain Weight"
          buttonStyle={s.button}
          titleStyle={s.buttonTitle}
          containerStyle={s.buttonContainer}
          onPress={() => handlePress("maintain")}
          icon={{
            size: 30,
            color: "white",
            name: "barchart",
            type: "ant-design",
          }}
        />
        <Button
          raised
          iconRight
          title="Gain Weight"
          buttonStyle={s.button}
          titleStyle={s.buttonTitle}
          iconContainerStyle={s.iconContainer}
          containerStyle={s.buttonContainer}
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
  content: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFill,
  },
  buttonContainer: {
    marginVertical: 10,
    justifyContent: "space-between",
  },
  buttonTitle: {
    width: 200,
    fontSize: 22,
    marginRight: 10,
    fontFamily: "Lato_Regular",
    textAlign: "left",
  },
  button: {
    paddingHorizontal: 20,
    backgroundColor: colors.green_light_4,
  },
});

export default WeightGoalScreen;
