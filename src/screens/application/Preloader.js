import { Context as JournalContext } from "_contexts/JournalContext";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloader";
import { NavigationEvents } from "react-navigation";

const PreloaderScreen = () => {
  return null;

  // return (
  //   <View>
  //     <NavigationEvents onWillFocus={fetchJournalEntries} />
  //     <BouncingPreloader
  //         icons={[
  //           require("_assets/icons/croissant.png"),
  //           require("_assets/icons/honey.png"),
  //           require("_assets/icons/pomegranate.png"),
  //           require("_assets/icons/whisk.png"),
  //         ]}
  //       />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default PreloaderScreen;
