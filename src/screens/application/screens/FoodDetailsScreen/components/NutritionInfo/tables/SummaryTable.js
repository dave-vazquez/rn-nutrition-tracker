import { Card } from "_components/common";
import { calcNetTotal } from "_utils";
import React, { memo } from "react";
import { View } from "react-native";
import { Table, TableWrapper } from "react-native-table-component";
import NutrientData from "../cells/NutrientData";
import NutrientName from "../cells/NutrientName";
import { default as s } from "../styles";

const SummaryTable = memo(({ macros, quantity, loading, visible }) => {
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
                  data={calcNetTotal(amount, quantity, 1, true)}
                />
                <NutrientData flex={1.5} data={unit} macroNutrient />
                <NutrientData
                  flex={3}
                  macroNutrient
                  loading={loading}
                  data={calcNetTotal(dailyValue, quantity, 1, true)}
                />
              </TableWrapper>
            );
          }
        )}
      </Table>
      <Card.Divider />
    </View>
  );
});

export default SummaryTable;
