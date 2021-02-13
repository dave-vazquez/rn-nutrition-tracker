import { Button } from "_components/common";
import React from "react";
import { StyleSheet, View } from "react-native";

const GenderSection = ({ gender, updateGender }) => {
  //
  const containerStyle = [s.container, !gender ? s.centered : null];

  return (
    <View style={containerStyle}>
      <View style={s.buttonGroup}>
        <Button
          width="45%"
          title="Male"
          size="large"
          raised={gender !== "male"}
          onPress={() => updateGender("male")}
          selected={!gender || gender === "male"}
        />
        <Button
          width="45%"
          title="Female"
          size="large"
          raised={gender !== "female"}
          onPress={() => updateGender("female")}
          selected={!gender || gender === "female"}
        />
      </View>
    </View>
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
});

export default GenderSection;
