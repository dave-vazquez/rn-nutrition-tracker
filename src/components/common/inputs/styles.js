import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
  container: {
    margin: 8,
    justifyContent: "space-between",
  },
  label: {
    color: Colors.blue.s2,
    fontSize: Typography.size.xs,
    fontFamily: Typography.font.lato.regular,
  },
  input: {
    flex: 1,
    color: Colors.grey.s8,
    fontSize: Typography.size.xs,
    paddingVertical: Layout.spacing.xs,
    fontFamily: Typography.font.lato.regular,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue.s2,
  },
  leftIconContainer: {
    width: 25,
    alignItems: "flex-start",
  },
  rightIconContainer: {
    width: 25,
    alignItems: "flex-end",
  },
  error: {
    textAlign: "center",
    fontFamily: Typography.font.lato.regular,
    fontSize: Typography.size.xs,
    color: Colors.warning.s1,
    marginVertical: Layout.spacing.sm,
  },
});

/********************************************************
 *                           TYPES                      *
 ********************************************************/
const selectionType = StyleSheet.flatten([
  baseStyles,
  {
    mockInput: {
      ...baseStyles.input,
      paddingVertical: Layout.spacing.sm,
      borderBottomWidth: 0,
    },
    icon: {
      color: Colors.blue.s2,
    },
    touchable: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
]);

/********************************************************
 *                     VARIANTS                         *
 ********************************************************/

const smallVariant = baseStyles;
const largeVariant = StyleSheet.flatten([
  baseStyles,
  {
    container: {
      ...baseStyles.container,
      marginBottom: Layout.spacing.sm,
    },
    label: {
      ...baseStyles.label,
      color: Colors.grey.s8,
      fontSize: Typography.size.sm,
    },
    input: {
      ...baseStyles.input,
      fontSize: Typography.size.sm,
      paddingVertical: Layout.spacing.sm,
    },
  },
]);

const selectionSmallVariant = selectionType;
const selectionLargeVariant = StyleSheet.flatten([
  largeVariant,
  {
    mockInput: {
      ...largeVariant.input,
      paddingVertical: Layout.spacing.sm,
      borderBottomWidth: 0,
    },
    icon: {
      color: Colors.blue.s2,
    },
    touchable: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
]);

const InputStyles = {
  textInput: {
    small: smallVariant,
    large: largeVariant,
  },
  selectionInput: {
    small: selectionSmallVariant,
    large: selectionLargeVariant,
  },
};

export default InputStyles;
