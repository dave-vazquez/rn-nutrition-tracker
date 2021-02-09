import { NextButton, TextInput } from "_components/common";
import { Heading } from "_components/flows/onboarding";
import { authRules as rules } from "_formrules";
import { Colors } from "_global_styles";
import { useFocusNextInput } from "_hooks";
import { useAuthenticate } from "_hooks";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { NavigationEvents } from "react-navigation";

const AuthScreen = ({ navigation }) => {
  const authType = navigation.getParam("authType");

  const headingText =
    authType === "signup" ? "Let's get started!" : "Welcome back!";

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
    <KeyboardAvoidingView
      {...(Platform.OS === "ios" && { behavior: "padding" })}
      keyboardVerticalOffset={50}
      style={s.container}
    >
      {navigation.isFocused && (
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      )}
      <NavigationEvents onWillFocus={refreshAuth} />
      <Spinner visible={authStart} animation="fade" size="large" />
      <Heading title={headingText} />
      <View style={s.content}>
        <Controller
          name="email"
          defaultValue="t@t.com"
          control={control}
          rules={rules.email}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              label="Email"
              variant="large"
              value={value}
              onBlur={onBlur}
              autoCapitalize="none"
              blurOnSubmit={false}
              onChangeText={onChange}
              keyboardType="email-address"
              errorMessage={errors.email?.message}
              onSubmitEditing={() => focusNextInput("password")}
              leftIcon={{
                type: "material-community",
                name: "email-outline",
                color: Colors.grey.s8,
              }}
            />
          )}
        />
        <Controller
          name="password"
          defaultValue="pass"
          control={control}
          rules={
            authType === "signup"
              ? rules.password
              : {
                required: {
                  value: true,
                  message: "Required field",
                },
              }
          }
          render={({ onChange, onBlur, value }) => (
            <TextInput
              variant="large"
              value={value}
              onBlur={onBlur}
              label="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
              ref={(input) => setRef("password", input)}
              leftIcon={{
                type: "material-community",
                name: "form-textbox-password",
                color: Colors.grey.s8,
              }}
            />
          )}
        />
        {authFail && <Text style={s.error}>{errorMessage}</Text>}
      </View>
      <NextButton onPress={handleSubmit(onSubmit)} gutterTop={30} />
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "",
  headerTintColor: Colors.grey.s8,
  headerStyle: {
    backgroundColor: Colors.white,
    elevation: 0,
  },
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    marginTop: 30,
    justifyContent: "flex-start",
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default AuthScreen;
