import { Colors } from "_global_styles";
import { getFormattedDateTime } from "_utils/dayjs";
import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { inputStyles } from "./styles";

const DateTimeInput = ({
  label,
  value,
  variant,
  onTouch,
  hideIcon,
  formatType,
  containerStyle,
}) => {
  //
  const styles = inputStyles.types.selection[variant];

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {!hideIcon && (
          <Icon
            size={20}
            type="font-awesome"
            name="calendar"
            color={Colors.grey.s8}
            containerStyle={styles.leftIconContainer}
          />
        )}
        <TouchableOpacity
          onPress={onTouch}
          activeOpacity={0.5}
          style={styles.touchable}
        >
          <Text style={styles.mockInput}>
            {getFormattedDateTime(value, formatType)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

DateTimeInput.defaultProps = {
  label: " ",
  formatType: "default",
  variant: "base",
  hideIcon: false,
};

DateTimeInput.propTypes = {
  label: PropTypes.string,
  onTouch: PropTypes.func,
  hideIcon: PropTypes.bool,
  value: PropTypes.any.isRequired,
  formatType: PropTypes.oneOf(["default", "relative-date", "12-hour"]),
  variant: PropTypes.oneOf(["base", "large"]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default DateTimeInput;
