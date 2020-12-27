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
import { Button } from "../components";
import { default as s } from "../style";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/home-background.png")}
      >
        <LinearGradient
          style={styles.gradient}
          colors={["rgba(0, 0, 0, 0.70)", "transparent"]}
        />
        <View>
          <Text style={[styles.title, styles.title_1]}>WELCOME TO</Text>
          <Text style={[styles.title, styles.title_2]}>NutriJournal</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="SIGN UP" onPress={() => navigate("GetStarted")} />
          <Button
            text="LOGIN"
            buttonStyles={s.bgColor.white}
            textStyles={s.textColor.grey_8}
            onPress={() => navigate("Login")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    color: s.color.white,
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
