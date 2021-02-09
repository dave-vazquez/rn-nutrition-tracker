import { StyleSheet } from "react-native";
import * as Colors from "./colors";
import * as Containers from "./containers";
import * as Layout from "./layout";
import * as Typography from "./typography";

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
});

export { Colors, Typography, Containers, Layout, baseStyles };
