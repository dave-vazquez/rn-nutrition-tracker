import { Button, Heading } from "_components/common";
import { Context as OnboardingContext } from "_contexts/OnboardingContext";
import { onboardingRules as rules } from "_formrules";
import { Colors, Layout } from "_global_styles";
import { useFocusNextInput } from "_hooks";
import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import {
  BasicInfoSection,
  GenderSection,
  TargetWeightSection,
} from "./components";

const UserInfoScreen = ({ navigation: { navigate, isFocused } }) => {
  const {
    state: { weightGoal, gender },
    updateGender,
    updateUserInfo,
  } = useContext(OnboardingContext);

  const { handleSubmit, formState, ...form } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (userInfo) => {
    updateUserInfo(userInfo, () =>
      navigate("AuthScreen", { authType: "signup" })
    );
  };

  const scrollView = useRef(null);
  const [setRef, focusNextInput] = useFocusNextInput();

  const { isDirty, isValid } = formState;

  return (
    <KeyboardAvoidingView
      {...(Platform.OS === "ios" && { behavior: "padding" })}
      keyboardVerticalOffset={50}
      style={Layout.container.onboarding}
    >
      {isFocused() && (
        <StatusBar backgroundColor={Colors.blue.s2} barStyle="light-content" />
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
          size="h3"
        />
        <GenderSection gender={gender} updateGender={updateGender} />
        {gender !== "" && (
          <View>
            <BasicInfoSection
              form={form}
              rules={rules}
              setRef={setRef}
              weightGoal={weightGoal}
              focusNextInput={focusNextInput}
            />
            {weightGoal !== "maintain" && (
              <TargetWeightSection
                form={form}
                rules={rules}
                setRef={setRef}
                weightGoal={weightGoal}
              />
            )}
          </View>
        )}
        {isDirty && isValid && (
          <View style={Layout.fixedBottom}>
            <Button
              title="Next"
              size="large"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

UserInfoScreen.navigationOptions = {
  headerTitle: "About You",
  headerTintColor: Colors.white,
  headerStyle: {
    backgroundColor: Colors.blue.s2,
  },
};

export default UserInfoScreen;
