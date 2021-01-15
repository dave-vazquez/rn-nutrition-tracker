import { NutritionInfoCard } from "_components/flows/foodsearch";
import { DailyBudgetsCard } from "_components/flows/journal";
import { Context as JournalContext } from "_contexts/JournalContext";
import g from "_globalstyles";
import { useFetchNutritionData } from "_hooks";
import { Spacer } from "components/common";
import React, { useContext } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { withNavigationFocus } from "react-navigation";

const FoodDetailsScreen = ({ navigation }, isFocused) => {
  const {
    state: { budgets, consumed },
  } = useContext(JournalContext);

  const { image, id, measures } = navigation.getParam("foodData");
  // const { image, id, measures } = foodData;

  const [nutrition, fetchStatus] = useFetchNutritionData(id, measures[0].uri);

  if (fetchStatus.start) {
    return (
      <Spinner
        size="large"
        animation="fade"
        visible={fetchStatus.start}
        color={g.color.grey_8}
        overlayColor={g.color.white}
      />
    );
  }

  return (
    <SafeAreaView style={s.container}>
      {isFocused && (
        <StatusBar barStyle="light-content" backgroundColor={g.color.red_4} />
      )}
      <ScrollView style={s.scrollView}>
        {image ? (
          <ImageBackground
            resizeMethod="auto"
            imageStyle={s.image}
            style={s.imageBackground}
            source={{ uri: image }}
          />
        ) : (
            <View style={s.background} />
          )}
        <Spacer height={image ? 150 : 15} />
        <DailyBudgetsCard budgets={budgets} consumed={consumed} />
        <NutritionInfoCard nutrients={nutrition.nutrients} />
      </ScrollView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: g.color.wheat,
  },
  scrollView: {
    flexGrow: 1,
  },
  background: {
    height: 120,
    backgroundColor: g.color.red_4,
    ...StyleSheet.absoluteFill,
  },
  imageBackground: {
    height: 250,
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: 0,
  },
  image: {
    height: 400,
    resizeMode: "cover",
  },
});

FoodDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("foodData").label,
  // headerTitle: foodData.label,
  headerTitleAlign: "left",
  headerTintColor: g.color.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerStyle: {
    elevation: 0,
    backgroundColor: g.color.red_4,
  },
});

export default withNavigationFocus(FoodDetailsScreen);

/*





*/

const foodData = {
  id: "food_a3049hmbqj5wstaeeb3udaz6uaqv",
  label: "Bread",
  brand: "Generic",
  image:
    "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg",
  measures: [
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
      label: "Whole",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
      label: "Whole (small)",
      qualifierUri:
        "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_loaf",
      label: "Loaf",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
      label: "Standard Serving",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_roll",
      label: "Roll",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_stick",
      label: "Stick",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_hunk",
      label: "Hunk",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
      label: "Piece",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
      label: "Slice",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_round",
      label: "Round",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cube",
      label: "Cube",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_box",
      label: "Box",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
      label: "Package",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
      label: "Gram",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
      label: "Ounce",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
      label: "Pound",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
      label: "Kilogram",
    },
    {
      uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
      label: "Cup",
    },
  ],
};
