import { Colors } from "_global_styles";
import { useDebouncedSearch } from "_hooks";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
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
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.green.light.s4}
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
  headerTintColor: Colors.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.green.light.s4,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.wheat,
  },
  background: {
    height: 120,
    backgroundColor: Colors.green.light.s4,
    ...StyleSheet.absoluteFill,
  },
});

FoodSearchScreen.whyDidYouRender = true;

export default FoodSearchScreen;

// useEffect(() => {
//   if (debouncedKeyword) searchFoodDatabase(debouncedKeyword);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [debouncedKeyword]);
