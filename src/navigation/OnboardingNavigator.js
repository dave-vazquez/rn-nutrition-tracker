import { AuthScreen } from "_screens/authentication";
import {
  ActivityLevelScreen,
  LandingScreen,
  UserInfoScreen,
  WeightGoalScreen,
} from "_screens/onboarding";
import { createStackNavigator } from "react-navigation-stack";

const OnboardingNavigator = createStackNavigator(
  {
    Landing: LandingScreen,
    WeightGoal: WeightGoalScreen,
    ActivityLevel: ActivityLevelScreen,
    UserInfo: UserInfoScreen,
    AuthScreen: AuthScreen,
  },
  {
    initialRouteName: "Landing",
    headerMode: "float",
    gestureEnabled: "false",
  }
);

export default OnboardingNavigator;

/*






*/
