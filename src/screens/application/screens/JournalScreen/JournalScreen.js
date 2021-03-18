/* eslint-disable react-hooks/exhaustive-deps */
import { DatePaginator, IconButton } from "_components/common";
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import { DailyBudgetsCard, HeaderBottom } from "_screens/application/common";
import { getRelativeDate } from "_utils/dayjs";
import React, { useContext, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { NavigationEvents, withNavigationFocus } from "react-navigation";
import { HeaderRight } from "./components";

const JournalScreen = ({ navigation: { navigate, isFocused, setParams } }) => {
  const {
    state: { fetchStatus, currentDate },
    fetchJournal,
  } = useContext(JournalContext);

  useEffect(() => {
    fetchJournal(currentDate);
    setParams({ displayDate: getRelativeDate(currentDate) });
  }, []);

  const onDateChange = (newDate) => {
    fetchJournal(newDate, () => {
      setParams({ displayDate: getRelativeDate(newDate) });
    });
  };

  if (fetchStatus === "error") {
    return (
      <View>
        <Text>Ooops! Something went wrong :/</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={Layout.container.application}>
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
      )}
      <NavigationEvents onWillFocus={() => fetchJournal(currentDate)} />
      <HeaderBottom color={Colors.blue.s2} />
      <ScrollView style={{ flexGrow: 1 }}>
        <DailyBudgetsCard />
        <DatePaginator currentDate={currentDate} onDateChange={onDateChange} />
      </ScrollView>
      <View style={Layout.centered}>
        <IconButton
          onPress={() => navigate("FoodSearch")}
          icon={{
            name: "add",
            type: "material-icons",
            color: Colors.green.light.s4,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

JournalScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Journal",
  headerTitleAlign: "left",
  headerTintColor: Colors.white,
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.blue.s2,
  },
  headerTitleStyle: { fontFamily: "Lato_Bold" },
  headerRight: () => (
    <HeaderRight
      text={navigation.getParam("displayDate")}
      iconType="material-community"
      iconName="notebook"
    />
  ),
});

export default withNavigationFocus(JournalScreen);
