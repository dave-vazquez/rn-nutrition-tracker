/* eslint-disable react/display-name */
import { Context as JournalContext } from "_contexts/JournalContext";
import g from "_globalstyles";
import React, { useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { HeaderRight } from "../common";
import NutritionBudgets from "./components/NutritionBudgets";

const JournalScreen = () => {
  const {
    state: { fetchFail, fetchStart, fetchSuccess, budgets },
    fetchJournalEntries,
  } = useContext(JournalContext);

  const consumed = {
    calories: {
      consumed: fetchSuccess ? 500 : 1,
    },
    carbs: {
      consumed: fetchSuccess ? 10 : 1,
    },
    fats: {
      consumed: fetchSuccess ? 25 : 1,
    },
    protein: {
      consumed: fetchSuccess ? 58 : 1,
    },
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={s.background} />
      <NavigationEvents onWillFocus={fetchJournalEntries} />
      <ScrollView style={s.scroll}>
        <NutritionBudgets budgets={budgets} consumed={consumed} />
        {fetchFail && <Text>Failed...</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

JournalScreen.navigationOptions = {
  headerTitle: "Journal",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue,
    elevation: 0,
  },
  headerTitleAlign: "left",
  headerTitleStyle: {
    fontFamily: "Lato_Bold",
  },
  headerRight: () => (
    <HeaderRight
      text="Jan 1, 2020"
      iconType="material-community"
      iconName="notebook"
    />
  ),
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: g.color.white,
  },
  scroll: {
    flex: 1,
  },
  background: {
    height: 120,
    ...StyleSheet.absoluteFill,
    backgroundColor: g.color.blue,
  },
});

export default JournalScreen;

/*
  <ScrollView contentInsetAdjustmentBehavior="automatic">
  https://github.com/facebook/react-native/issues/16997#issuecomment-423814312


  {fetchStart && <Text>Fetching...</Text>}

*/
