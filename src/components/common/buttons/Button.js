import { Colors } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import {
  ActivityIndicator,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import ButtonStyles from "./styles";

const TouchableComponent = Platform.select({
  android: TouchableNativeFeedback,
  default: TouchableOpacity,
});

const background =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback.Ripple(Colors.white, true)
    : undefined;

const Button = ({
  size,
  title,
  width,
  raised,
  variant,
  onPress,
  loading,
  selected,
  disabled,
  iconRight,
  titleStyles,
  buttonStyles,
  containerStyles,
}) => {
  const state =
    selected === undefined ? "default" : selected ? "selected" : "deselected";

  const s = ButtonStyles[variant][size][state];

  return (
    <View style={[s.container, containerStyles, raised && s.raised, { width }]}>
      <TouchableComponent
        onPress={onPress}
        delayPressIn={0}
        activeOpacity={0.3}
        disabled={disabled}
        background={background}
      >
        <View style={[s.button, buttonStyles]}>
          {loading && (
            <ActivityIndicator style={s.loading} size="small" color="white" />
          )}
          {!loading && <Text style={[s.title, titleStyles]}>{title}</Text>}
          {!loading && iconRight && (
            <Icon
              size={iconRight.size || 30}
              type={iconRight.type}
              name={iconRight.name}
              color={iconRight.color || Colors.white}
              style={s.iconContainer}
            />
          )}
        </View>
      </TouchableComponent>
    </View>
  );
};

Button.defaultProps = {
  size: "small",
  raised: true,
  loading: false,
  disabled: false,
  variant: "primary",
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  raised: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  iconRight: PropTypes.object,
  titleStyles: PropTypes.object,
  buttonStyles: PropTypes.object,
  containerStyles: PropTypes.object,
};

export default Button;
