import { Colors } from "_global_styles";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Cell } from "react-native-table-component";
import { default as s } from "../styles";

const NutrientData = ({ loading, flex, data, keyNutrient, macroNutrient }) => {
  return loading ? (
    <View style={{ flex, alignItems: "flex-end" }}>
      <ActivityIndicator size="small" color={Colors.grey.s8} />
    </View>
  ) : (
      <Cell
        flex={flex}
        data={data}
        textStyle={[keyNutrient || macroNutrient ? s.bold : s.regular]}
      />
    );
};

export default NutrientData;
