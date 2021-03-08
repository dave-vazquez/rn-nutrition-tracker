import { Card, DateTimeInput } from "_components/common";
import { IconButton } from "_components/common";
import { Colors } from "_global_styles";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePaginator = ({
  currentDate,
  updateCurrentDate,
  decrementDate,
  incrementDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const onDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || currentDate;
    setShowPicker(Platform.OS === "ios");
    updateCurrentDate(currentDate);
  };

  return (
    <Card containerStyle={s.container}>
      <IconButton
        raised={false}
        reverse={false}
        onPress={decrementDate}
        icon={{
          name: "chevron-left",
          type: "feather",
          color: Colors.grey.s8,
          size: 30,
        }}
      />
      <DateTimeInput
        formatType="mdy"
        value={currentDate}
        onTouch={() => setShowPicker(true)}
        containerStyle={{ flex: 0, borderBottomWidth: 0 }}
      />
      <IconButton
        raised={false}
        reverse={false}
        onPress={incrementDate}
        icon={{
          name: "chevron-right",
          type: "feather",
          color: Colors.grey.s8,
          size: 30,
        }}
      />
      {showPicker && (
        <DateTimePicker
          mode="date"
          value={currentDate}
          onChange={onDateChange}
        />
      )}
    </Card>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
  },
});

export default DatePaginator;
