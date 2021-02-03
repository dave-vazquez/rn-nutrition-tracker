import { colors } from "_global_styles";
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
    margin: 8,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontFamily: "Lato_Regular",
    fontWeight: "normal",
    color: colors.blue_3,
  },
  input: {
    fontFamily: "Lato_Regular",
    color: colors.grey_9,
    fontSize: 16,
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderBottomColor: colors.blue_2,
  },
});

TextInput.whyDidYouRender = true;

export default memo(TextInput);
