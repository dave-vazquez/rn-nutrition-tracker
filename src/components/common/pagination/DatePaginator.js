import { Colors } from "_global_styles";
import dayjs, { deviceTimeZone } from "_utils/dayjs";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import IconButton from "../buttons/IconButton/IconButton";
import Card from "../containers/Card";
import DateTimeInput from "../inputs/DateTimeInput";

const DatePaginator = ({ currentDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (_, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    onDateChange(selectedDate || currentDate);
  };

  const paginatePrev = () => {
    // eslint-disable-next-line prettier/prettier
    const newDate = dayjs(currentDate).tz(deviceTimeZone).subtract(1, "d").toDate();
    onDateChange(newDate);
  };

  const paginateNext = () => {
    const newDate = dayjs(currentDate).tz(deviceTimeZone).add(1, "d").toDate();
    onDateChange(newDate);
  };

  return (
    <Card containerStyle={s.container}>
      <IconButton
        raised={false}
        reverse={false}
        onPress={paginatePrev}
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
        onPress={paginateNext}
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
          onChange={handleDateChange}
        />
      )}
    </Card>
  );
};

DatePaginator.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
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
