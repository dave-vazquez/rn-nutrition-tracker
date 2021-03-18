import { Card } from "_components/common";
import { Colors, Layout, Typography } from "_global_styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListItem } from "react-native-elements";

/*
{
            "id": 75,
            "user_id": 3,
            "food_id": "food_a3049hmbqj5wstaeeb3udaz6ua49",
            "food_name": "Bread",
            "measure_name": "Slice",
            "measure_uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
            "qualifier_uri": null,
            "brand_name": "Generic",
            "quantity": "2.00",
            "entry_date": "2021-03-08T05:00:00.000Z",
            "time_zone_name": "America/New_York",
            "meal_type": "breakfast",
            "time_zone_abbr": "EST"
        },

*/

const MealCard = ({ entries }) => {
  if (!entries.breakfast) return null;
  return (
    <Card containerStyle={s.container}>
      <Heading />
      {entries.breakfast.map((entry) => (
        <TouchableOpacity
          key={entry.id}
          activeOpacity={0.2}
          onPress={() => console.log("pressed")}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <ListItem.Title style={s.label}>
                  {entry.food_name},{" "}
                  <Text style={s.unit}>{entry.measure_name}</Text>
                </ListItem.Title>
                <ListItem.Title style={s.label}>
                  {+entry.quantity}
                </ListItem.Title>
              </View>
              <ListItem.Title style={s.brand}>
                {entry.brand_name}
              </ListItem.Title>
            </ListItem.Content>

            <ListItem.Chevron size={30} color={Colors.grey.s5} />
          </ListItem>
        </TouchableOpacity>
      ))}
    </Card>
  );
};

const Heading = () => {
  return <Text style={s.heading}>Breakfast</Text>;
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  heading: {
    fontSize: Typography.size.sm,
    fontFamily: Typography.font.lato.bold,
    color: Colors.grey.s8,
    marginBottom: Layout.spacing.md,
  },
  label: {
    fontSize: Typography.size.sm,
    fontFamily: Typography.font.lato.regular,
  },
  unit: {
    fontSize: Typography.size.sm,
    fontFamily: Typography.font.lato.light,
  },
  brand: {
    color: Colors.blue.s2,
    fontFamily: Typography.font.lato.italic,
  },
});

export default MealCard;
