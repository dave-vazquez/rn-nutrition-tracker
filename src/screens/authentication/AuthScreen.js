import g from "/global-styles";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import NextButton from "../onboarding/components/NextButton";
import OnboardingView from "../onboarding/components/OnboardingView";
import useAuthenticate from "./useAuthenticate";

const AuthScreen = ({ navigation }) => {
  const authType = navigation.getParam("authType");
  // const authType = "signup";

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");

  const [authenticate, authStart, authFail, errorMessage] = useAuthenticate(
    email,
    password,
    authType
  );

  console.log("authStart", authStart);
  console.log("authFail", authFail);
  console.log("errorMessage", errorMessage);
  console.log();

  // eslint-disable-next-line prettier/prettier
  const headingText = authType === "signup"
    ? "NutriJournal ~ Sign Up"
    : "NutriJournal ~ Sign In";

  return (
    <OnboardingView headingText={headingText} containerStyles={s.container}>
      <Input
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        leftIcon={{
          type: "material-community",
          name: "email-outline",
          color: g.color.grey_8,
        }}
      />
      <Input
        label="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        leftIcon={{
          type: "material-community",
          name: "form-textbox-password",
          color: g.color.grey_8,
        }}
      />
      {authStart && <Text>Loading...</Text>}
      {authFail && <Text>{errorMessage}</Text>}
      <NextButton handlePress={() => authenticate(email, password)} />
    </OnboardingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "",
  headerTintColor: g.color.grey_8,
  headerStyle: {
    backgroundColor: "transparent",
    elevation: 0,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});

export default AuthScreen;
