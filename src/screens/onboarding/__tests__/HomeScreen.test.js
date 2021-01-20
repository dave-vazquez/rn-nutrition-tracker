import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";

const navigation = {
  navigate: jest.fn(),
  isFocused: () => true,
};

describe("<HomeScreen />", () => {
  const tree = render(<HomeScreen navigation={navigation} />).toJSON();

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
