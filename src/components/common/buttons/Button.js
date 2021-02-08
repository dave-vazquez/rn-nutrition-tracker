import PropTypes from "prop-types";
import React from "react";
import { Button as RNEButton } from "react-native-elements";
import { buttonStyles } from "./styles";

const Button = ({
  width,
  variant,
  selected,
  titleStyle,
  buttonStyle,
  containerStyle,
  ...RNEButtonProps
}) => {
  //
  const styles = selected ? buttonStyles[variant] : buttonStyles.deselected;

  return (
    <RNEButton
      titleStyle={[styles.titleStyle, titleStyle]}
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      containerStyle={[styles.containerStyle, containerStyle, { width }]}
      {...RNEButtonProps}
    />
  );
};

Button.defaultProps = {
  variant: "base",
  selected: true,
};

Button.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(["base", "white", "selected"]),
  selected: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleProps: PropTypes.object,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(["solid", "clear", "outline"]),
  loading: PropTypes.bool,
  loadingStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadingProps: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.func,
  ]),
  iconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.elementType,
  ViewComponent: PropTypes.elementType,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  raised: PropTypes.bool,
  theme: PropTypes.object,
};

export default Button;
