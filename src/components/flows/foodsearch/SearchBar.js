import g from "_globalstyles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar as RNESearchBar } from "react-native-elements";

const SearchBar = ({ value, onChangeText, onCancel, onClear, status }) => {
  return (
    <View>
      <RNESearchBar
        lightTheme
        showLoading
        value={value}
        onChangeText={onChangeText}
        onCancel={onCancel}
        onClear={onClear}
        containerStyle={s.searchContainer}
        inputContainerStyle={s.inputContainer}
        searchIcon={{
          type: "material-icons",
          name: "search",
          size: 30,
          color: g.color.grey_6,
        }}
        loadingProps={{
          animating: status.start,
          color: g.color.grey_6,
        }}
      />
      {status.error && (
        <Text style={s.message}>Oops! Something went wrong :/</Text>
      )}
      {status.empty && <Text style={s.message}>No results!</Text>}
    </View>
  );
};

const s = StyleSheet.create({
  searchContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingHorizontal: 0,
  },
  inputContainer: {
    backgroundColor: g.color.white,
  },
  message: {
    textAlign: "center",
    marginTop: 15,
    color: g.color.white,
    fontFamily: "Lato_Regular",
    fontWeight: "normal",
    fontSize: 16,
  },
});

export default SearchBar;
