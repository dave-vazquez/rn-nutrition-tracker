import { Layout } from "_global_styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Platform, StyleSheet } from "react-native";

const LandingContainer = ({ children }) => {
  return (
    <ImageBackground
      style={s.imageContainer}
      source={require("_assets/images/home-background.png")}
    >
      <LinearGradient
        style={s.gradient}
        colors={["rgba(0, 0, 0, 0.70)", "transparent"]}
      />
      {children}
    </ImageBackground>
  );
};

const s = StyleSheet.create({
  imageContainer: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: Layout.spacing.xl,
    paddingHorizontal: Layout.spacing.sm,
    paddingTop: Platform.OS === "ios" ? 60 : 50,
  },
  gradient: {
    height: 350,
    ...StyleSheet.absoluteFill,
  },
});

export default LandingContainer;
