import { Button } from "/common";
import g from "/global-styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={s.container} forceInset={{ top: "always" }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={s.image}
        source={require("../assets/images/home-background.png")}
      >
        <LinearGradient
          style={s.gradient}
          colors={["rgba(0, 0, 0, 0.70)", "transparent"]}
        />
        <View>
          <Text style={[s.title, s.title_1]}>WELCOME TO</Text>
          <Text style={[s.title, s.title_2]}>NutriJournal</Text>
        </View>
        <View style={s.buttonContainer}>
          <Button text="SIGN UP" onPress={() => navigate("Gender")} />
          <Button
            text="LOGIN"
            buttonStyles={g.bgColor.white}
            textStyles={g.textColor.grey_8}
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
  container: { flex: 1 },
  gradient: {
    height: "65%",
    ...StyleSheet.absoluteFill,
  },
  image: {
    flex: 1,
    paddingVertical: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    resizeMode: "cover",
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
});

export default HomeScreen;
