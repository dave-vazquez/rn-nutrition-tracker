import React from "react";
import { Text } from "react-native";

const B = ({ children, textStyle }) => (
  <Text style={{ fontWeight: "bold", ...textStyle }}>{children}</Text>
);

export default B;
