import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../../contexts/AuthContext";
import g from "../../style";
import OnboardingView from "./components/OnboardingView";

const MeasurementsScreen = ({ navigation: { navigate } }) => {
  const { updateGender } = useContext(AuthContext);

  return (
    <OnboardingView headingText="Are you male or female?">
      <View style={s.container}>
        <Button
          buttonStyle={s.button}
          onPress={() => updateGender("male")}
          titleStyle={s.buttonTitle}
          icon={{
            type: "foundation",
            name: "male-symbol",
            size: 30,
            color: "white",
          }}
          iconRight
          title="Male"
        />
        <Button
          containerStyle={s.buttonContainer}
          buttonStyle={s.button}
          onPress={() => updateGender("female")}
          titleStyle={s.buttonTitle}
          icon={{
            type: "foundation",
            name: "female-symbol",
            size: 30,
            color: "white",
          }}
          iconRight
          title="Female"
        />
      </View>
    </OnboardingView>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "80%",
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

MeasurementsScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
  },
};

export default MeasurementsScreen;
