import React from "react";
import { ThemeProvider } from "react-native-elements";
import * as Colors from "./colors";
import * as Layout from "./layout";
import * as Typography from "./typography";

const variants = {
  button: {
    white: {
      buttonStyle: {
        backgroundColor: Colors.white,
      },
      titleStyle: {
        color: Colors.grey.s8,
      },
    },
  },
};

const theme = {
  colors: { ...Colors },
  fonts: Typography.fonts,
  fontSize: Typography.size,
  spacing: Layout.spacing,
  Button: {
    raised: true,
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
  },
  variants,
};

export default ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
