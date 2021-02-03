import { Colors } from "_global_styles";
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
          color = focused ? Colors.blue.s2 : Colors.grey.s5;
          break;
        }
        case "FoodSearch": {
          type = "material-icons";
          name = "search";
          color = focused ? Colors.green.light.s4 : Colors.grey.s5;
          break;
        }
        case "Barcode": {
          type = "material-community";
          name = "barcode-scan";
          color = focused ? Colors.grey.s8 : Colors.grey.s5;
          break;
        }
        case "Progress": {
          type = "material-community";
          name = "chart-bar";
          color = focused ? Colors.grey.s8 : Colors.grey.s5;
          break;
        }
        case "Settings": {
          type = "font-awesome";
          name = "gear";
          color = focused ? Colors.blue.s8 : Colors.grey.s5;
          break;
        }
        default:
          break;
      }

      return <Icon type={type} name={name} color={color} size={30} />;
    },
  }),
};
