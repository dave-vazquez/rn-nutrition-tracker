import g from "_globalstyles";
import React from "react";
import ReactNative, { StyleSheet, Text, View } from "react-native";

const TextInput = ({
  label = " ",
  value,
  onChangeText = () => { },
  type = "default",
  placeholder = "",
  width,
  editable = true,
}) => {
  return (
    <View style={{ ...s.container, width }}>
      <Text style={s.label}>{label}</Text>
      <ReactNative.TextInput
        style={{ ...s.input, width }}
        value={value}
        keyboardType={type}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        editable={editable}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    alignSelf: "stretch",
  },
  label: {
    fontFamily: "Lato_Regular",
    fontSize: 20,
  },
  input: {
    alignSelf: "stretch",
    marginTop: 10,
    paddingBottom: 5,
    margin: 0,
    padding: 0,
    height: 30,
    fontFamily: "Lato_Regular",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: g.color.blue,
  },
});

export default TextInput;
