import g from "_globalstyles";
import dayjs from "dayjs";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const DateTimePicker = ({ date, setDate }) => {
  const [show, setShow] = useState(false);
  const [displayDate, setDisplayDate] = useState("mm/dd/yyyy");

  const onDateChange = (selectedDate) => {
    const currentDate = selectedDate.nativeEvent.timestamp || date;
    setDisplayDate(dayjs(date).format("MM/DD/YYYY"));
    setDate(currentDate);
    setShow(false);
  };

  return (
    <View style={s.container}>
      <Text style={s.label}>Date of Birth</Text>
      <Text style={[s.label, s.display]} onPress={() => setShow(true)}>
        {displayDate}
      </Text>
      {show && (
        <RNDateTimePicker
          value={dayjs(date).unix()}
          mode="date"
          display="spinner"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "Lato_Regular",
    fontSize: 20,
  },
  display: {
    color: g.color.blue,
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: g.color.blue,
  },
});

export default DateTimePicker;
