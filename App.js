import "./src/wdyr";

import CombinedProvider from "contexts/CombinedProvider";
/* eslint-disable react/display-name */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { HomeNavigator, OnboardingNavigator } from "./src/navigation";
import { NavigationService } from "./src/navigation/utils";
import { AuthResolutionScreen } from "./src/screens/authentication";
import ThemeProvider from "./src/styles/theme";

const RootNavigator = createSwitchNavigator(
  {
    AuthResolution: AuthResolutionScreen,
    Onboarding: OnboardingNavigator,
    Home: HomeNavigator,
  },
  {
    initialRouteName: "AuthResolution",
  }
);

export const Root = createAppContainer(RootNavigator);

export default () => {
  const [loaded] = useFonts({
    Manrope_Light: require("./src/assets/fonts/Manrope/Manrope-Light.ttf"),
    Manrope_Reg: require("./src/assets/fonts/Manrope/Manrope-Regular.ttf"),
    Manrope_Bold: require("./src/assets/fonts/Manrope/Manrope-Bold.ttf"),
    NunitoSans_Regular: require("./src/assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf"),
    NunitoSans_Bold: require("./src/assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf"),
    Roboto_medium: require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    Roboto_Regular: require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    Roboto_Bold: require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    Lato_Regular: require("./src/assets/fonts/Lato/Lato-Regular.ttf"),
    Lato_Italic: require("./src/assets/fonts/Lato/Lato-Italic.ttf"),
    Lato_Bold: require("./src/assets/fonts/Lato/Lato-Bold.ttf"),
    Lato_Light: require("./src/assets/fonts/Lato/Lato-Light.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <ThemeProvider>
      <CombinedProvider>
        <Root
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </CombinedProvider>
    </ThemeProvider>
  );
};
