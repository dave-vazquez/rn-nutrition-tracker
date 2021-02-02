import g from "_globalstyles";
import React, { memo } from "react";
import { TextInput as RNTextInput, StyleSheet, Text, View } from "react-native";

const TextInput = ({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  containerStyle,
  labelStyle,
  editable = true,
  ...otherProps
}) => {
  return (
    <View style={[s.container, containerStyle]}>
      <Text style={[s.label, labelStyle]}>{label}</Text>
      <RNTextInput
        editable={editable}
        value={value}
        style={s.input}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8,
    // borderWidth: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: "Lato_Regular",
    fontWeight: "normal",
    color: g.color.blue_3,
    // borderWidth: 1,
    // borderColor: "green",
  },
  input: {
    fontFamily: "Lato_Regular",
    color: g.color.grey_9,
    fontSize: 16,
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderBottomColor: g.color.blue_2,
    // borderWidth: 1,
    // borderColor: "blue",
  },
});

TextInput.whyDidYouRender = true;

export default memo(TextInput);
