import { Button, Heading } from "_components/common";
import { LandingContainer } from "_components/flows/onboarding";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

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
            title="Sign Up"
            onPress={() => navigate("WeightGoal")}
          />
          <Button
            width="100%"
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
