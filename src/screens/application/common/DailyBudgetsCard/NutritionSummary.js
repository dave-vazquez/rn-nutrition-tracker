import { Card } from "_components/common";
import { Colors, Layout, Typography } from "_global_styles";
import { toPrecision } from "_utils";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  Cell,
  Col,
  Row,
  Rows,
  Table,
  TableWrapper,
} from "react-native-table-component";

const NutritionSummary = ({
  added,
  budgets,
  consumed,
  quantity,
  fetchStatus,
}) => {
  const tableHead = [
    { header: "Summary", flex: 1.8 },
    { header: "", flex: 0.8 },
    { header: "Added", flex: 1.3 },
    { header: "Total", flex: 1 },
    { header: "Balance", flex: 1.3 },
  ];
  const tableData = [
    {
      name: "Calories",
      unit: "cal",
      added: toPrecision(added.calories_kcal * quantity, 0),
      consumed: toPrecision(
        consumed.calories_kcal + added.calories_kcal * quantity,
        0
      ),
      balance: toPrecision(
        budgets.calories_kcal -
        (consumed.calories_kcal + added.calories_kcal * quantity),
        0
      ),
    },
    {
      name: "Fats",
      unit: "g",
      added: toPrecision(added.fat_g * quantity, 0),
      consumed: toPrecision(consumed.fat_g + added.fat_g * quantity, 0),
      balance: toPrecision(
        budgets.fat_g - (consumed.fat_g + added.fat_g * quantity),
        0
      ),
    },
    {
      name: "Carbs",
      unit: "g",
      added: toPrecision(added.carbs_g * quantity, 0),
      consumed: toPrecision(consumed.carbs_g + added.carbs_g * quantity, 0),
      balance: toPrecision(
        budgets.carbs_g - (consumed.carbs_g + added.carbs_g * quantity),
        0
      ),
    },
    {
      name: "Protein",
      unit: "g",
      added: toPrecision(added.protein_g * quantity, 0),
      consumed: toPrecision(consumed.protein_g + added.protein_g * quantity, 0),
      balance: toPrecision(
        budgets.protein_g - (consumed.protein_g + added.protein_g * quantity),
        0
      ),
    },
  ];

  return (
    <Card containerStyle={s.card}>
      <Table>
        <TableWrapper style={{ flexDirection: "row", marginVertical: 3 }}>
          {tableHead.map(({ header, flex }, i) => {
            return (
              <Cell
                key={i}
                flex={flex}
                data={header}
                textStyle={[
                  s.bold,
                  {
                    fontSize: Typography.size.sm,
                    textAlign: i === 0 ? "center" : "right",
                  },
                ]}
              />
            );
          })}
        </TableWrapper>

        {tableData.map(({ name, added, consumed, balance, unit }, i) => {
          return (
            <TableWrapper
              key={i}
              style={{ marginVertical: 3, flexDirection: "row" }}
            >
              <Cell
                flex={1.8}
                data={name}
                style={[s.macro, { backgroundColor: bgColors[i] }]}
                textStyle={[
                  s.regular,
                  { textAlign: "center", color: titleColors[i] },
                ]}
              />
              <Cell
                flex={0.8}
                data={unit}
                textStyle={[s.regular, { textAlign: "right" }]}
              />
              {fetchStatus === "started" ? (
                <LoadingSpinners />
              ) : (
                  <>
                    <Cell flex={1.3} data={added} textStyle={s.regular} />
                    <Cell flex={1} data={consumed} textStyle={s.regular} />
                    <Cell flex={1.3} data={balance} textStyle={s.regular} />
                  </>
                )}
            </TableWrapper>
          );
        })}
      </Table>
    </Card>
  );
};

const LoadingSpinners = () => {
  return (
    <>
      <View style={{ flex: 1.3, alignItems: "flex-end" }}>
        <ActivityIndicator size="small" color={Colors.grey.s8} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <ActivityIndicator size="small" color={Colors.grey.s8} />
      </View>
      <View
        style={{
          flex: 1.3,
          alignItems: "flex-end",
        }}
      >
        <ActivityIndicator size="small" color={Colors.grey.s8} />
      </View>
    </>
  );
};

const bgColors = [
  Colors.green.light.s4,
  Colors.yellow.s2,
  Colors.blue.s2,
  Colors.pink.s2,
];

const titleColors = [Colors.white, Colors.grey.s8, Colors.white, Colors.white];

const s = StyleSheet.create({
  card: {
    // marginHorizontal: 0,
    // marginTop: 10,
    // marginBottom: 0,
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
    fontSize: Typography.size.sm,
    width: "100%",
    textAlign: "right",
  },
  macro: {
    height: 25,
    elevation: 3,
    width: "100%",
    shadowRadius: 1,
    borderRadius: 5,
    shadowOpacity: 2,
    justifyContent: "center",
    shadowColor: "#00000030",
    shadowOffset: { width: 0, height: 2 },
  },
});

export default NutritionSummary;
