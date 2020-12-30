import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { Context as AuthContext } from "../contexts/AuthContext";
import g from "../style";
import NextButton from "./onboarding/components/NextButton";
import OnboardingView from "./onboarding/components/OnboardingView";

const SignUpScreen = () => {
  const {
    state: { authStart, errorMessage },
    createAccount,
  } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <OnboardingView
      headingText="NutriJournal ~ Sign Up"
      containerStyles={s.container}
    >
      <Input
        label="Height"
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        leftIcon={{
          type: "material-community",
          name: "email-outline",
          color: g.color.grey_8,
        }}
      />
      <Input
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        leftIcon={{
          type: "material-community",
          name: "form-textbox-password",
          color: g.color.grey_8,
        }}
      />
      <NextButton handlePress={() => createAccount(email, password)} />
    </OnboardingView>
  );
};

SignUpScreen.navigationOptions = {
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

export default SignUpScreen;
