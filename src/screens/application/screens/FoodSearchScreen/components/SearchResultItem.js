import { Colors, Typography } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const SearchResultItem = ({ item, onPress }) => {
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
        <ListItem.Title style={s.label}>{item.food.label}</ListItem.Title>
        <ListItem.Subtitle style={s.brand}>{item.food.brand}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron size={30} color={Colors.grey.s5} />
    </ListItem>
  );
};

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

const s = StyleSheet.create({
  label: {
    fontFamily: Typography.font.lato.regular,
  },
  brand: {
    color: Colors.blue.s2,
    fontFamily: Typography.font.lato.italic,
  },
});

export default SearchResultItem;
