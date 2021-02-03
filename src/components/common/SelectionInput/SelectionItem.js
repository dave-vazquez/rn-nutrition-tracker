import { Colors, Sizing, Typography } from "_global_styles";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Icon } from "react-native-elements";

const SelectionItem = ({ item, selected, handlePress }) => {
  const labelColor = selected ? Colors.blue.s2 : Colors.grey.s8;
  const iconColor = selected ? Colors.blue.s2 : Colors.transparent;
  const labelFont = selected
    ? Typography.font.lato.bold
    : Typography.font.lato.regular;

  return (
    <TouchableWithoutFeedback
      key={item.key}
      activeOpacity={1}
      onPress={() => handlePress(item.key)}
    >
      <View style={s.selection}>
        <Text
          style={[
            s.selectionLabel,
            { fontFamily: labelFont, color: labelColor },
          ]}
        >
          {item.label}
        </Text>
        <Icon
          size={20}
          name="check"
          type="ant-design"
          color={iconColor}
          iconStyle={{ marginBottom: 3 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const s = StyleSheet.create({
  selection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.blue.s2,
    borderBottomWidth: 1,
    paddingVertical: Sizing.layout.md,
  },
  selectionLabel: {
    color: Colors.grey.s9,
    fontSize: Typography.size.xs,
  },
});

export default SelectionItem;
