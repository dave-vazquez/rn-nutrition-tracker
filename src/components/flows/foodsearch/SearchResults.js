import g from "_globalstyles";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";

const SearchResults = ({ results, navigation: { navigate } }) => {
  const handlePress = (foodData) => {
    navigate("FoodDetails", { foodData });
  };

  return (
    <FlatList
      contentContainerStyle={s.results}
      data={results}
      keyExtractor={(item, index) => item.food.id + index}
      renderItem={({ item }) => renderListItem(item, handlePress)}
    />
  );
};

const renderListItem = (item, handlePress) => {
  return (
    <ListItem onPress={() => handlePress(item.food)} bottomDivider>
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
      <ListItem.Chevron size={30} color={g.color.grey_5} />
    </ListItem>
  );
};

const s = StyleSheet.create({
  results: {
    borderRadius: 5,
    overflow: "hidden",
  },
  title: {
    width: "100%",
    fontFamily: "Lato_Regular",
  },
  subTitle: {
    fontFamily: "Lato_Italic",
    color: g.color.blue,
  },
});

export default withNavigation(SearchResults);
