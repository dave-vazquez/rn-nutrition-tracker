import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { radioButtonStyles as s } from "./styles";

const Button = ({ style, selected, setSelected, label, subLabel }) => {
  return (
    <TouchableOpacity
      style={s.touchable}
      onPress={setSelected}
      activeOpacity={0.8}
    >
      <View style={[s.radioBorder, style]}>
        {selected && <View style={s.radioFill} />}
      </View>
      <View>
        <Text style={s.label}>{label}</Text>
        <Text style={s.subLabel}>{subLabel}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Group = ({ children }) => {
  return <View style={s.container}>{children}</View>;
};

const Radio = {
  Button,
  Group,
};

export default Radio;
