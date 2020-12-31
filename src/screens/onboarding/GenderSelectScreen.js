import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingView } from "./components";

const GenderSelectScreen = ({ navigation: { navigate } }) => {
  const { updateGender } = useContext(OnboardingContext);

  const handleSubmit = (gender) => {
    updateGender(gender, () => navigate("Measurements"));
  };

  return (
    <OnboardingView
      headingText="Are you male or female?"
      containerStyles={s.container}
    >
      <View style={s.buttonGroup}>
        <Button
          raised
          iconRight
          title="Male"
          buttonStyle={s.button}
          titleStyle={s.buttonTitle}
          onPress={() => handleSubmit("male")}
          icon={{
            type: "foundation",
            name: "male-symbol",
            size: 30,
            color: "white",
          }}
        />
        <Button
          raised
          iconRight
          title="Female"
          buttonStyle={s.button}
          titleStyle={s.buttonTitle}
          containerStyle={s.buttonContainer}
          onPress={() => handleSubmit("female")}
          icon={{
            type: "foundation",
            name: "female-symbol",
            size: 30,
            color: "white",
          }}
        />
      </View>
    </OnboardingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    flex: .8,
    justifyContent: "center",
  },
  button: {
    backgroundColor: g.color.light_green_4,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonTitle: {
    fontFamily: "Lato_Regular",
    fontSize: 22,
    marginRight: 10,
  },
});

GenderSelectScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

export default GenderSelectScreen;
