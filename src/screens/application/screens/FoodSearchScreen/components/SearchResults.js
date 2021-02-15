import { Colors } from "_global_styles";
import React, { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";

const SearchResults = ({ results, viewDetails }) => {
  return (
    <FlatList
      data={results}
      contentContainerStyle={s.results}
      keyboardShouldPersistTaps="handled"
      keyExtractor={(item, index) => item.food.foodId + index}
      renderItem={({ item }) => (
        <ListItemResult item={item} onPress={viewDetails} />
      )}
    />
  );
};

const ListItemResult = ({ item, onPress }) => {
  return (
    <ListItem onPress={() => onPress(item.food)} bottomDivider>
      <Avatar
        source={
          item.food.image
            ? { uri: item.food.image }
            : require("_assets/images/food_image_placeholder.png")
        }
      />
      <ListItem.Content>
        <ListItem.Title style={s.title}>{item.food.label}</ListItem.Title>
        <ListItem.Subtitle style={s.subTitle}>
          {item.food.brand}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron size={30} color={Colors.grey.s5} />
    </ListItem>
  );
};

const s = StyleSheet.create({
  results: {
    borderRadius: 5,
    marginHorizontal: 15,
    overflow: "hidden",
  },
  title: {
    width: "100%",
    fontFamily: "Lato_Regular",
  },
  subTitle: {
    fontFamily: "Lato_Italic",
    color: Colors.blue.s2,
  },
});

SearchResults.whyDidYouRender = true;

export default withNavigation(memo(SearchResults));
