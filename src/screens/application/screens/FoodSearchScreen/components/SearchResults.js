import { Layout } from "_global_styles";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ results, viewDetails }) => {
  return (
    <FlatList
      data={results}
      contentContainerStyle={s.container}
      keyboardShouldPersistTaps="handled"
      keyExtractor={(item, index) => item.food.foodId + index}
      renderItem={({ item }) => (
        <SearchResultItem item={item} onPress={viewDetails} />
      )}
    />
  );
};

const s = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: Layout.spacing.md,
  },
});

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewDetails: PropTypes.func.isRequired,
};

SearchResults.whyDidYouRender = true;

export default withNavigation(memo(SearchResults));
