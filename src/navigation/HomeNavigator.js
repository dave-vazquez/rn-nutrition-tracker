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

const FoodSearchNavigator = createStackNavigator(
  { FoodSearch: FoodSearchScreen },
  stackNavigatorConfig
);

const JournalNavigator = createStackNavigator(
  { Journal: JournalScreen },
  stackNavigatorConfig
);

const TabNavigator = createBottomTabNavigator(
  {
    Journal: JournalNavigator,
    FoodSearch: FoodSearchNavigator,
    Barcode: BarcodeScreen,
    Progress: ProgressScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Journal",
    ...tabNavigatorConfig,
  }
);

const HomeNavigator = createStackNavigator({
  Tabs: {
    screen: TabNavigator,
    navigationOptions: { headerShown: false },
  },
  FoodDetails: FoodDetailsScreen,
});

export default HomeNavigator;
