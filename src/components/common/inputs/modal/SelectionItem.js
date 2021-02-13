import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Icon } from "react-native-elements";
import SelectionModalStyles from "./styles";

const s = SelectionModalStyles.item;

const SelectionItem = ({ item, selected, handlePress }) => {
  const labelStyle = selected ? s.labelSelected : s.label;
  const iconStyles = selected ? s.iconSelected : s.icon;

  return (
    <TouchableWithoutFeedback
      key={item.key}
      activeOpacity={1}
      onPress={() => handlePress(item.key)}
    >
      <View style={s.container}>
        <Text style={labelStyle}>{item.label}</Text>
        <Icon size={20} name="check" type="ant-design" iconStyle={iconStyles} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const itemProp = PropTypes.shape({
  key: PropTypes.number,
  value: PropTypes.any,
  label: PropTypes.string,
});

SelectionItem.propTypes = {
  item: itemProp.isRequired,
  selected: PropTypes.bool.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default SelectionItem;
