import { AuthScreen } from "_screens/authentication";
import {
  ActivityLevelScreen,
  HomeScreen,
  UserInfoScreen,
  WeightGoalScreen,
} from "_screens/onboarding";
import { createStackNavigator } from "react-navigation-stack";

const AuthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    WeightGoal: WeightGoalScreen,
    ActivityLevel: ActivityLevelScreen,
    UserInfo: UserInfoScreen,
    AuthScreen: AuthScreen,
  },
  {
    initialRouteName: "Home",
    headerMode: "float",
    gestureEnabled: "false",
  }
);

export default AuthNavigator;
