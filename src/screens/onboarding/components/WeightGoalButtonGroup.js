import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import g from "../../../style";

const WeightGoalButtonGroup = ({ goal, setGoal }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      {(goal === "initial" || goal === "lose") && (
        <Button
          buttonStyle={s.button}
          raised={goal !== "lose"}
          onPress={() => setGoal("lose")}
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
      {(goal === "initial" || goal === "maintain") && (
        <Button
          buttonStyle={s.button}
          raised={goal !== "maintain"}
          onPress={() => setGoal("maintain")}
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
      {(goal === "initial" || goal === "gain") && (
        <Button
          buttonStyle={s.button}
          raised={goal !== "gain"}
          onPress={() => setGoal("gain")}
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
