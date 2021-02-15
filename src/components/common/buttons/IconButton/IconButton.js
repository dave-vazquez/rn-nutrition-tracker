import { Colors } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

const TouchableComponent = Platform.select({
  android: TouchableNativeFeedback,
  default: TouchableOpacity,
});

const background =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback.Ripple(Colors.white, true)
    : undefined;

const IconButton = ({ onPress, icon }) => {
  return (
    <TouchableComponent
      onPress={onPress}
      delayPressIn={0}
      activeOpacity={0.3}
      background={background}
    >
      <Icon
        raised
        reverse
        name={icon.name}
        type={icon.type}
        color={icon.color}
      />
    </TouchableComponent>
  );
};

IconButton.proptypes = {
  onPress: PropTypes.func,
  icon: PropTypes.object,
};

// const s = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     width: "100%",
//   },
// });

export default IconButton;
