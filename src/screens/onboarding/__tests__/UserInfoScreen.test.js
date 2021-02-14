import { Provider as OnboardingProvider } from "_contexts/OnboardingContext";
import React from "react";
import { render } from "@testing-library/react-native";
import UserInfoScreen from "../UserInfoScreen/UserInfoScreen";

const navigation = {
  navigate: jest.fn(),
  isFocused: () => true,
};

describe("<UserInfoScreen />", () => {
  const tree = render(
    <OnboardingProvider>
      <UserInfoScreen navigation={navigation} />
    </OnboardingProvider>
  ).toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
