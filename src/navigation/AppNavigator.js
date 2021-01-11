/* eslint-disable react/display-name */
import g from "global-styles";
import React from "react";
import { Icon } from "react-native-elements";
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        let type, name, color;
        const routeName = navigation.state.routeName;
        switch (routeName) {
          case "Journal": {
            type = "material-community";
            name = "notebook";
            color = focused ? g.color.blue : g.color.grey_5;
            break;
          }
          case "FoodSearch": {
            type = "material-icons";
            name = "search";
            color = focused ? g.color.green_light_4 : g.color.grey_5;
            break;
          }
          case "Barcode": {
            type = "material-community";
            name = "barcode-scan";
            color = focused ? g.color.grey_8 : g.color.grey_5;
            break;
          }
          case "Progress": {
            type = "material-community";
            name = "chart-bar";
            color = focused ? g.color.grey_8 : g.color.grey_5;
            break;
          }
          case "Settings": {
            type = "font-awesome";
            name = "gear";
            color = focused ? g.color.blue : g.color.grey_5;
            break;
          }
          default:
            break;
        }

        return <Icon type={type} name={name} color={color} size={30} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default AppNavigator;
