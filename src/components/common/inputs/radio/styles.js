import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

const RadioStyles = StyleSheet.create({
  radioGroup: {
    flex: 1,
    alignItems: "flex-start",
  },
  touchable: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginVertical: Layout.spacing.sm,
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
    marginLeft: Layout.spacing.md,
    fontSize: Typography.size.md,
    fontFamily: Typography.font.lato.regular,
  },
  subLabel: {
    marginTop: Layout.spacing.xs,
    fontSize: Typography.size.sm,
    marginLeft: Layout.spacing.md,
    fontFamily: Typography.font.lato.light,
  },
});

export default RadioStyles;
