import { Context as AuthContext } from "_contexts/AuthContext";
import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";

const JournalScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.container}>
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
