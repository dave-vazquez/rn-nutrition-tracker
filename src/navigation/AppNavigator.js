import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  FoodDetailsScreen,
  FoodSearchScreen,
  JournalScreen,
  ProgressScreen,
  SettingsScreen,
} from "../screens/application";
import { stackNavigatorConfig, tabNavigatorConfig } from "./config";

const FoodSearchNavigator = createStackNavigator({
  FoodSearch: FoodSearchScreen,
  FoodDetails: FoodDetailsScreen,
});

const JournalNavigator = createStackNavigator(
  { Journal: JournalScreen },
  stackNavigatorConfig
);

const TabNavigator = createBottomTabNavigator(
  {
    Journal: JournalNavigator,
    Progress: ProgressScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Journal",
    ...tabNavigatorConfig,
  }
);

const AppNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
      navigationOptions: { headerShown: false },
    },
    FoodSearch: {
      screen: FoodSearchNavigator,
      navigationOptions: { headerShown: false },
    },
  },
  {
    initialRouteName: "Tabs",
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
    },
  }
);

export default AppNavigator;
