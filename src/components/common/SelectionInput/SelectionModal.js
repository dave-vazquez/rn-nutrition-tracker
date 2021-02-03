import { Colors } from "_global_styles";
import React, { useCallback } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import SelectionItem from "./SelectionItem";

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
    >
      <TouchableOpacity
        style={s.overlay}
        activeOpacity={1}
        onPress={() => setModalVisible((modalVisible) => !modalVisible)}
      >
        <View style={{ maxHeight: 400, width: 350 }}>
          <ScrollView contentContainerStyle={s.scrollView}>
            {items.map((item, i) => (
              <SelectionItem
                key={i}
                item={item}
                handlePress={handlePress}
                selected={value.key === item.key}
              />
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const s = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000050",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SelectionModal;
