import { Context as OnboardingContext } from "/contexts/OnboardingContext";
import g from "/global-styles";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingView } from "./components";

const GenderSelectScreen = () => {
  const { updateGender } = useContext(OnboardingContext);

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
          onPress={() => updateGender("male")}
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
          onPress={() => updateGender("female")}
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
    flex: 0.3,
    justifyContent: "flex-end",
    // borderWidth: 1,
    // borderColor: "red",
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
