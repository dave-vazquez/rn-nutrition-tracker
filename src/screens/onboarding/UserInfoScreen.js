import { NextButton } from "_components/common";
import {
  BasicInfoForm,
  Heading,
  TargetWeightForm,
  ToggleGenderForm,
} from "_components/flows/onboarding";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { onboardingRules as rules } from "_formrules";
import { colors } from "_global_styles";
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
        <StatusBar backgroundColor={colors.blue_2} barStyle="light-content" />
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
    backgroundColor: colors.white,
  },
});

UserInfoScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.blue_2,
  },
};

export default UserInfoScreen;
