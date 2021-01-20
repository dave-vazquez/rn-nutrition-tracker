import { Provider as OnboardingProvider } from "_contexts/OnboardingContext";
import React from "react";
import { render } from "@testing-library/react-native";
import WeightGoalScreen from "../WeightGoalScreen";

const navigation = {
  navigate: jest.fn(),
  isFocused: () => true,
};

jest.mock("react-navigation", () => ({
  NavigationEvents: "mockNavigationEvents",
  withNavigation: (component) => component,
}));

describe("<WeightGoalScreen />", () => {
  const tree = render(
    <OnboardingProvider>
      <WeightGoalScreen navigation={navigation} />
    </OnboardingProvider>
  ).toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
