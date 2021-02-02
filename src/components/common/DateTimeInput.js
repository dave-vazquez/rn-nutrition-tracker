import { formatTime, toRelativeDate } from "_utils/dayjs";
import React from "react";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextInput from "./TextInput";

const Input = ({ label, containerStyle, value, onTouch, type }) => {
  return (
    <TouchableOpacity
      onPress={onTouch}
      activeOpacity={1}
      style={[{ flex: 1 }, containerStyle]}
    >
      <TextInput
        label={label}
        value={formatValue(value, type)}
        editable={false}
      />
    </TouchableOpacity>
  );
};

const Picker = ({ show, value, mode, onChange }) => {
  if (!show) return null;

  return (
    <DateTimePicker
      mode={mode}
      value={value}
      is24Hour={false}
      minuteInterval={5}
      onChange={onChange}
    />
  );
};

const formatValue = (value, type) => {
  return type === "date"
    ? toRelativeDate(value)
    : type === "time"
      ? formatTime(value)
      : value;
};

const DateTime = {
  Input,
  Picker,
};

export default DateTime;
