import { Spacer } from "_components/common";
import { FoodLogForm, NutritionInfoCard } from "_components/flows/foodsearch";
import { DailyBudgetsCard } from "_components/flows/journal";
import { MEAL_TYPES } from "_constants";
import { Context as JournalContext } from "_contexts/JournalContext";
import g from "_globalstyles";
import { useFetchNutritionData } from "_hooks";
import React, { useContext, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const BREAKFAST = MEAL_TYPES[0];

// const { foodId, measures, label, brand, image, defaultMeasure } = foodData;
//   const fetchStatus = { start: false, error: false, success: true };

const FoodDetailsScreen = ({ navigation }) => {
  const {
    state: { createStatus },
    createJournalEntry,
  } = useContext(JournalContext);

  const {
    foodId,
    measures,
    label,
    brand,
    image,
    defaultMeasure,
  } = navigation.getParam("foodData");

  const [form, setForm] = useState({
    date: new Date(),
    quantity: "100",
    mealType: BREAKFAST,
    measure: defaultMeasure,
  });

  const [{ nutrients }, fetchStatus] = useFetchNutritionData(
    form.measure,
    foodId
  );

  const added = caclulateAdded(nutrients, form.quantity);

  const handleSubmitForm = () => {
    createJournalEntry({
      food_id: foodId,
      food_name: label,
      measure_name: form.measure.label,
      brand_name: brand,
      quantity: form.quantity,
      measure_uri: form.measure.uri,
      entry_date: form.date.toISOString(),
      time_zone_name: "America/New_York",
      meal_type: MEAL_TYPES[form.mealTypeIndex].label.toLowerCase(),
    });
  };

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
          onSubmitForm={handleSubmitForm}
          createStatus={createStatus}
        />
        <NutritionInfoCard
          nutrients={nutrients}
          quantity={+form.quantity}
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
  // headerTitle: navigation.getParam("foodData").label,
  headerTitle: foodData.label,
  headerStyle: {
    elevation: 0,
    backgroundColor: g.color.red_4,
  },
});

FoodDetailsScreen.whyDidYouRender = true;

export default FoodDetailsScreen;

const foodData = {
  label: "Bread",
  measures: [
    {
      key: 0,
      label: "Whole",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
    },
    {
      key: 1,
      label: "Whole (small)",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
      qualifiers: [
        "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
      ],
    },
    {
      key: 2,
      label: "Loaf",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_loaf",
    },
    {
      key: 3,
      label: "Standard Serving",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
    },
    {
      key: 4,
      label: "Roll",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_roll",
    },
    {
      key: 5,
      label: "Stick",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_stick",
    },
    {
      key: 6,
      label: "Hunk",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_hunk",
    },
    {
      key: 7,
      label: "Piece",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
    },
    {
      key: 8,
      label: "Slice",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
    },
    {
      key: 9,
      label: "Round",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_round",
    },
    {
      key: 10,
      label: "Cube",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_cube",
    },
    {
      key: 11,
      label: "Box",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_box",
    },
    {
      key: 12,
      label: "Package",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
    },
    {
      key: 13,
      label: "Gram",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
    },
    {
      key: 14,
      label: "Ounce",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
    },
    {
      key: 15,
      label: "Pound",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
    },
    {
      key: 16,
      label: "Kilogram",
      measureURI:
        "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
    },
    {
      key: 17,
      label: "Cup",
      measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
    },
  ],
  defaultMeasure: {
    key: 13,
    label: "Gram",
    measureURI: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
  },
  foodId: "food_a3049hmbqj5wstaeeb3udaz6uaqv",
  image:
    "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg",
  brand: "Generic",
};

const nutrients = {
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
};
