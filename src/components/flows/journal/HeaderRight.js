import g from "_globalstyles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const HeaderRight = ({ color = g.color.white, text, iconType, iconName }) => {
  return (
    <View style={s.container}>
      {text && <Text style={s.text}>{text}</Text>}
      <Icon type={iconType} name={iconName} color={color} size={25} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 11,
  },
  text: {
    fontSize: 18,
    fontFamily: "Lato_Light",
    color: g.color.white,
    marginRight: 15,
  },
});

export default HeaderRight;