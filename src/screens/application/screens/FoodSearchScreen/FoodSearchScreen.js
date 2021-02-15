import { Colors, Layout } from "_global_styles";
import { useDebouncedSearch } from "_hooks";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { HeaderBottom } from "../../components";
import { SearchBar, SearchResults } from "./components";

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
    <SafeAreaView style={Layout.container.application}>
      {isFocused() && (
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.green.light.s4}
        />
      )}
      <HeaderBottom color={Colors.green.light.s4} />
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
  headerTintColor: Colors.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.green.light.s4,
  },
};

FoodSearchScreen.whyDidYouRender = true;

export default FoodSearchScreen;

// useEffect(() => {
//   if (debouncedKeyword) searchFoodDatabase(debouncedKeyword);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [debouncedKeyword]);
