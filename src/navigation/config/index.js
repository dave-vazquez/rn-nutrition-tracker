import { colors } from "_global_styles";
import React from "react";
import { Icon } from "react-native-elements";

export const stackNavigatorConfig = {
  headerMode: "float",
  gestureEnabled: "false",
};

export const tabNavigatorConfig = {
  tabBarOptions: { showLabel: false },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      let type, name, color;
      const routeName = navigation.state.routeName;
      switch (routeName) {
        case "Journal": {
          type = "material-community";
          name = "notebook";
          color = focused ? colors.blue_2 : colors.grey_5;
          break;
        }
        case "FoodSearch": {
          type = "material-icons";
          name = "search";
          color = focused ? colors.green_light_4 : colors.grey_5;
          break;
        }
        case "Barcode": {
          type = "material-community";
          name = "barcode-scan";
          color = focused ? colors.grey_8 : colors.grey_5;
          break;
        }
        case "Progress": {
          type = "material-community";
          name = "chart-bar";
          color = focused ? colors.grey_8 : colors.grey_5;
          break;
        }
        case "Settings": {
          type = "font-awesome";
          name = "gear";
          color = focused ? colors.blue_2 : colors.grey_5;
          break;
        }
        default:
          break;
      }

      return <Icon type={type} name={name} color={color} size={30} />;
    },
  }),
};
