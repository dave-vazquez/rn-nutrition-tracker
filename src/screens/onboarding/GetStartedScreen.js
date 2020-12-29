/* eslint-disable react-native/no-raw-text */
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { B, Button } from "../../components";
import g from "../../style";

const GetStartedScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={s.container} forceInset={{ top: "always" }}>
      <Text style={s.heading}>Let's get started!</Text>
      <View style={s.content}>
        <Text style={s.text}>
          Tell us a little bit about <B textStyle={s.text}>you</B> and we'll
          take care of creating a
        </Text>
        <B textStyle={{ ...s.text, ...s.centerText }}>custom experience</B>
        <Text style={s.text}>
          tailored to help you achieve your{"\n"}
          <B textStyle={s.text}>nutritional and dietary goals.</B>
        </Text>
      </View>

      <Button
        text="Next"
        buttonStyles={g.bgColor.white}
        textStyles={g.textColor.grey_8}
        onPress={() => navigate("Gender")}
      />
    </SafeAreaView>
  );
};

GetStartedScreen.navigationOptions = {
  headerTitle: "",
  headerTransparent: true,
  headerTintColor: g.color.white,
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 80,
    paddingBottom: 30,
    backgroundColor: g.color.light_green_4,
  },
  content: {
    height: 300,
    justifyContent: "space-between",
    borderColor: g.color.white,
  },
  text: {
    color: g.color.white,
    fontFamily: "Manrope_Light",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
  },
  centerText: {
    fontSize: 28,
  },
  heading: {
    color: g.color.white,
    fontFamily: "NunitoSans_Bold",
    fontSize: 30,
  },
});

export default GetStartedScreen;
