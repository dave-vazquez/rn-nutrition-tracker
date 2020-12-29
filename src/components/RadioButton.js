import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import g from "../style";
import Gutter from "./KeyboardGutter";

const RadioButton = ({ style, selected, setSelected, label }) => {
  return (
    <TouchableOpacity
      style={s.touchable}
      onPress={setSelected}
      activeOpacity={0.8}
    >
      <View style={[s.radioBorder, style]}>
        {selected && <View style={s.radioFill} />}
      </View>
      <Text style={s.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  radioBorder: {
    height: 22,
    width: 22,
    borderRadius: 12,
    borderWidth: 2,
    marginLeft: 10,
    borderColor: g.color.grey_8,
    alignItems: "center",
    justifyContent: "center",
  },
  radioFill: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: g.color.grey_8,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default RadioButton;
