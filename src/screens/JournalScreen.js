import { Context as AuthContext } from "_contexts/AuthContext";
import { Context as JournalContext } from "_contexts/JournalContext";
import React, { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";

const JournalScreen = () => {
  const { signout } = useContext(AuthContext);
  const {
    state: {
      fetchFail,
      fetchStart,
      fetchSuccess,
      budgets: {
        caloricBudgetCal,
        fatBudgetGrams,
        carbBudgetGrams,
        proteinBudgetGrams,
      },
    },
    fetchJournalEntries,
  } = useContext(JournalContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationEvents onWillFocus={fetchJournalEntries} />
      <View style={s.container}>
        {fetchStart && <Text>Fetching...</Text>}
        {fetchFail && <Text>Failed...</Text>}
        {fetchSuccess && (
          <>
            <Text>{caloricBudgetCal}</Text>
            <Text>{fatBudgetGrams}</Text>
            <Text>{carbBudgetGrams}</Text>
            <Text>{proteinBudgetGrams}</Text>
          </>
        )}
        <Button title="Log Off" onPress={signout} />
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default JournalScreen;
