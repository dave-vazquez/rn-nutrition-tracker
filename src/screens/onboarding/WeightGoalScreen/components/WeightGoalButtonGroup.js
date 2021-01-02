import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const WeightGoalButtonGroup = () => {
  const {
    state: { weightGoal, weightLbs },
    updateWeightGoal,
  } = useContext(OnboardingContext);

  return (
    <View style={{ marginVertical: 20 }}>
      {(!weightGoal || weightGoal === "lose") && (
        <Button
          buttonStyle={s.button}
          raised={weightGoal !== "lose"}
          onPress={() => updateWeightGoal("lose")}
          containerStyle={s.buttonContainer}
          titleStyle={s.buttonTitle}
          icon={{
            type: "material-community",
            name: "run-fast",
            size: 30,
            color: "white",
          }}
          iconRight
          title="Lose Weight"
        />
      )}
      {(!weightGoal || weightGoal === "maintain") && (
        <Button
          buttonStyle={s.button}
          raised={weightGoal !== "maintain"}
          onPress={() => {
            updateWeightGoal("maintain", weightLbs);
          }}
          containerStyle={s.buttonContainer}
          titleStyle={s.buttonTitle}
          icon={{
            type: "ant-design",
            name: "barchart",
            size: 30,
            color: "white",
          }}
          iconRight
          title="Maintain Weight"
        />
      )}
      {(!weightGoal || weightGoal === "gain") && (
        <Button
          buttonStyle={s.button}
          raised={weightGoal !== "gain"}
          onPress={() => updateWeightGoal("gain")}
          containerStyle={s.buttonContainer}
          titleStyle={s.buttonTitle}
          icon={{
            type: "material-community",
            name: "weight-lifter",
            size: 30,
            color: "white",
          }}
          iconRight
          title="Gain Weight"
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  button: {
    backgroundColor: g.color.light_green_4,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  buttonTitle: {
    fontFamily: "Lato_Regular",
    fontSize: 22,
    marginRight: 10,
  },
});

export default WeightGoalButtonGroup;
