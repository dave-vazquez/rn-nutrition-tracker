import { SearchBar, SearchResults } from "_components/flows/foodsearch";
import g from "_globalstyles";
import { useDebouncedSearch } from "_hooks";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { NavigationEvents } from "react-navigation";

const FoodSearchScreen = ({ isFocused }) => {
  const [keyword, setKeyword] = useState("");

  const [results, status, reset] = useDebouncedSearch(keyword, 500);

  const resetSearch = () => {
    setKeyword("");
    reset();
  };

  return (
    <SafeAreaView style={s.container}>
      {isFocused && (
        <StatusBar
          backgroundColor={g.color.green_light_4}
          barStyle="light-content"
        />
      )}
      <NavigationEvents onWillBlur={resetSearch} />
      <View style={s.background} />
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        onCancel={resetSearch}
        onClear={resetSearch}
        status={status}
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
    paddingHorizontal: 10,
    backgroundColor: g.color.wheat,
  },
  background: {
    height: 120,
    backgroundColor: g.color.green_light_4,
    ...StyleSheet.absoluteFill,
  },
});

export default withNavigationFocus(FoodSearchScreen);
