import { Colors, Typography } from "_global_styles";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const placeholder = require("_assets/images/food_image_placeholder.png");

const SearchResultItem = memo(
  ({ item, onPress }) => {
    const [source, setSource] = useState(
      item.image ? { uri: item.image } : placeholder
    );

    const {
      label,
      brand,
      defaultSelection: { calories_kcal },
    } = item;

    return (
      <ListItem onPress={() => onPress(item)} bottomDivider>
        <Avatar
          source={source}
          imageProps={{ onError: () => setSource(() => placeholder) }}
        />
        <ListItem.Content>
          <ListItem.Title style={s.label}>{label}</ListItem.Title>
          <ListItem.Title style={s.brand}>{brand}</ListItem.Title>
          <ListItem.Title
            style={s.label}
          >{`${calories_kcal} cals · 100 g`}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={30} color={Colors.grey.s5} />
      </ListItem>
    );
  },
  (prevProps, nextProps) => prevProps.item.foodId === nextProps.item.foodId
);

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
    fontFamily: Typography.font.lato.regular,
  },
});

export default SearchResultItem;
