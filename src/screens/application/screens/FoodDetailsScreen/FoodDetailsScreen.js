import { IDLE, MEAL_TYPES } from "_constants";
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import { useFetchNutritionData } from "_hooks";
import { DailyBudgetsCard, HeaderBottom } from "_screens/application/common";
import * as Localization from "expo-localization";
import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  FoodLogForm,
  NutritionDetailCard,
  NutritionSummaryCard,
} from "./components";

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
    <SafeAreaView style={Layout.container.application}>
      {isFocused() && (
        <StatusBar barStyle="light-content" backgroundColor={Colors.red.s4} />
      )}
      <HeaderBottom color={Colors.red.s4} />
      <ScrollView style={{ flexGrow: 1 }}>
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

FoodDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitleAlign: "left",
  headerTintColor: Colors.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerTitle: navigation.getParam("foodData").label,
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.red.s4,
  },
});

FoodDetailsScreen.whyDidYouRender = true;

export default FoodDetailsScreen;
