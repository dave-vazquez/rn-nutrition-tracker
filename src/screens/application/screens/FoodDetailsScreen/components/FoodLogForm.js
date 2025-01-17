import {
  Button,
  Card,
  DateTimeInput,
  NumberInput,
  SelectionInput,
} from "_components/common";
import { MEAL_TYPES } from "_constants";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const JournalEntryForm = ({
  form,
  setForm,
  measures,
  onSubmitForm,
  createStatus,
}) => {
  const [dateMode, setDateMode] = useState("date");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatePickerWithMode = (currentMode) => {
    setShowDatePicker(true);
    setDateMode(currentMode);
  };

  const onDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || form.date;
    setShowDatePicker(Platform.OS === "ios");
    setForm((form) => ({ ...form, date: currentDate }));
  };

  return (
    <Card>
      <NumberInput
        label="Quantity"
        value={form.quantity}
        step={form.measure.label === "Gram" ? 5 : 1}
        onChange={(quantity) => {
          setForm((form) => ({ ...form, quantity }));
        }}
      />
      <View style={s.row}>
        <SelectionInput
          label="Measure"
          items={measures}
          value={form.measure}
          onSelect={(measure) =>
            setForm((form) => ({
              ...form,
              quantity: measure.label === "Gram" ? "100" : "1",
              measure,
            }))
          }
        />
        <SelectionInput
          label="Meal Type"
          items={MEAL_TYPES}
          value={form.mealType}
          onSelect={(mealType) => setForm((form) => ({ ...form, mealType }))}
        />
      </View>
      <View style={[s.row, { alignItems: "center" }]}>
        <DateTimeInput
          hideIcon
          label="Date"
          formatType="date"
          value={form.date}
          onTouch={() => showDatePickerWithMode("date")}
        />
        <DateTimeInput
          hideIcon
          label="Time"
          formatType="time"
          value={form.date}
          onTouch={() => showDatePickerWithMode("time")}
        />
        {showDatePicker && (
          <DateTimePicker
            mode={dateMode}
            value={form.date}
            is24Hour={false}
            minuteInterval={5}
            onChange={onDateChange}
          />
        )}
      </View>
      <Button
        loading={createStatus === "start"}
        title="Add to Journal"
        containerStyles={s.buttonContainer}
        onPress={onSubmitForm}
      />
    </Card>
  );
};

const s = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 0,
  },
});

JournalEntryForm.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  measures: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  createStatus: PropTypes.oneOf(["idle", "start", "error", "success"]),
};

JournalEntryForm.whyDidYouRender = true;

export default memo(JournalEntryForm);
