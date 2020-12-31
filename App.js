/* eslint-disable react/display-name */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import NavigationService from "./src/NavigationService";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import { Provider as OnboardingProvider } from "./src/contexts/OnboardingContext";
import { AuthResolutionScreen, HomeScreen, JournalScreen } from "./src/screens";
import { AuthScreen } from "./src/screens/authentication";
import {
  ActivityLevelScreen,
  GenderSelectScreen,
  MeasurementsScreen,
  WeightGoalScreen,
} from "./src/screens/onboarding";

const AuthNavigator = createStackNavigator(
  {
    AuthResolution: AuthResolutionScreen,
    Home: HomeScreen,
    Gender: GenderSelectScreen,
    Measurements: MeasurementsScreen,
    WeightGoal: WeightGoalScreen,
    ActivityLevel: ActivityLevelScreen,
    AuthScreen: AuthScreen,
  },
  { initialRouteName: "Measurements" }
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
    Lato_Light: require("./src/assets/fonts/Lato/Lato-Light.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <AuthProvider>
      <OnboardingProvider>
        <App
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </OnboardingProvider>
    </AuthProvider>
  );
};
