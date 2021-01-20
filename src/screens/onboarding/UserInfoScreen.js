import { NextButton } from "_components/common";
import {
  BasicInfoForm,
  Heading,
  TargetWeightForm,
  ToggleGenderForm,
} from "_components/flows/onboarding";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { onboardingRules as rules } from "_formrules";
import g from "_globalstyles";
import { useFocusNextInput } from "_hooks";
import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const UserInfoScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { weightGoal, gender },
    updateGender,
    updateUserInfo,
  } = useContext(OnboardingContext);

  const { handleSubmit, formState, ...form } = useForm({ mode: "onBlur" });

  const scrollView = useRef(null);
  const [setRef, focusNextInput] = useFocusNextInput();

  const onSubmit = (userInfo) => {
    updateUserInfo(userInfo, () =>
      navigate("AuthScreen", { authType: "signup" })
    );
  };

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === "ios" && { behavior: "padding" })}
      keyboardVerticalOffset={50}
      style={s.container}
    >
      {isFocused() && (
        <StatusBar backgroundColor={g.color.blue_2} barStyle="light-content" />
      )}
      <ScrollView
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        ref={(ref) => (scrollView.current = ref)}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({ animated: true })
        }
      >
        <Heading
          title={!gender ? "Are you male or female?" : "Tell us about you!"}
        />
        <ToggleGenderForm gender={gender} updateGender={updateGender} />
        {gender !== "" && (
          <View>
            <BasicInfoForm
              form={form}
              rules={rules}
              setRef={setRef}
              weightGoal={weightGoal}
              focusNextInput={focusNextInput}
            />
            {weightGoal !== "maintain" && (
              <TargetWeightForm
                form={form}
                rules={rules}
                setRef={setRef}
                weightGoal={weightGoal}
              />
            )}
          </View>
        )}
        {formState.isDirty && formState.isValid && (
          <NextButton gutterTop={20} onPress={handleSubmit(onSubmit)} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: g.color.white,
  },
});

UserInfoScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: g.color.white,
  headerStyle: {
    backgroundColor: g.color.blue_2,
  },
};

export default UserInfoScreen;
