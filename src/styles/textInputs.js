import { StyleSheet } from "react-native";
import * as Colors from "./colors";
import * as Sizing from "./sizing";
import * as Typography from "./typography";

export const container = {
  flex: 1,
  margin: 8,
  justifyContent: "space-between",
};

export const label = {
  color: Colors.blue.s2,
  fontSize: Typography.size.xs,
  fontFamily: Typography.font.lato.regular,
};

export const input = {
  borderBottomWidth: 1,
  color: Colors.grey.s9,
  fontSize: Typography.size.xs,
  paddingVertical: Sizing.layout.xs,
  borderBottomColor: Colors.blue.s2,
  fontFamily: Typography.font.lato.regular,
};

const baseStyles = {
  container,
  label,
  input,
};

export const createStyles = (override = () => { }) => {
  return StyleSheet.create({ ...baseStyles, ...override(baseStyles) });
};
