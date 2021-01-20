import { Provider as AuthProvider } from "_contexts/AuthContext";
import { Provider as OnboardingProvider } from "_contexts/OnboardingContext";
import React from "react";
import { render } from "@testing-library/react-native";
import AuthScreen from "../AuthScreen";

const navigation = {
  navigate: jest.fn(),
  isFocused: true,
  getParam: jest.fn(),
};

jest.mock("react-navigation", () => ({
  NavigationEvents: "mockNavigationEvents",
  withNavigation: (component) => component,
}));

describe("<AuthScreen />", () => {
  const tree = render(
    <AuthProvider>
      <OnboardingProvider>
        <AuthScreen navigation={navigation} />
      </OnboardingProvider>
    </AuthProvider>
  ).toJSON();

  it('renders correctly with "signin" param', () => {
    navigation.getParam.mockImplementation(() => ({
      authType: "signin",
    }));
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with "signup" param', () => {
    navigation.getParam.mockImplementation(() => ({
      authType: "signup",
    }));
    expect(tree).toMatchSnapshot();
  });
});
