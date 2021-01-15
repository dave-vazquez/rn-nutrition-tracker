import { SearchBar, SearchResults } from "_components/flows/foodsearch";
import g from "_globalstyles";
import { useDebouncedSearch } from "_hooks";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { withNavigationFocus } from "react-navigation";

const FoodSearchScreen = ({ isFocused }) => {
  const [keyword, setKeyword] = useState("");

  const [results, searchStatus, resetSearch] = useDebouncedSearch(
    keyword,
    1000
  );

  useEffect(() => {
    if (!keyword) resetSearch();
  }, [keyword, resetSearch]);

  return (
    <SafeAreaView style={s.container}>
      {isFocused && (
        <StatusBar
          barStyle="light-content"
          backgroundColor={g.color.green_light_4}
        />
      )}
      <View style={s.background} />
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        searchStatus={searchStatus}
      />
      <SearchResults results={results} />
    </SafeAreaView>
  );
};

FoodSearchScreen.navigationOptions = {
  headerTitle: "Food Search",
  headerTitleAlign: "left",
  headerTintColor: g.color.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerStyle: {
    elevation: 0,
    backgroundColor: g.color.green_light_4,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: g.color.wheat,
  },
  background: {
    height: 120,
    backgroundColor: g.color.green_light_4,
    ...StyleSheet.absoluteFill,
  },
});

export default withNavigationFocus(FoodSearchScreen);

// useEffect(() => {
//   if (debouncedKeyword) searchFoodDatabase(debouncedKeyword);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [debouncedKeyword]);
