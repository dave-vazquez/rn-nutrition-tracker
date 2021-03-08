import { Layout } from "_global_styles";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ results, viewDetails, fetchNextResults }) => {
  return (
    <FlatList
      data={results}
      onEndReachedThreshold={0.5}
      onEndReached={fetchNextResults}
      contentContainerStyle={s.container}
      keyboardShouldPersistTaps="handled"
      keyExtractor={(item, index) => item.food.foodId + index}
      renderItem={({ item }) => (
        <SearchResultItem item={item.food} onPress={viewDetails} />
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
  viewDetails: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SearchResults.whyDidYouRender = true;

export default withNavigation(memo(SearchResults));
