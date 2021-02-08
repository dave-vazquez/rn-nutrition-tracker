import { getFormattedDateTime } from "_utils/dayjs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { textInputStyles } from "./styles";

const s = textInputStyles.selection;

const DateTimeInput = ({ label, containerStyle, value, onTouch, type }) => {
  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <TouchableOpacity
        onPress={onTouch}
        activeOpacity={0.5}
        style={s.touchable}
      >
        <Text style={s.mockInput}>{getFormattedDateTime(value, type)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimeInput;
