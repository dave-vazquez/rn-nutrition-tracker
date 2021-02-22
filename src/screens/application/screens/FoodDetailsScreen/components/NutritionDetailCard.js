/* eslint-disable prettier/prettier */
import { Card } from "_components/common";
import { Colors, Layout, Typography } from "_global_styles";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Cell, Table, TableWrapper } from 'react-native-table-component';

const _NutritionDetailCard = ({ nutrients, quantity, fetchStatus }) => {
  return (
    <Card>
      {fetchStatus === 'started' ? (
        <ActivityIndicator size="large" color={Colors.grey.s8} />
      ) : fetchStatus === "error" ? (
        <ErrorMessage />
      ) :
          <NutritionTable nutrients={nutrients} quantity={quantity} />
      }
    </Card>
  );
};

const NutritionTable = ({ nutrients, quantity }) => {
  return (
    <View>
      <TableHeader />
      <Table>
        {
          Object.values(nutrients).map((nutrient, i) => (
            <TableWrapper key={i} style={s.table_row}>
              <Cell
                flex={7}
                data={nutrient.name}
                style={!nutrient.keyNutrient && { paddingLeft: 5 }}
                textStyle={[nutrient.keyNutrient ? s.bold : s.regular, { textAlign: "left" }]}
              />
              <Cell
                flex={3}
                textStyle={nutrient.keyNutrient ? s.bold : s.regular}
                data={nutrient.amount > 0 ? (nutrient.amount * quantity).toFixed(1) : "-"}
              />
              <Cell
                flex={1.5}
                data={nutrient.unit}
                textStyle={nutrient.keyNutrient ? s.bold : s.regular}
              />
              <Cell
                flex={3}
                textStyle={nutrient.keyNutrient ? s.bold : s.regular}
                data={(nutrient.dailyValue * quantity).toFixed(0) + " %"}
              />
            </TableWrapper>
          ))
        }
      </Table>
    </View>
  )
}

const TableHeader = () => {
  return (
    <View style={s.headingContainer}>
      <Text style={s.heading}>Nutrition Information</Text>
      <Text>(* DV)</Text>
    </View>
  );
}
const ErrorMessage = () => {
  return <Text style={[s.heading, { textAlign: "center" }]}>Oops! Something went wrong :\</Text>
}

const s = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: Typography.size.md,
    fontFamily: Typography.font.lato.bold,
    color: Colors.grey.s8,
    marginBottom: Layout.spacing.md,
  },
  table_row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Layout.spacing.xs,
  },
  bold: {
    fontFamily: Typography.font.lato.bold,
    color: Colors.grey.s8,
    fontSize: Typography.size.sm,
    width: "100%",
    textAlign: "right",
  },
  regular: {
    fontFamily: Typography.font.lato.regular,
    color: Colors.grey.s8,
    fontSize: 17,
    width: "100%",
    textAlign: "right",
  },
});


export default _NutritionDetailCard;