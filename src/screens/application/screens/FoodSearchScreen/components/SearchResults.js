import { Colors, Layout, Typography } from "_global_styles";
import React, { memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";

const SearchResults = ({ results, viewDetails }) => {
  return (
    <FlatList
      data={results}
      contentContainerStyle={s.container}
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
  container: {
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: Layout.spacing.md,
  },
  title: {
    fontFamily: Typography.font.lato.regular,
  },
  subTitle: {
    color: Colors.blue.s2,
    fontFamily: Typography.font.lato.italic,
  },
});

SearchResults.whyDidYouRender = true;

export default withNavigation(memo(SearchResults));
