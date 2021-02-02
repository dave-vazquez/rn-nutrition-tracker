/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { DailyBudgetsCard, HeaderRight } from "_components/flows/journal";
import { Context as JournalContext } from "_contexts/JournalContext";
import { colors } from "_globalstyles";
import React, { useContext, useEffect } from "react";
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
    state: { date, fetchStatus },
    fetchJournalEntries,
  } = useContext(JournalContext);

  useEffect(() => {
    fetchJournalEntries();
  }, []);

  if (fetchStatus.error)
    return (
      <View>
        <Text>Ooops! Something went wrong :/</Text>
      </View>
    );

  return (
    <SafeAreaView style={s.container}>
      {isFocused() && (
        <StatusBar backgroundColor={colors.blue_2} barStyle="light-content" />
      )}
      <Spinner
        size="large"
        animation="fade"
        visible={fetchStatus.start}
        color={colors.grey_8}
        overlayColor={colors.white}
      />
      <View style={s.background} />
      <ScrollView style={s.scroll}>
        <DailyBudgetsCard />
        {/* <Text>{date.toString()}</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

JournalScreen.navigationOptions = {
  headerTitle: "Journal",
  headerTitleAlign: "left",
  headerTintColor: colors.white,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.blue_2,
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
    paddingHorizontal: 15,
    backgroundColor: colors.wheat,
    borderWidth: 1,
  },
  scroll: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  background: {
    height: 120,
    backgroundColor: colors.blue_2,
    ...StyleSheet.absoluteFill,
  },
});

export default withNavigationFocus(JournalScreen);

/*
  <ScrollView contentInsetAdjustmentBehavior="automatic">
  https://github.com/facebook/react-native/issues/16997#issuecomment-423814312
*/
