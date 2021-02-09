import { Colors, Layout, Typography } from "_global_styles";
import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
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

/********************************************************
 *                        TYPES                         *
 ********************************************************/
const nextButton = StyleSheet.flatten([
  baseStyles,
  {
    buttonWrapper: {
      justifyContent: "flex-end",
      marginBottom: Layout.spacing.xl,
    },
    titleStyle: {
      marginLeft: Layout.spacing.lg,
    },
  },
]);

/********************************************************
 *                       VARIANTS                        *
 ********************************************************/
const primaryVariant = baseStyles;
const secondaryVariant = StyleSheet.flatten([
  baseStyles,
  {
    buttonStyle: {
      backgroundColor: Colors.white,
    },
    titleStyle: {
      ...baseStyles.titleStyle,
      color: Colors.grey.s8,
    },
  },
]);

/********************************************************
 *                       STATES                          *
 ********************************************************/
const primarySelected = primaryVariant;
const primaryDeslected = StyleSheet.flatten([
  primaryVariant,
  {
    buttonStyle: {
      borderWidth: 1,
      borderColor: Colors.grey.s6,
      backgroundColor: Colors.white,
    },
    titleStyle: {
      ...primaryVariant.titleStyle,
      color: Colors.grey.s6,
    },
  },
]);

const secondarySelected = secondaryVariant;
const secondaryDeselected = StyleSheet.flatten([
  secondaryVariant,
  {
    buttonStyle: {
      borderWidth: 1,
      borderColor: Colors.grey.s6,
      backgroundColor: Colors.white,
    },
    titleStyle: {
      color: Colors.grey.s6,
    },
  },
]);

const ButtonStyles = {
  nextButton,
  baseButton: {
    primary: {
      state: (selected) => {
        if (selected === true) return primarySelected;
        if (selected === false) return primaryDeslected;
        return primaryVariant;
      },
    },
    secondary: {
      state: (selected) => {
        if (selected === true) return secondarySelected;
        if (selected === false) return secondaryDeselected;
        return secondaryVariant;
      },
    },
  },
};

export default ButtonStyles;
