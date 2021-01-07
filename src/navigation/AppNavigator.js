import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  BarcodeScreen,
  FoodSearchScreen,
  JournalScreen,
  ProgressScreen,
  SettingsScreen,
} from "../screens/application";

const AppNavigator = createBottomTabNavigator(
  {
    Journal: createStackNavigator({
      Journal: JournalScreen,
    }),
    FoodSearch: createStackNavigator({
      FoodSearch: FoodSearchScreen,
    }),
    Barcode: BarcodeScreen,
    Progress: ProgressScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Journal",
  }
);

export default AppNavigator;
