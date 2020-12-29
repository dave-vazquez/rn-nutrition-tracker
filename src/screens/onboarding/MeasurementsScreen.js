import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import VMasker from "vanilla-masker";
import { Gutter } from "../../components";
import { Context as AuthContext } from "../../contexts/AuthContext";
import g from "../../style";
import OnboardingView from "./components/OnboardingView";

const UserInfoScreen = () => {
  const { updateMeasurements } = useContext(AuthContext);
  const [feet, setFeet] = useState("");
  const [weight, setWeight] = useState("");
  const [inches, setInches] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const maskDateOfBirth = (date) => {
    setDateOfBirth(VMasker.toPattern(date, "99/99/9999"));
  };

  const handlePress = () => {
    updateMeasurements({
      feet,
      inches,
      weight,
      dateOfBirth,
    });
  };

  return (
    <OnboardingView
      headingText="Tell us about yourself!"
      containerStyles={s.container}
    >
      <View>
        <Gutter height={20} />
        <Input
          value={feet}
          onChangeText={setFeet}
          placeholder="ft."
          label="Height"
          keyboardType="numeric"
          leftIcon={{
            type: "font-awesome-5",
            name: "ruler-vertical",
            color: g.color.grey_8,
          }}
        />
        <Input
          value={inches}
          onChangeText={setInches}
          placeholder="in."
          keyboardType="numeric"
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
          onChangeText={setWeight}
          keyboardType="numeric"
          leftIcon={{
            type: "font-awesome-5",
            name: "weight",
            color: g.color.grey_8,
          }}
        />
        <Input
          label="Date of Birth"
          keyboardType="numeric"
          placeholder="mm/dd/yyyy"
          value={dateOfBirth}
          onChangeText={maskDateOfBirth}
          leftIcon={{
            type: "font-awesome-5",
            name: "calendar",
            color: g.color.grey_8,
          }}
        />
      </View>
      <Button
        raised
        onPress={handlePress}
        buttonStyle={s.button}
        titleStyle={s.buttonTitle}
        icon={<Icon name="arrow-right" size={30} color="white" />}
        iconRight
        title="Next"
      />
    </OnboardingView>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: g.color.light_green_4,
  },
  buttonTitle: {
    fontSize: 22,
    fontFamily: "Lato_Regular",
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
