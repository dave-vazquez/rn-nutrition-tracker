import { Colors, Layout, Typography, composeStyles } from "_global_styles";
import { Platform } from "react-native";

const baseStyles = {
  container: {
    borderRadius: 3,
    overflow: "hidden",
    justifyContent: "space-between",
    marginVertical: Layout.spacing.sm,
  },
  button: {
    borderRadius: 3,
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  title: {
    paddingVertical: 1,
    textAlign: "center",
    fontFamily: Typography.font.lato.regular,
  },
  iconContainer: {
    marginHorizontal: Layout.spacing.xs,
  },
  loading: {
    marginVertical: 2,
  },
  raised: {
    overflow: "visible",
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowRadius: 1,
        shadowOpacity: 1,
        shadowColor: "rgba(0,0,0, .4)",
        shadowOffset: { height: 1, width: 1 },
      },
    }),
  },
};

/********************************************************
 *                       VARIANTS                       *
 ********************************************************/
const primary = (styles) => ({
  ...styles,
  button: {
    ...styles.button,
    backgroundColor: Colors.green.light.s4,
  },
  title: {
    ...baseStyles.title,
    color: Colors.white,
  },
});

const secondary = (styles) => ({
  ...styles,
  button: {
    ...styles.button,
    backgroundColor: Colors.white,
  },
  title: {
    ...styles.title,
    color: Colors.grey.s8,
  },
});

/********************************************************
 *                         SIZES                        *
 ********************************************************/
const small = (styles) => ({
  ...styles,
  title: {
    ...styles.title,
    fontSize: Typography.size.sm,
  },
});

const large = (styles) => ({
  ...styles,
  title: {
    ...styles.title,
    fontSize: Typography.size.md,
  },
});

/********************************************************
 *                         STATES                       *
 ********************************************************/
const selected = (styles) => ({
  ...styles,
  button: {
    ...styles.button,
  },
});

const deselected = (styles) => ({
  ...styles,
  button: {
    ...styles.button,
    borderWidth: 1,
    borderColor: Colors.grey.s6,
    backgroundColor: Colors.white,
  },
  title: {
    ...styles.title,
    color: Colors.grey.s6,
  },
});

const ButtonStyles = {
  primary: {
    small: {
      default: composeStyles(baseStyles, {
        variant: primary,
        size: small,
      }),
      selected: composeStyles(baseStyles, {
        variant: primary,
        size: small,
        state: selected,
      }),
      deselected: composeStyles(baseStyles, {
        variant: primary,
        size: small,
        state: deselected,
      }),
    },
    large: {
      default: composeStyles(baseStyles, {
        variant: primary,
        size: large,
      }),
      selected: composeStyles(baseStyles, {
        variant: primary,
        size: large,
        state: selected,
      }),
      deselected: composeStyles(baseStyles, {
        variant: primary,
        size: large,
        state: deselected,
      }),
    },
  },
  secondary: {
    small: {
      default: composeStyles(baseStyles, {
        variant: secondary,
        size: small,
      }),
      selected: composeStyles(baseStyles, {
        variant: secondary,
        size: small,
        state: selected,
      }),
      deselected: composeStyles(baseStyles, {
        variant: secondary,
        size: small,
        state: deselected,
      }),
    },
    large: {
      default: composeStyles(baseStyles, {
        variant: secondary,
        size: large,
      }),
      selected: composeStyles(baseStyles, {
        variant: secondary,
        size: large,
        state: selected,
      }),
      deselected: composeStyles(baseStyles, {
        variant: secondary,
        size: large,
        state: deselected,
      }),
    },
  },
};

export default ButtonStyles;
