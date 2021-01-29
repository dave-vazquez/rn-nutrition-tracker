import g from "_globalstyles";
import React, { useState } from "react";
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

const _SelectionInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (key) => {
    props.onSelect(props.items[key]);
    setModalVisible((visible) => !visible);
  };

  return (
    <View style={[s.container, props.containerStyle]}>
      <Text style={s.label}>{props.label}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={s.inputContainer}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={s.input}>{props.value.label}</Text>
        <Icon
          size={12}
          name="caretdown"
          type="ant-design"
          iconStyle={s.icon}
          color={g.color.blue_2}
        />
      </TouchableOpacity>
      <SelectionModal
        items={props.items}
        value={props.value}
        onSelect={props.onSelect}
        visible={modalVisible}
        setVisible={setModalVisible}
        handlePress={handlePress}
      />
    </View>
  );
};

const SelectionModal = ({ items, visible, setVisible, value, handlePress }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity
        style={s.overlay}
        activeOpacity={1}
        onPress={() => setVisible(!visible)}
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
  const labelColor = selected ? g.color.blue_2 : g.color.grey_8;

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
        {selected && (
          <Icon
            size={20}
            name="check"
            type="ant-design"
            color={g.color.blue_2}
            iconStyle={s.icon}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const s = StyleSheet.create({
  container: {
    margin: 8,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontFamily: "Lato_Regular",
    fontWeight: "normal",
    color: g.color.blue_3,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: g.color.blue_2,
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: "Lato_Regular",
    color: g.color.grey_9,
    fontSize: 16,
    paddingVertical: 10,
  },
  icon: { marginBottom: 3 },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000050",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: g.color.white,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  selection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: g.color.blue_2,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  selectionLabel: {
    color: g.color.grey_9,
    fontSize: 16,
  },
});

export default _SelectionInput;

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
