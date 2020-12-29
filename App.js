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
import GenderSelectScreen from "./src/screens/onboarding/GenderSelectScreen";
import GetStartedScreen from "./src/screens/onboarding/GetStartedScreen";
import MeasurementsScreen from "./src/screens/onboarding/MeasurementsScreen";
import WeightGoalScreen from "./src/screens/onboarding/WeightGoalScreen";

const AuthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    GetStarted: GetStartedScreen,
    Gender: GenderSelectScreen,
    Measurements: MeasurementsScreen,
    WeightGoal: WeightGoalScreen,
  },
  { initialRouteName: "WeightGoal" }
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
