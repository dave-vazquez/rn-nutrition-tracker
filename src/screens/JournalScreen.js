import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../contexts/AuthContext";

const JournalScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Log Off" onPress={signout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default JournalScreen;
