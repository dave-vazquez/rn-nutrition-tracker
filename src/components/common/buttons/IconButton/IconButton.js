import { Colors } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import {
  Platform,
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

const IconButton = ({ onPress, icon, raised, reverse, containerStyle }) => {
  return (
    <TouchableComponent
      onPress={onPress}
      delayPressIn={0}
      activeOpacity={0.3}
      background={background}
    >
      <View style={containerStyle}>
        <Icon
          raised={raised}
          reverse={reverse}
          name={icon.name}
          type={icon.type}
          color={icon.color}
          size={icon.size || 25}
        />
      </View>
    </TouchableComponent>
  );
};

IconButton.defaultProps = {
  raised: true,
  reverse: true,
};

IconButton.proptypes = {
  raised: PropTypes.bool,
  reverse: PropTypes.bool,
  containerStyle: PropTypes.object,
  onPress: PropTypes.func,
  icon: PropTypes.object.isRequired,
};

export default IconButton;
