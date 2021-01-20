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
  View,
} from "react-native";

const FoodDetailsScreen = ({ navigation: { isFocused } }) => {
  const {
    state: { budgets, consumed },
  } = useContext(JournalContext);

  const { image, id, measures } = navigation.getParam("foodData");

  const [{ nutrients }, fetchStatus] = useFetchNutritionData(
    id,
    measures[0].uri
  );

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar barStyle="light-content" backgroundColor={g.color.red_4} />
      )}
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
      <ScrollView style={s.scrollView}>
        <Spacer height={image ? 150 : 15} />
        <DailyBudgetsCard
          budgets={budgets}
          consumed={consumed}
          added={{
            fat_g: nutrients?.fat_g || 0,
            carbs_g: nutrients?.carbs_g || 0,
            protein_g: nutrients?.protein_g || 0,
            calories_kcal: nutrients?.calories_kcal || 0,
          }}
        />
        <NutritionInfoCard fetchStatus={fetchStatus} nutrients={nutrients} />
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
  headerTitleAlign: "left",
  headerTintColor: g.color.white,
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerTitle: navigation.getParam("foodData").label,
  headerStyle: {
    elevation: 0,
    backgroundColor: g.color.red_4,
  },
});

export default FoodDetailsScreen;
