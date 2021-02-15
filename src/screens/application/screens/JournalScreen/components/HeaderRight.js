import { Colors, Layout, Typography } from "_global_styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const HeaderRight = ({ color = Colors.white, text, iconType, iconName }) => {
  return (
    <View style={s.container}>
      {text && <Text style={s.text}>{text}</Text>}
      <Icon type={iconType} name={iconName} color={color} size={25} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: Layout.spacing.sm,
  },
  text: {
    color: Colors.white,
    fontSize: Typography.size.sm,
    marginRight: Layout.spacing.md,
    fontFamily: Typography.font.lato.light,
  },
});

export default HeaderRight;
