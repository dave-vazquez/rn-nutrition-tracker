import g from "_globalstyles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const WeightGoalButtonGroup = ({ weightGoal, setWeightGoal }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      {(weightGoal === "initial" || weightGoal === "lose") && (
        <Button
          buttonStyle={s.button}
          raised={weightGoal !== "lose"}
          onPress={() => setWeightGoal("lose")}
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
      {(weightGoal === "initial" || weightGoal === "maintain") && (
        <Button
          buttonStyle={s.button}
          raised={weightGoal !== "maintain"}
          onPress={() => setWeightGoal("maintain")}
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
      {(weightGoal === "initial" || weightGoal === "gain") && (
        <Button
          buttonStyle={s.button}
          raised={weightGoal !== "gain"}
          onPress={() => setWeightGoal("gain")}
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
