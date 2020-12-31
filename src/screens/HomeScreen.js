import g from "_globalstyles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Platform } from "react-native";
import { Button } from "react-native-elements";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" />
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
            onPress={() => navigate("Gender")}
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
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: () => false,
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    paddingBottom: 30,
    resizeMode: "cover",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 60 : 30,
  },
  gradient: {
    height: "65%",
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
    fontSize: 28,
    letterSpacing: 3,
  },
  title_2: {
    fontSize: 52,
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
    backgroundColor: g.color.light_green_4,
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
    color: g.color.grey_8
  },
});

export default HomeScreen;
