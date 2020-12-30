import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-elements";

const OnboardingView = ({ children, containerStyles, headingText }) => {
  return (
    <KeyboardAvoidingView
      {...(Platform.OS === "ios" && { behavior: "padding" })}
      keyboardVerticalOffset={50}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={containerStyles}>
          <Text h2 h2Style={s.h2}>
            {headingText}
          </Text>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

/*
<TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      
    </TouchableWithoutFeedback>


*/

const s = StyleSheet.create({
  h2: {
    fontFamily: "NunitoSans_Regular",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "normal",
  },
});

export default OnboardingView;
