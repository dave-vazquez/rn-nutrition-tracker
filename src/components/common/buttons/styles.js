import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

// BASE STYLES
const base = StyleSheet.create({
  titleStyle: {
    color: Colors.white,
    fontSize: Typography.size.md,
    marginRight: Layout.spacing.sm,
    fontFamily: Typography.font.lato.regular,
  },
  buttonStyle: {
    backgroundColor: Colors.green.light.s4,
  },
  containerStyle: {
    justifyContent: "space-between",
    marginVertical: Layout.spacing.sm,
  },
});

// VARIANTS
const white = StyleSheet.create({
  ...base,
  buttonStyle: {
    ...base.buttonStyle,
    backgroundColor: Colors.white,
  },
  titleStyle: {
    ...base.titleStyle,
    color: Colors.grey.s8,
  },
});

const deselected = StyleSheet.create({
  ...base,
  buttonStyle: {
    ...base.buttonStyle,
    borderWidth: 1,
    borderColor: Colors.grey.s6,
    backgroundColor: Colors.white,
  },
  titleStyle: {
    ...base.titleStyle,
    color: Colors.grey.s6,
  },
});

const next = StyleSheet.create({
  ...base,
  buttonWrapper: {
    marginBottom: Layout.spacing.xl,
    justifyContent: "flex-end",
  },
  titleStyle: {
    ...base.titleStyle,
    marginRight: Layout.spacing.sm,
  },
});

export const buttonStyles = {
  base,
  next,
  white,
  deselected,
};
