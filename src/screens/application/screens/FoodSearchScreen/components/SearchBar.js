import { Colors } from "_global_styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar as RNESearchBar } from "react-native-elements";

const SearchBar = ({ value, onChangeText, searchStatus }) => {
  //
  const searchIcon = {
    size: 30,
    name: "search",
    color: Colors.grey.s6,
    type: "material-icons",
  };

  const loadingProps = {
    color: Colors.grey.s6,
    animating: value !== "" && !searchStatus.complete,
  };

  return (
    <View>
      <RNESearchBar
        lightTheme
        showLoading
        value={value}
        searchIcon={searchIcon}
        loadingProps={loadingProps}
        onChangeText={onChangeText}
        containerStyle={s.searchContainer}
        inputContainerStyle={s.inputContainer}
        placeholder="Search by name, brand, etc..."
      />
      {/* eslint-disable-next-line prettier/prettier */}
      {searchStatus.error && <Text style={s.message}>Oops! Something went wrong :/</Text>}
      {searchStatus.empty && <Text style={s.message}>No results!</Text>}
    </View>
  );
};

const s = StyleSheet.create({
  searchContainer: {
    paddingTop: 0,
    paddingHorizontal: 15,
    borderTopColor: "transparent",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
  },
  message: {
    fontSize: 18,
    marginTop: 14,
    textAlign: "center",
    fontWeight: "normal",
    color: Colors.white,
    fontFamily: "Lato_Regular",
  },
  inputContainer: {
    backgroundColor: Colors.white,
  },
});

export default SearchBar;
