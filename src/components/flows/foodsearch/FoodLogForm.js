import {
  Card,
  DateTime,
  SelectionInput,
  TextInput,
  _PickerInput,
} from "_components/common";
import { MEAL_TYPES } from "_constants";
import g from "_globalstyles";
import { maskQuantity } from "_utils";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const FoodLogForm = ({
  form,
  setForm,
  measures,
  mealTypes,
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

  const setMaskedQuantity = () => {
    setForm((form) => ({ ...form, quantity: maskQuantity(form.quantity) }));
  };

  return (
    <Card>
      <View style={s.row}>
        <TextInput
          label="Quantity"
          value={form.quantity}
          keyboardType="numeric"
          containerStyle={{ flex: 1 }}
          onEndEditing={setMaskedQuantity}
          onChangeText={(quantity) => {
            setForm((form) => ({ ...form, quantity }));
          }}
        />
        <SelectionInput
          label="Measure"
          items={measures}
          value={form.measure}
          containerStyle={{ flex: 1 }}
          onSelect={(measure) =>
            setForm((form) => ({ ...form, measure, quantity: "1" }))
          }
        />
      </View>
      <View style={s.row}>
        <DateTime.Input
          type="date"
          label="Date"
          value={form.date}
          containerStyle={{ flex: 1 }}
          onTouch={() => showDatePickerWithMode("date")}
        />
        <DateTime.Input
          type="time"
          label="Time"
          value={form.date}
          containerStyle={{ flex: 1 }}
          onTouch={() => showDatePickerWithMode("time")}
        />
        <DateTime.Picker
          mode={dateMode}
          value={form.date}
          show={showDatePicker}
          onChange={onDateChange}
        />
      </View>
      <View style={[s.row, { alignItems: "flex-end" }]}>
        <SelectionInput
          label="Meal Type"
          items={mealTypes}
          value={form.mealType}
          containerStyle={{ flex: 1 }}
          onSelect={(mealType) => setForm((form) => ({ ...form, mealType }))}
        />
        <Button
          raised
          loading={createStatus.start}
          title="Add to Journal"
          buttonStyle={s.button}
          containerStyle={s.buttonContainer}
          onPress={onSubmitForm}
        />
      </View>
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
    marginLeft: 8,
    marginRight: 9,
    marginBottom: 10,
  },
  button: {
    backgroundColor: g.color.green_light_4,
  },
});

export default FoodLogForm;
