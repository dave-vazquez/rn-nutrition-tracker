import { Provider as OnboardingProvider } from "_contexts/OnboardingContext";
import React from "react";
import { render } from "@testing-library/react-native";
import ActivityLevelScreen from "../ActivityLevelScreen";

const navigation = {
  navigate: jest.fn(),
  isFocused: true,
};

describe("<ActivityLevelScreen />", () => {
  const tree = render(
    <OnboardingProvider>
      <ActivityLevelScreen navigation={navigation} />
    </OnboardingProvider>
  ).toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
