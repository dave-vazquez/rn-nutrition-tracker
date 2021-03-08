import { Colors } from "_global_styles";
import { getFormattedDateTime } from "_utils/dayjs";
import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import InputStyles from "./styles";

const DateTimeInput = ({
  label,
  value,
  size,
  onTouch,
  hideIcon,
  formatType,
  containerStyle,
}) => {
  //
  const s = InputStyles.selection[size];

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <TouchableOpacity
        onPress={onTouch}
        activeOpacity={0.5}
        style={[s.touchable, { justifyContent: "flex-start" }]}
      >
        {!hideIcon && (
          <Icon
            size={20}
            type="font-awesome"
            name="calendar"
            color={Colors.grey.s8}
            containerStyle={s.leftIconContainer}
          />
        )}
        <Text style={s.input}>{getFormattedDateTime(value, formatType)}</Text>
      </TouchableOpacity>
    </View>
  );
};

DateTimeInput.defaultProps = {
  label: " ",
  formatType: "default",
  size: "small",
  hideIcon: false,
};

DateTimeInput.propTypes = {
  label: PropTypes.string,
  onTouch: PropTypes.func,
  hideIcon: PropTypes.bool,
  value: PropTypes.any.isRequired,
  formatType: PropTypes.oneOf(["default", "date", "time"]),
  size: PropTypes.oneOf(["small", "large"]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default DateTimeInput;
