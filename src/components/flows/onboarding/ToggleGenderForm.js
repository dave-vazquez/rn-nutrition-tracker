import { Colors } from "_global_styles";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const ToggleGenderForm = ({ gender, updateGender }) => {
  //
  const containerStyle = [s.container, !gender ? s.centered : null];

  return (
    <View style={containerStyle}>
      <View style={s.buttonGroup}>
        <ToggleButton
          title="Male"
          raised={gender !== "male"}
          onPress={() => updateGender("male")}
          selected={!gender || gender === "male"}
        />
        <ToggleButton
          title="Female"
          raised={gender !== "female"}
          onPress={() => updateGender("female")}
          selected={!gender || gender === "female"}
        />
      </View>
    </View>
  );
};

const ToggleButton = ({ title, onPress, selected, raised }) => {
  //
  const buttonStyle = selected ? s.button : s.buttonUnselected;

  const titleStyle = [
    s.title,
    { color: selected ? Colors.white : Colors.grey.s6 },
  ];

  return (
    <Button
      raised={raised}
      iconRight
      title={title}
      onPress={onPress}
      containerStyle={s.buttonContainer}
      titleStyle={titleStyle}
      buttonStyle={buttonStyle}
    />
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  centered: {
    paddingHorizontal: 10,
    ...StyleSheet.absoluteFill,
  },
  buttonContainer: {
    width: "45%",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    marginRight: 10,
    textAlign: "left",
    fontFamily: "Lato_Regular",
  },
  button: {
    paddingHorizontal: 20,
    backgroundColor: Colors.green.light.s4,
  },
  buttonUnselected: {
    borderWidth: 1,
    borderColor: Colors.grey.s6,
    backgroundColor: "transparent",
  },
});

export default ToggleGenderForm;
