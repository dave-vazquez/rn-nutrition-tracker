import { Dimensions, StyleSheet } from "react-native";
import * as Colors from "./colors";

export const spacing = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};

export const fixedBottom = {
  flex: 1,
  justifyContent: "flex-end",
};

export const hidden = {
  display: "none",
};

export const screen = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

export const container = StyleSheet.create({
  onboarding: {
    flex: 1,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: Colors.white,
  },
  application: {
    flex: 1,
    backgroundColor: Colors.wheat,
  },
});
