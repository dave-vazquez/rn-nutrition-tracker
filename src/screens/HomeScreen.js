import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/home-background.png")}
      >
        <LinearGradient
          style={styles.gradient}
          colors={["rgba(0, 0, 0, 0.70)", "transparent"]}
        >
          <Text style={[styles.title, styles.title_2]}>WELCOME TO</Text>
          <Text style={[styles.title, styles.title_1]}>NutriJournal</Text>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Manrope_Reg",
    color: "white",
    textAlign: "center",
  },
  title_1: {
    fontSize: 48,
  },
  title_2: {
    fontSize: 24,
    marginTop: 30,
    letterSpacing: 3,
  },
});

export default HomeScreen;
