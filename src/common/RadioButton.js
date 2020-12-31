import g from "/global-styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = ({ style, selected, setSelected, label, subLabel }) => {
  return (
    <TouchableOpacity
      style={s.touchable}
      onPress={setSelected}
      activeOpacity={0.8}
    >
      <View style={[s.radioBorder, style]}>
        {selected && <View style={s.radioFill} />}
      </View>
      <View style={s.labelContainer}>
        <Text style={s.label}>{label}</Text>
        <Text style={s.subLabel}>{subLabel}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  radioBorder: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginLeft: 10,
    borderColor: g.color.grey_8,
    alignItems: "center",
    justifyContent: "center",
  },
  radioFill: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: g.color.grey_8,
  },
  // labelContainer: {

  // },
  label: {
    fontSize: 22,
    marginTop: -1,
    marginLeft: 10,
    fontFamily: "Lato_Regular",
  },
  subLabel: {
    marginTop: 5,
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Lato_Light",
  },
});

export default RadioButton;
