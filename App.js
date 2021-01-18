/* eslint-disable react/display-name */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import NavigationService from "./src/NavigationService";
import CombinedProvider from "./src/contexts/CombinedProvider";
import { AppNavigator, AuthNavigator } from "./src/navigation";
import { AuthResolutionScreen } from "./src/screens/authentication";

const RootNavigator = createSwitchNavigator(
  {
    AuthResolution: AuthResolutionScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: "AuthResolution",
  }
);

export const App = createAppContainer(RootNavigator);

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
    <CombinedProvider>
      <App
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </CombinedProvider>
  );
};
