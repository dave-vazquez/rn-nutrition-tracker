import { IconButton } from "_components/common";
/* eslint-disable react-hooks/exhaustive-deps */
import { Context as JournalContext } from "_contexts/JournalContext";
import { Colors, Layout } from "_global_styles";
import { DailyBudgetsCard, HeaderBottom } from "_screens/application/common";
import React, { useContext, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { withNavigationFocus } from "react-navigation";
import { HeaderRight } from "./components";

const JournalScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { fetchStatus },
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

  if (fetchStatus.start)
    return (
      <Spinner
        size="large"
        animation="fade"
        visible={true}
        color={Colors.grey.s8}
        overlayColor={Colors.white}
      />
    );

  return (
    <SafeAreaView style={Layout.container.application}>
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
      )}
      <HeaderBottom color={Colors.blue.s2} />
      <ScrollView style={{ flexGrow: 1 }}>
        <DailyBudgetsCard />
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

JournalScreen.navigationOptions = {
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
      text="Jan 1, 2020"
      iconType="material-community"
      iconName="notebook"
    />
  ),
};

export default withNavigationFocus(JournalScreen);
