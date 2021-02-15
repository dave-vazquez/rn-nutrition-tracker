import { Colors, Layout, Typography } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar as RNESearchBar } from "react-native-elements";

const SearchBar = ({ value, onChangeText, searchStatus }) => {
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
        searchIcon={{
          size: 30,
          name: "search",
          color: Colors.grey.s6,
          type: "material-icons",
        }}
        loadingProps={loadingProps}
        onChangeText={onChangeText}
        containerStyle={s.container}
        inputContainerStyle={s.input}
        placeholder="Search by name, brand, etc..."
      />
      {searchStatus.error && (
        <Text style={s.message}>Oops! Something went wrong :/</Text>
      )}
      {searchStatus.empty && <Text style={s.message}>No results!</Text>}
    </View>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  searchStatus: PropTypes.object.isRequired,
};

const s = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: Layout.spacing.md,
    borderTopColor: Colors.transparent,
    backgroundColor: Colors.transparent,
    borderBottomColor: Colors.transparent,
  },
  message: {
    fontSize: Typography.size.sm,
    marginTop: Layout.spacing.md,
    textAlign: "center",
    fontFamily: Typography.font.lato.regular,
    color: Colors.white,
  },
  input: {
    backgroundColor: Colors.white,
  },
});

export default SearchBar;
