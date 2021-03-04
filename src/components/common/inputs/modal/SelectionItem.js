import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import SelectionModalStyles from "./styles";

const s = SelectionModalStyles.item;

const SelectionItem = ({ item, selected, handlePress }) => {
  const labelStyle = selected ? s.labelSelected : s.label;
  const iconStyles = selected ? s.iconSelected : s.icon;

  return (
    <TouchableOpacity
      key={item.key}
      activeOpacity={0.2}
      onPress={() => handlePress(item.key)}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={labelStyle}>{item.label}</ListItem.Title>
        </ListItem.Content>
        {selected && (
          <ListItem.Chevron
            type="ant-design"
            name="check"
            iconStyle={iconStyles}
          />
        )}
      </ListItem>
    </TouchableOpacity>
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
