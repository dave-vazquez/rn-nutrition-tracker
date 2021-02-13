import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import SelectionModal from "./modal/SelectionModal";
import InputStyles from "./styles";

const SelectionInput = ({
  size,
  label,
  value,
  items,
  onSelect,
  containerStyle,
}) => {
  const s = InputStyles.selection[size];

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={s.touchable}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={s.input}>{value.label}</Text>
        <Icon size={12} name="caretdown" type="ant-design" iconStyle={s.icon} />
      </TouchableOpacity>
      <SelectionModal
        items={items}
        value={value}
        onSelect={onSelect}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

SelectionInput.defaultProps = {
  label: " ",
  size: "small",
};

SelectionInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.oneOf(["small", "large"]),
};

export default memo(SelectionInput);
