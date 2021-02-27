import { Card } from "_components/common";
import React from "react";
import { View } from "react-native";
import { Table, TableWrapper } from "react-native-table-component";
import NutrientData from "../cells/NutrientData";
import NutrientName from "../cells/NutrientName";
import { calcAmount, calcDailyVal } from "../helper";
import { default as s } from "../styles";

const SummaryTable = ({ macros, quantity, loading, visible }) => {
  return (
    <View style={{ display: visible ? "flex" : "none" }}>
      <Table>
        {Object.values(macros).map(
          ({ name, amount, unit, dailyValue }, key) => {
            return (
              <TableWrapper key={key} style={s.table_row}>
                <NutrientName flex={7} name={name} macroNutrient />
                <NutrientData
                  flex={3}
                  macroNutrient
                  loading={loading}
                  data={calcAmount(amount, quantity)}
                />
                <NutrientData flex={1.5} data={unit} macroNutrient />
                <NutrientData
                  flex={3}
                  macroNutrient
                  loading={loading}
                  data={calcDailyVal(dailyValue, quantity)}
                />
              </TableWrapper>
            );
          }
        )}
      </Table>
      <Card.Divider />
    </View>
  );
};

export default SummaryTable;
