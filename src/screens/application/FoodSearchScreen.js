import { SearchBar, SearchResults } from "_components/flows/foodsearch";
import { colors } from "_global_styles";
import { useDebouncedSearch } from "_hooks";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const FoodSearchScreen = ({ navigation: { navigate, isFocused } }) => {
  //
  const [keyword, setKeyword] = useState("bread");

  const [results, searchStatus, resetSearch] = useDebouncedSearch(
    keyword,
    1000
  );

  const viewDetails = useCallback(
    (foodData) => navigate("FoodDetails", { foodData }),
    [navigate]
  );

  useEffect(() => {
    if (!keyword) resetSearch();
  }, [keyword, resetSearch]);

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.green_light_4}
        />
      )}
      <View style={s.background} />
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        searchStatus={searchStatus}
      />
      <SearchResults results={results} viewDetails={viewDetails} />
    </SafeAreaView>
  );
};

FoodSearchScreen.navigationOptions = {
  headerTitle: "Food Search",
  headerTitleAlign: "left",
  headerTintColor: colors.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.green_light_4,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.wheat,
  },
  background: {
    height: 120,
    backgroundColor: colors.green_light_4,
    ...StyleSheet.absoluteFill,
  },
});

FoodSearchScreen.whyDidYouRender = true;

export default FoodSearchScreen;

// useEffect(() => {
//   if (debouncedKeyword) searchFoodDatabase(debouncedKeyword);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [debouncedKeyword]);
