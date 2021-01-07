import { Context as AuthContext } from "_contexts/AuthContext";
import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";

const SettingsScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View style={s.container}>
      <Button title="Log Off" onPress={signout} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
