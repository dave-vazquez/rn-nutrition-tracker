import { colors } from "_global_styles";
import isEqual from "lodash.isequal";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

const PickerInput = ({
  label,
  value,
  items,
  onValueChange,
  containerStyle,
}) => {
  //
  const itemWith = (newValue) =>
    items.filter((item) => isEqual(newValue, item.value))[0];

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <RNPickerSelect
        value={value}
        Icon={renderIcon}
        style={pickerStyles}
        items={items}
        useNativeAndroidPickerStyle={false}
        onValueChange={(newValue) => onValueChange(itemWith(newValue))}
      />
    </View>
  );
};

const renderIcon = () => (
  <Icon
    size={12}
    name="caretdown"
    type="ant-design"
    iconStyle={s.icon}
    color={colors.blue_2}
  />
);

const s = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    margin: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: "Lato_Regular",
    fontWeight: "normal",
    color: colors.blue_3,
  },
  icon: { marginBottom: 3 },
});

const pickerStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  inputIOS: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderColor: colors.blue_3,
    paddingRight: 30,
    fontFamily: "Lato_Regular",
    color: colors.grey_9,
    fontSize: 16,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  inputAndroid: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderColor: colors.blue_3,
    paddingRight: 30,
    fontFamily: "Lato_Regular",
    color: colors.grey_9,
    fontSize: 16,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  iconContainer: {
    height: "100%",
    justifyContent: "center",
  },
});

export default PickerInput;
