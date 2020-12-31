import { Context as OnboardingContext } from "/contexts/OnboardingContext.js";
import g from "/global-styles";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import VMasker from "vanilla-masker";
import { NextButton, OnboardingView } from "./components";

const MeasurementsScreen = () => {
  const { updateMeasurements } = useContext(OnboardingContext);

  const [heightFt, setHeightFt] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handlePress = () => {
    updateMeasurements({
      heightFt,
      weightLbs,
      heightIn,
      dateOfBirth,
    });
  };

  const maskAndSetDateOfBirth = (inputDate) => {
    setDateOfBirth(VMasker.toPattern(inputDate, "99/99/9999"));
  };

  return (
    <OnboardingView
      containerStyles={s.container}
      headingText="Tell us a little bit about you!"
    >
      <View>
        <Input
          label="Height"
          value={heightFt}
          placeholder="ft."
          keyboardType="numeric"
          onChangeText={setHeightFt}
          leftIcon={{
            type: "font-awesome-5",
            name: "ruler-vertical",
            color: g.color.grey_8,
          }}
        />
        <Input
          value={heightIn}
          placeholder="in."
          keyboardType="numeric"
          onChangeText={setHeightIn}
          leftIcon={{
            type: "font-awesome-5",
            name: "ruler-vertical",
            color: g.color.grey_8,
          }}
        />
        <Input
          label="Weight"
          value={weightLbs}
          placeholder="lbs."
          keyboardType="numeric"
          onChangeText={setWeightLbs}
          leftIcon={{
            type: "font-awesome-5",
            name: "weight",
            color: g.color.grey_8,
          }}
        />
        <Input
          label="Date of Birth"
          value={dateOfBirth}
          placeholder="mm/dd/yyyy"
          keyboardType="numeric"
          onChangeText={maskAndSetDateOfBirth}
          leftIcon={{
            type: "font-awesome-5",
            name: "calendar",
            color: g.color.grey_8,
          }}
        />
      </View>
      <NextButton gutterTop={20} handlePress={handlePress} />
    </OnboardingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});

MeasurementsScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

export default MeasurementsScreen;
