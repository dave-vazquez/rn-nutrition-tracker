import { StyleSheet } from "react-native";

// Helper function for composing more
// interwoven or prop-dependent style-sheets
const composeStyles = (
  styles,
  {
    type = (styles) => styles,
    variant = (styles) => styles,
    size = (styles) => styles,
    state = (styles) => styles,
  }
) => {
  return StyleSheet.create(state(size(variant(type(styles)))));
};

export default composeStyles;
