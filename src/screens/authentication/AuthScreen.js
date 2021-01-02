import g from "_globalstyles";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import { NavigationEvents } from "react-navigation";
import NextButton from "../onboarding/components/NextButton";
import OnboardingView from "../onboarding/components/OnboardingView";
import useFocusNextInput from "../onboarding/hooks/useFocusNextInput";
import { authRules } from "../onboarding/validationRules";
import useAuthenticate from "./hooks/useAuthenticate";

const AuthScreen = ({ navigation }) => {
  const authType = navigation.getParam("authType");

  const headingText =
    authType === "signup" ? "NutriJournal ~ Sign Up" : "NutriJournal ~ Sign In";

  const [setRef, focusNextInput] = useFocusNextInput();

  const { handleSubmit, control, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    authenticate(data);
  };

  const [
    authenticate,
    refreshAuth,
    authStart,
    authFail,
    errorMessage,
  ] = useAuthenticate(authType);

  return (
    <OnboardingView headingText={headingText} containerStyles={s.container}>
      <NavigationEvents onWillFocus={refreshAuth} />
      <Controller
        name="email"
        defaultValue=""
        control={control}
        rules={authRules.email}
        render={({ onChange, onBlur, value }) => (
          <Input
            label="Email"
            value={value}
            onBlur={onBlur}
            errorStyle={s.error}
            blurOnSubmit={false}
            onChangeText={onChange}
            keyboardType="email-address"
            errorMessage={errors.email?.message}
            onSubmitEditing={() => focusNextInput("password")}
            leftIcon={{
              type: "material-community",
              name: "email-outline",
              color: g.color.grey_8,
            }}
          />
        )}
      />
      <Controller
        name="password"
        defaultValue=""
        control={control}
        rules={
          authType === "signup"
            ? authRules.password
            : {
              required: {
                value: true,
                message: "Required field",
              },
            }
        }
        render={({ onChange, onBlur, value }) => (
          <Input
            value={value}
            onBlur={onBlur}
            label="Password"
            errorStyle={s.error}
            secureTextEntry={true}
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            ref={(input) => setRef("password", input)}
            leftIcon={{
              type: "material-community",
              name: "form-textbox-password",
              color: g.color.grey_8,
            }}
          />
        )}
      />

      <Spinner visible={authStart} animation="fade" size="large" />
      {authFail && <Text style={s.error}>{errorMessage}</Text>}
      <NextButton onPress={handleSubmit(onSubmit)} gutterTop={30} />
    </OnboardingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "",
  headerTintColor: g.color.grey_8,
  headerStyle: {
    backgroundColor: g.color.white,
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
  form: {
    flex: 0.5,
    justifyContent: "flex-end",
    // borderWidth: 1,
    // borderColor: "red",
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default AuthScreen;
