import { StyleSheet } from "react-native";
import * as Colors from "./colors";
import * as Layout from "./layout";
import * as Typography from "./typography";
import composeStyles from "./utils/composeStyles";

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
});

export { Colors, Typography, Layout, composeStyles, baseStyles };
