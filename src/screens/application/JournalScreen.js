/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { DailyBudgetsCard, HeaderRight } from "_components/flows/journal";
import { Context as JournalContext } from "_contexts/JournalContext";
import g from "_globalstyles";
import React, { useContext, useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { withNavigationFocus } from "react-navigation";

const JournalScreen = ({ navigation: { isFocused } }) => {
  const {
    state: { fetchStart, fetchFail, budgets, consumed },
    fetchJournalEntries,
  } = useContext(JournalContext);

  useLayoutEffect(() => {
    fetchJournalEntries();
  }, []);

  if (fetchFail)
    return (
      <View>
        <Text>Ooops! Something went wrong :/</Text>
      </View>
    );

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar backgroundColor={g.color.blue_2} barStyle="light-content" />
      )}
      <Spinner
        size="large"
        animation="fade"
        visible={fetchStart}
        color={g.color.grey_8}
        overlayColor={g.color.white}
      />
      <View style={s.background} />
      <ScrollView style={s.scroll}>
        <DailyBudgetsCard budgets={budgets} consumed={consumed} />
      </ScrollView>
    </SafeAreaView>
  );
};

JournalScreen.navigationOptions = {
  headerTitle: "Journal",
  headerTitleAlign: "left",
  headerTintColor: g.color.white,
  headerStyle: {
    elevation: 0,
    backgroundColor: g.color.blue_2,
  },
  headerTitleStyle: { fontFamily: "Lato_Bold" },
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
    backgroundColor: g.color.blue_2,
    ...StyleSheet.absoluteFill,
  },
});

export default withNavigationFocus(JournalScreen);

/*
  <ScrollView contentInsetAdjustmentBehavior="automatic">
  https://github.com/facebook/react-native/issues/16997#issuecomment-423814312
*/
