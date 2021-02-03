import { TextInputs } from "_global_styles";
import React, { memo } from "react";
import { TextInput as RNTextInput, Text, View } from "react-native";

const TextInput = ({
  label,
  value,
  labelStyle,
  onChangeText,
  containerStyle,
  editable = true,
  keyboardType = "default",
  ...otherProps
}) => {
  return (
    <View style={[s.container, containerStyle]}>
      <Text style={[s.label, labelStyle]}>{label}</Text>
      <RNTextInput
        value={value}
        editable={editable}
        style={s.input}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  );
};

const s = TextInputs.createStyles();

TextInput.whyDidYouRender = true;

export default memo(TextInput);
