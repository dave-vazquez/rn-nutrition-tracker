import { createStackNavigator } from "react-navigation-stack";
import { AuthScreen } from "../screens/authentication";
import {
  ActivityLevelScreen,
  HomeScreen,
  UserInfoScreen,
  WeightGoalScreen,
} from "../screens/onboarding";

const AuthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    WeightGoal: WeightGoalScreen,
    ActivityLevel: ActivityLevelScreen,
    UserInfo: UserInfoScreen,
    AuthScreen: AuthScreen,
  },
  { initialRouteName: "Home" }
);

export default AuthNavigator;
