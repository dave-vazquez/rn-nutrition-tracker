import { MEAL_TYPES } from "_constants";
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import { useCalculateAdded, useFetchNutritionData } from "_hooks";
import { DailyBudgetsCard, HeaderBottom } from "_screens/application/common";
import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import {
  JournalEntryForm,
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

  const foodData = getParam("foodData");

  const [form, setForm] = useState({
    quantity: "100",
    date: new Date(),
    mealType: BREAKFAST,
    measure: foodData.defaultMeasure,
  });

  const [nutrients, macros, fetchStatus] = useFetchNutritionData(
    form.measure,
    foodData.foodId
  );

  if (fetchStatus === "idle") return null;

  const addedNutrients = useCalculateAdded(form.quantity, nutrients, macros);

  const handleSubmitForm = () => {
    createJournalEntry({ ...foodData, ...form }, () => navigate("FoodSearch"));
  };

  return (
    <SafeAreaView style={Layout.container.application}>
      {isFocused() && (
        <StatusBar barStyle="light-content" backgroundColor={Colors.red.s4} />
      )}
      <HeaderBottom color={Colors.red.s4} />
      <ScrollView style={{ flexGrow: 1 }}>
        <DailyBudgetsCard added={addedNutrients.macros} />
        <NutritionSummaryCard
          image={foodData.image}
          fetchStatus={fetchStatus}
          nutrients={addedNutrients.macros}
        />
        <JournalEntryForm
          form={form}
          setForm={setForm}
          measures={foodData.measures}
          mealTypes={MEAL_TYPES}
          onSubmitForm={handleSubmitForm}
          createStatus={createStatus}
        />
        <NutritionDetailCard
          fetchStatus={fetchStatus}
          nutrients={addedNutrients.all}
        />
      </ScrollView>
    </SafeAreaView>
  );
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
