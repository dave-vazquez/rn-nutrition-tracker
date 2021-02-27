import { MEAL_TYPES } from "_constants";
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import { useFetchNutritionData } from "_hooks";
import { DailyBudgetsCard, HeaderBottom } from "_screens/application/common";
import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { JournalEntryForm, NutritionInfo } from "./components";

const FoodDetailsScreen = ({ navigation }) => {
  //
  const foodData = navigation.getParam("foodData");

  const {
    state: { createStatus },
    createJournalEntry,
  } = useContext(JournalContext);

  const [form, setForm] = useState({
    quantity: "100",
    date: new Date(),
    mealType: MEAL_TYPES[0],
    measure: foodData.defaultMeasure,
  });

  const [nutrients, macros, fetchStatus] = useFetchNutritionData(
    form.measure,
    foodData.foodId
  );

  const handleSubmitForm = () => {
    createJournalEntry({ ...foodData, ...form }, () =>
      navigation.navigate("FoodSearch")
    );
  };

  if (fetchStatus === "idle") return null;

  return (
    <SafeAreaView style={Layout.container.application}>
      {navigation.isFocused() && (
        <StatusBar barStyle="light-content" backgroundColor={Colors.red.s4} />
      )}
      <HeaderBottom color={Colors.red.s4} />
      <ScrollView style={{ flexGrow: 1 }}>
        <DailyBudgetsCard
          added={macros}
          quantity={+form.quantity}
          image={foodData.image}
          fetchStatus={fetchStatus}
          showSummary={true}
        />
        <NutritionInfo
          macros={macros}
          nutrients={nutrients}
          fetchStatus={fetchStatus}
          quantity={+form.quantity}
        />
        <JournalEntryForm
          form={form}
          setForm={setForm}
          createStatus={createStatus}
          measures={foodData.measures}
          onSubmitForm={handleSubmitForm}
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
