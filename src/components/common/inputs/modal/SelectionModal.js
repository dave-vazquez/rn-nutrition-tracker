import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { FlatList, Modal, TouchableOpacity, View } from "react-native";
import SelectionItem, { itemProp } from "./SelectionItem";
import SelectionModalStyles from "./styles";

const s = SelectionModalStyles.modal;

const SelectionModal = ({
  items,
  value,
  onSelect,
  modalVisible,
  setModalVisible,
}) => {
  const handlePress = useCallback(
    (key) => {
      onSelect(items[key]);
      setModalVisible((modalVisible) => !modalVisible);
    },
    [items, onSelect, setModalVisible]
  );

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="fade"
      hardwareAccelerated={true}
      statusBarTranslucent={true}
    >
      <TouchableOpacity
        style={s.overlay}
        activeOpacity={1}
        onPress={() => setModalVisible((modalVisible) => !modalVisible)}
      >
        <View style={{ maxHeight: 400, width: 350 }}>
          <FlatList
            style={s.list}
            data={items}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
              <SelectionItem
                key={item.key}
                item={item}
                handlePress={handlePress}
                selected={value.key === item.key}
              />
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

SelectionModal.propTypes = {
  value: itemProp.isRequired,
  onSelect: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(itemProp).isRequired,
};

export default SelectionModal;
