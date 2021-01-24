import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  BarcodeScreen,
  FoodDetailsScreen,
  FoodSearchScreen,
  JournalScreen,
  ProgressScreen,
  SettingsScreen,
} from "../screens/application";
import { stackNavigatorConfig, tabNavigatorConfig } from "./config";

const FoodSearch = createStackNavigator(
  { FoodSearch: FoodSearchScreen },
  stackNavigatorConfig
);

const Journal = createStackNavigator(
  { Journal: JournalScreen },
  stackNavigatorConfig
);

const TabNavigator = createBottomTabNavigator(
  {
    Journal,
    FoodSearch,
    Barcode: BarcodeScreen,
    Progress: ProgressScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Journal",
    ...tabNavigatorConfig,
  }
);

const HomeNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
      navigationOptions: { headerShown: false },
    },
    FoodDetails: FoodDetailsScreen,
  },
  {
    initialRouteName: "Tabs",
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
    },
  }
);

export default HomeNavigator;
