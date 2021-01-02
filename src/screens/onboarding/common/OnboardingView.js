import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import g from "_globalstyles";
import React, { useContext, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-elements";

const OnboardingView = ({ children, containerStyles, headingText }) => {
  const { state } = useContext(OnboardingContext);

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === "ios" && { behavior: "padding" })}
      keyboardVerticalOffset={50}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: g.color.white }}
      >
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
