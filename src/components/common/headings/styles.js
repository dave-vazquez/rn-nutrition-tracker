/* eslint-disable react-native/no-unused-styles */
import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

const HeadingStyles = StyleSheet.create({
  h1: {
    letterSpacing: 3,
    textAlign: "center",
    color: Colors.white,
    fontSize: Typography.size.xl,
    fontFamily: Typography.font.manrope,
  },
  h2: {
    textAlign: "center",
    color: Colors.white,
    fontSize: Typography.size.lg,
    fontFamily: Typography.font.manrope,
  },
  h3: {
    textAlign: "center",
    color: Colors.grey_s8,
    fontSize: Typography.size.lg,
    fontFamily: Typography.font.nunito,
    marginBottom: Layout.spacing.lg,
  },
});

export default HeadingStyles;
