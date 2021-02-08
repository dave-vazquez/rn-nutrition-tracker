import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

export const radioButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: Layout.spacing.sm,
  },
  touchable: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  radioBorder: {
    width: 24,
    height: 24,
    borderWidth: 2,
    marginLeft: Layout.spacing.sm,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.grey.s8,
  },
  radioFill: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.blue.s2,
  },
  label: {
    marginTop: -1,
    marginLeft: Layout.spacing.sm,
    fontSize: Typography.size.md,
    fontFamily: Typography.font.lato.regular,
  },
  subLabel: {
    marginTop: Layout.spacing.xs,
    fontSize: Typography.font.sm,
    marginLeft: Layout.spacing.sm,
    fontFamily: Typography.font.lato.light,
  },
});
