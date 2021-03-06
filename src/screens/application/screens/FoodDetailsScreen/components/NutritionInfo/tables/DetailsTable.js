import { Card } from "_components/common";
import { calcNetTotal } from "_utils";
import React, { memo } from "react";
import { View } from "react-native";
import { Table, TableWrapper } from "react-native-table-component";
import NutrientData from "../cells/NutrientData";
import NutrientName from "../cells/NutrientName";
import { default as s } from "../styles";

const DetailsTable = memo(({ nutrients, quantity, loading, visible }) => {
  return (
    <View style={{ display: visible ? "flex" : "none" }}>
      <Table>
        {Object.values(nutrients).map(
          (
            { name, amount, unit, dailyValue, keyNutrient, macroNutrient },
            key
          ) => {
            return (
              <View key={key}>
                <TableWrapper key={key} style={s.table_row}>
                  <NutrientName
                    flex={7}
                    name={name}
                    keyNutrient={keyNutrient === true}
                    macroNutrient={macroNutrient === true}
                  />
                  <NutrientData
                    flex={3}
                    loading={loading}
                    keyNutrient={keyNutrient === true}
                    data={calcNetTotal(amount, quantity, 1, true)}
                  />
                  <NutrientData
                    flex={1.5}
                    data={unit}
                    keyNutrient={keyNutrient === true}
                  />
                  <NutrientData
                    flex={3}
                    loading={loading}
                    keyNutrient={keyNutrient === true}
                    data={calcNetTotal(dailyValue, quantity, 1, true) + " %"}
                  />
                </TableWrapper>
                {name === "Protein" && <Card.Divider />}
              </View>
            );
          }
        )}
      </Table>
    </View>
  );
});

export default DetailsTable;
