import { Colors, Sizing, TextInputs } from "_global_styles";
import React, { memo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import SelectionModal from "./SelectionModal";

const SelectionInput = ({ onSelect, items, containerStyle, label, value }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={s.touchable}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={s.mockInput}>{value.label}</Text>
        <Icon
          size={12}
          name="caretdown"
          type="ant-design"
          iconStyle={s.icon}
          color={Colors.blue.s2}
        />
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

const s = TextInputs.createStyles((baseStyles) => ({
  mockInput: {
    ...baseStyles.input,
    paddingVertical: Sizing.layout.sm,
    borderBottomWidth: 0,
  },
  touchable: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.blue.s2,
  },
}));

SelectionInput.whyDidYouRender = true;

export default memo(SelectionInput);
