import { Spacer } from "_components/common";
import { FoodLogForm, NutritionInfoCard } from "_components/flows/foodsearch";
import { DailyBudgetsCard } from "_components/flows/journal";
import { MEAL_TYPES } from "_constants";
import { Context as JournalContext } from "_contexts/JournalContext";
import g from "_globalstyles";
import { useFetchNutritionData } from "_hooks";
import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

// const { image, foodId, measures, gramMeasureIndex } = foodData;

// const [{ nutrients }, fetchStatus] = [
//   nutrition,
//   { started: false, error: false, success: true },
// ];

const FoodDetailsScreen = ({ navigation }) => {
  const { image, foodId, measures, gramMeasureIndex } = navigation.getParam(
    "foodData"
  );

  const [form, setForm] = useState({
    date: new Date(),
    quantity: "100",
    mealTypeIndex: 0,
    measureIndex: gramMeasureIndex,
  });

  const [{ nutrients }, fetchStatus] = useFetchNutritionData(
    foodId,
    measures[form.measureIndex]
  );

  const added = caclulateAdded(nutrients, form.quantity);

  return (
    <SafeAreaView style={s.container}>
      {navigation.isFocused() && (
        <StatusBar barStyle="light-content" backgroundColor={g.color.red_4} />
      )}
      <Background image={image} />
      <ScrollView style={s.scrollView}>
        <Spacer height={image ? 150 : 15} />
        <DailyBudgetsCard added={added} />
        <FoodLogForm
          form={form}
          setForm={setForm}
          measures={measures}
          mealTypes={MEAL_TYPES}
        />
        <NutritionInfoCard
          nutrients={nutrients}
          multiplier={+form.quantity}
          fetchStatus={fetchStatus}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Background = ({ image }) => {
  return image ? (
    <ImageBackground
      resizeMethod="auto"
      imageStyle={s.image}
      style={s.imageBackground}
      source={{ uri: image }}
    />
  ) : (
      <View style={s.background} />
    );
};

const caclulateAdded = (nutrients, quantity) => {
  return {
    fat_g: nutrients ? nutrients.fat_g * Math.abs(+quantity) : 0,
    carbs_g: nutrients ? nutrients.carbs_g * Math.abs(+quantity) : 0,
    protein_g: nutrients ? nutrients.protein_g * Math.abs(+quantity) : 0,
    // eslint-disable-next-line prettier/prettier
    calories_kcal: nutrients ? nutrients.calories_kcal * Math.abs(+quantity) : 0,
  };
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
  headerTitleAlign: "left",
  headerTintColor: g.color.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerTitle: navigation.getParam("foodData").label,
  // headerTitle: foodData.label,
  headerStyle: {
    elevation: 0,
    backgroundColor: g.color.red_4,
  },
});

export default FoodDetailsScreen;

const foodData = {
  label: "Bread",
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
  gramMeasureIndex: 13,
  foodId: "food_a3049hmbqj5wstaeeb3udaz6uaqv",
  image:
    "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg",
  brand: "Generic",
};
const nutrition = {
  healthLabels: [
    "FAT_FREE",
    "VEGAN",
    "VEGETARIAN",
    "PESCATARIAN",
    "DAIRY_FREE",
    "EGG_FREE",
    "MILK_FREE",
    "PEANUT_FREE",
    "TREE_NUT_FREE",
    "SOY_FREE",
    "FISH_FREE",
    "SHELLFISH_FREE",
    "PORK_FREE",
    "RED_MEAT_FREE",
    "CRUSTACEAN_FREE",
    "CELERY_FREE",
    "MUSTARD_FREE",
    "SESAME_FREE",
    "LUPINE_FREE",
    "MOLLUSK_FREE",
    "ALCOHOL_FREE",
    "KOSHER",
  ],
  nutrients: {
    fat_g: 0.032400000000000005,
    iron_mg: 0.0349,
    sodium_mg: 5.08,
    fiber_g: 0.04,
    sugar_g: 0.0591,
    niacin_mg: 0.0562,
    calcium_mg: 1.33,
    fatSat_g: 0.00777,
    fatPoly_g: 0.014990000000000002,
    fatMono_g: 0.00607,
    carbs_g: 0.4868,
    potassium_mg: 1.77,
    thiamin_mg: 0.00415,
    protein_g: 0.1072,
    fatTrans_g: 0.00026,
    vitaminC_mg: 0.002,
    riboflavin_mg: 0.00253,
    calories_kcal: 2.67,
    vitaminB6_mg: 0.00111,
    vitaminB12_ug: 0,
    cholesterol_mg: 0,
  },
};

// const { image, foodId, measures } = navigation.getParam("foodData");

// const [{ nutrients }, fetchStatus] = useFetchNutritionData(
//   foodId,
//   measures[0].uri
// );
