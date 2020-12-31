import { Context as AuthContext } from "/contexts/AuthContext";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NavigationEvents } from "react-navigation";

const SignInScreen = ({ navigation: { navigate } }) => {
  const {
    state: { authStart, errorMessage },
    signin,
    refreshAuth,
  } = useContext(AuthContext);

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("testtest1234");

  if (authStart) {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <NavigationEvents onWillFocus={refreshAuth} />
        <KeyboardAvoidingView
          style={s.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={{ fontSize: 32, fontWeight: "700", color: "gray" }}>
            NutriJournal - Sign In
          </Text>
          <View style={s.form}>
            <TextInput
              style={s.input}
              placeholder="Email"
              placeholderTextColor="#B1B1B1"
              returnKeyType="next"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={s.input}
              placeholder="Password"
              placeholderTextColor="#B1B1B1"
              returnKeyType="done"
              textContentType="newPassword"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {errorMessage ? (
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "red",
                width: "80%",
              }}
            >
              {errorMessage}
            </Text>
          ) : null}
          <TouchableOpacity
            style={{ width: "86%", marginTop: 10 }}
            onPress={() => signin(email, password)}
          >
            <View style={s.button}>
              <Text
                style={{
                  letterSpacing: 0.5,
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Sign in
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ fontWeight: "200", fontSize: 17, textAlign: "center" }}
              onPress={() => {
                navigate("SignUp");
              }}
            >
              Don't have an account?
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "86%",
    marginTop: 15,
  },
  input: {
    fontSize: 20,
    borderColor: "#707070",
    borderBottomWidth: 1,
    paddingBottom: 1.5,
    marginTop: 25.5,
  },
  button: {
    backgroundColor: "#3A559F",
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
});
export default SignInScreen;
