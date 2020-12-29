import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Input, View } from "react-native-elements";
import VMasker from "vanilla-masker";
import { Context as AuthContext } from "../../contexts/AuthContext";
import g from "../../style";
import NextButton from "./components/NextButton";
import OnboardingView from "./components/OnboardingView";

const UserInfoScreen = () => {
  const { updateMeasurements } = useContext(AuthContext);

  const [feet, setFeet] = useState("");
  const [weight, setWeight] = useState("");
  const [inches, setInches] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handlePress = () => {
    updateMeasurements({
      feet,
      inches,
      weight,
      dateOfBirth,
    });
  };

  const maskDateOfBirth = (date) => {
    setDateOfBirth(VMasker.toPattern(date, "99/99/9999"));
  };

  return (
    <OnboardingView
      containerStyles={s.container}
      headingText="Tell us a little bit about you!"
    >
      <View>
        <Input
          label="Height"
          value={feet}
          placeholder="ft."
          keyboardType="numeric"
          onChangeText={setFeet}
          leftIcon={{
            type: "font-awesome-5",
            name: "ruler-vertical",
            color: g.color.grey_8,
          }}
        />
        <Input
          value={inches}
          placeholder="in."
          keyboardType="numeric"
          onChangeText={setInches}
          leftIcon={{
            type: "font-awesome-5",
            name: "ruler-vertical",
            color: g.color.grey_8,
          }}
        />
        <Input
          label="Weight"
          value={weight}
          placeholder="lbs."
          keyboardType="numeric"
          onChangeText={setWeight}
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
          onChangeText={maskDateOfBirth}
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

UserInfoScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

export default UserInfoScreen;
