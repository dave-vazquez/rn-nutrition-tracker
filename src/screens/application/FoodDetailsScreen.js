import {
  FoodLogForm,
  NutritionDetailCard,
  NutritionSummaryCard,
} from "_components/flows/foodsearch";
import { DailyBudgetsCard } from "_components/flows/journal";
import { IDLE, MEAL_TYPES } from "_constants";
import { Context as JournalContext } from "_contexts/JournalContext";
import { colors } from "_global_styles";
import { useFetchNutritionData } from "_hooks";
import * as Localization from "expo-localization";
import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const BREAKFAST = MEAL_TYPES[0];

const FoodDetailsScreen = ({
  navigation: { getParam, navigate, isFocused },
}) => {
  const {
    state: { createStatus },
    createJournalEntry,
  } = useContext(JournalContext);

  const { foodId, measures, label, brand, image, defaultMeasure } = getParam(
    "foodData"
  );

  const [form, setForm] = useState({
    quantity: "100",
    date: new Date(),
    mealType: BREAKFAST,
    measure: defaultMeasure,
  });

  const [{ nutrients }, fetchStatus] = useFetchNutritionData(
    form.measure,
    foodId
  );

  const added = caclulateAdded(nutrients, form.quantity);

  const handleSubmitForm = () => {
    createJournalEntry(
      {
        food_id: foodId,
        food_name: label,
        brand_name: brand,
        quantity: form.quantity,
        meal_type: form.mealType.value,
        measure_name: form.measure.label,
        entry_date: form.date.toISOString(),
        measure_uri: form.measure.measureURI,
        time_zone_name: Localization.timezone,
      },
      () => navigate("FoodSearch")
    );
  };

  if (fetchStatus === IDLE) return null;

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar barStyle="light-content" backgroundColor={colors.red_4} />
      )}
      <View style={s.background} />
      <ScrollView style={s.scrollView}>
        <DailyBudgetsCard added={added} />
        <NutritionSummaryCard
          image={image}
          nutrients={nutrients}
          quantity={+form.quantity}
          fetchStatus={fetchStatus}
        />
        <FoodLogForm
          form={form}
          setForm={setForm}
          measures={measures}
          mealTypes={MEAL_TYPES}
          onSubmitForm={handleSubmitForm}
          createStatus={createStatus}
        />
        <NutritionDetailCard
          nutrients={nutrients}
          quantity={+form.quantity}
          fetchStatus={fetchStatus}
        />
      </ScrollView>
    </SafeAreaView>
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
    paddingHorizontal: 15,
    backgroundColor: colors.wheat,
  },
  scrollView: {
    flexGrow: 1,
  },
  background: {
    height: 120,
    backgroundColor: colors.red_4,
    ...StyleSheet.absoluteFill,
  },
});

FoodDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitleAlign: "left",
  headerTintColor: colors.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerTitle: navigation.getParam("foodData").label,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.red_4,
  },
});

FoodDetailsScreen.whyDidYouRender = true;

export default FoodDetailsScreen;
