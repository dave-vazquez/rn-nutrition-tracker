import { colors } from "_globalstyles";
import React, { memo, useCallback, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const SelectionInput = ({ onSelect, items, containerStyle, label, value }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[s.container, containerStyle]}>
      <Text style={s.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={s.inputContainer}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={s.input}>{value.label}</Text>
        <Icon
          size={12}
          name="caretdown"
          type="ant-design"
          iconStyle={s.icon}
          color={colors.blue_2}
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

const SelectionItem = ({ item, selected, handlePress }) => {
  const labelFont = selected ? "Lato_Bold" : "Lato_Regular";
  const labelColor = selected ? colors.blue_2 : colors.grey_8;
  const iconColor = selected ? colors.blue_2 : "transparent";

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
  container: {
    flex: 1,
    margin: 8,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontFamily: "Lato_Regular",
    fontWeight: "normal",
    color: colors.blue_3,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.blue_2,
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: "Lato_Regular",
    color: colors.grey_9,
    fontSize: 16,
    paddingVertical: 10,
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000050",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  selection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.blue_2,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  selectionLabel: {
    color: colors.grey_9,
    fontSize: 16,
  },
});

SelectionModal.whyDidYouRender = true;
SelectionItem.whyDidYouRender = true;
SelectionInput.whyDidYouRender = true;

export default memo(SelectionInput);

/*
{
    key: 0,
    label: "Piece",
    measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
    qualifiers: [
        "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small"
    ]
}
*/
