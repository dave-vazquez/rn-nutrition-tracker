import { Button, Heading } from "_components/common";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { LandingContainer } from "./components";

const LandingScreen = ({ navigation: { navigate, isFocused } }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isFocused() && (
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
      )}
      <LandingContainer>
        <View>
          <Heading title="WELCOME TO" size="h2" />
          <Heading title="NutriJournal" size="h1" />
        </View>
        <View>
          <Button
            width="100%"
            size="large"
            title="Sign Up"
            onPress={() => navigate("WeightGoal")}
          />
          <Button
            width="100%"
            size="large"
            title="Login"
            variant="secondary"
            onPress={() => navigate("AuthScreen", { authType: "signin" })}
          />
        </View>
      </LandingContainer>
    </SafeAreaView>
  );
};

LandingScreen.navigationOptions = {
  header: () => false,
};

export default LandingScreen;
