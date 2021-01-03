/* eslint-disable react/display-name */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import NavigationService from "./src/NavigationService";
import { Provider as AuthProvider } from "./src/contexts/AuthContext";
import { Provider as JournalProvider } from "./src/contexts/JournalContext";
import { Provider as OnboardingProvider } from "./src/contexts/OnboardingContext";
import {
  BarcodeScreen,
  FoodSearchScreen,
  JournalScreen,
  ProgressScreen,
  SettingsScreen,
} from "./src/screens/application";
import { AuthResolutionScreen, AuthScreen } from "./src/screens/authentication";
import {
  ActivityLevelScreen,
  GenderSelectScreen,
  HomeScreen,
  MeasurementsScreen,
  WeightGoalScreen,
} from "./src/screens/onboarding";

const AuthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Gender: GenderSelectScreen,
    Measurements: MeasurementsScreen,
    WeightGoal: WeightGoalScreen,
    ActivityLevel: ActivityLevelScreen,
    AuthScreen: AuthScreen,
  },
  { initialRouteName: "Home" }
);

const AppNavigator = createBottomTabNavigator(
  {
    Journal: JournalScreen,
    FoodSearch: FoodSearchScreen,
    Barcode: BarcodeScreen,
    Progress: ProgressScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Journal",
  }
);

const switchNavigator = createSwitchNavigator(
  {
    AuthResolution: AuthResolutionScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: "AuthResolution",
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
        <JournalProvider>
          <App
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </JournalProvider>
      </OnboardingProvider>
    </AuthProvider>
  );
};
