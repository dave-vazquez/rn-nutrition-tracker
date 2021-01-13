import g from "_globalstyles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";

const HomeScreen = ({ navigation: { navigate }, isFocused }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isFocused && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
      )}
      <ImageBackground
        style={s.imageContainer}
        source={require("_assets/images/home-background.png")}
      >
        <LinearGradient
          style={s.gradient}
          colors={["rgba(0, 0, 0, 0.70)", "transparent"]}
        />
        <View style={s.titleContainer}>
          <Text style={[s.title, s.title_1]}>WELCOME TO</Text>
          <Text style={[s.title, s.title_2]}>NutriJournal</Text>
        </View>
        <View style={s.buttonGroup}>
          <Button
            raised
            title="Sign Up"
            titleStyle={s.buttonTitle}
            buttonStyle={s.buttonSignup}
            containerStyle={s.buttonContainer}
            onPress={() => navigate("WeightGoal")}
          />
          <Button
            raised
            title="Login"
            buttonStyle={s.buttonLogin}
            containerStyle={s.buttonContainer}
            titleStyle={[s.buttonTitle, s.buttonTitle_login]}
            onPress={() => navigate("AuthScreen", { authType: "signin" })}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  header: () => false,
};

const s = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingBottom: 30,
    resizeMode: "cover",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 60 : 50,
  },
  gradient: {
    height: 350,
    ...StyleSheet.absoluteFill,
  },
  titleContainer: {
    flex: 1,
    width: "100%",
  },
  title: {
    textAlign: "center",
    color: g.color.white,
    fontFamily: "Manrope_Reg",
  },
  title_1: {
    fontSize: 34,
    letterSpacing: 3,
  },
  title_2: {
    fontSize: 58,
  },
  buttonGroup: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonSignup: {
    backgroundColor: g.color.green_light_4,
  },
  buttonLogin: {
    backgroundColor: g.color.white,
  },
  buttonTitle: {
    fontSize: 22,
    marginRight: 10,
    fontFamily: "Lato_Regular",
  },
  buttonTitle_login: {
    color: g.color.grey_8,
  },
});

export default withNavigationFocus(HomeScreen);
