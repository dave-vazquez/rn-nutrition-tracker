/* eslint-disable react/display-name */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import NavigationService from "./src/NavigationService";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import JournalScreen from "./src/screens/JournalScreen";
import GetStartedScreen from "./src/screens/onboarding/GetStartedScreen";
import UserInfoScreen from "./src/screens/onboarding/UserInfoScreen";

const AuthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    GetStarted: GetStartedScreen,
    UserInfo: UserInfoScreen,
  },
  { initialRouteName: "Home" }
);

const switchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Journal: JournalScreen,
  },
  {
    initialRouteName: "Auth",
  }
);

const App = createAppContainer(switchNavigator);

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
  });

  if (!loaded) return <AppLoading />;

  return (
    <AuthProvider>
      <App
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </AuthProvider>
  );
};
