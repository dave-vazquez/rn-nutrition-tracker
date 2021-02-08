/* eslint-disable react-native/no-unused-styles */
import { Colors, Layout, Typography } from "_global_styles";
import React, { memo, useCallback, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { textInputStyles } from "./styles";

const SelectionInput = ({ onSelect, items, containerStyle, label, value }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const s = textInputStyles.selection;

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={s.touchable}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={s.mockInput}>{value.label}</Text>
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
        style={s.modal.overlay}
        activeOpacity={1}
        onPress={() => setModalVisible((modalVisible) => !modalVisible)}
      >
        <View style={{ maxHeight: 400, width: 350 }}>
          <ScrollView contentContainerStyle={s.modal.scrollView}>
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

const SelectionItem = ({ item, selected, handlePress }) => {
  const labelStyle = selected ? s.item.labelSelected : s.item.label;
  const iconStyles = selected ? s.item.iconSelected : s.item.icon;

  return (
    <TouchableWithoutFeedback
      key={item.key}
      activeOpacity={1}
      onPress={() => handlePress(item.key)}
    >
      <View style={s.item.container}>
        <Text style={labelStyle}>{item.label}</Text>
        <Icon size={20} name="check" type="ant-design" iconStyle={iconStyles} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const s = {
  modal: StyleSheet.create({
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
      paddingHorizontal: Layout.spacing.sm,
    },
  }),
  item: StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 1,
      justifyContent: "space-between",
      borderBottomColor: Colors.blue.s2,
      paddingVertical: Layout.spacing.md,
    },
    label: {
      color: Colors.grey.s9,
      fontSize: Typography.size.xs,
      fontFamily: Typography.font.lato.regular,
    },
    labelSelected: {
      color: Colors.blue.s2,
      fontSize: Typography.size.xs,
      fontFamily: Typography.font.lato.bold,
    },
    icon: {
      marginBottom: 3,
      color: Colors.transparent,
    },
    iconSelected: {
      marginBottom: 3,
      color: Colors.blue.s2,
    },
  }),
};

SelectionInput.whyDidYouRender = true;

export default memo(SelectionInput);
