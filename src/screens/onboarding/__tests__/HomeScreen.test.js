import React from "react";
import { render } from "@testing-library/react-native";
import LandingScreen from "../LandingScreen";

const navigation = {
  navigate: jest.fn(),
  isFocused: () => true,
};

describe("<LandingScreen />", () => {
  const tree = render(<LandingScreen navigation={navigation} />).toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
