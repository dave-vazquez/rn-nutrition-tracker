import { Card } from "_components/common";
import { Button } from "_components/common";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { default as s } from "./styles";
import DetailsTable from "./tables/DetailsTable";
import SummaryTable from "./tables/SummaryTable";

const NutritionInfo = ({ macros, nutrients, fetchStatus, quantity }) => {
  const [detailsHidden, setDetailsHidden] = useState(true);

  return (
    <Card>
      {fetchStatus === "error" ? (
        <Text style={[s.heading, { textAlign: "center" }]}>
          Oops! Something went wrong :\
        </Text>
      ) : (
          <View>
            <TableHeader />
            <SummaryTable
              macros={macros}
              quantity={quantity}
              visible={detailsHidden}
              loading={fetchStatus === "start"}
            />
            <DetailsTable
              quantity={quantity}
              nutrients={nutrients}
              visible={!detailsHidden}
              loading={fetchStatus === "start"}
            />
            <Button
              title={detailsHidden ? "Show Details" : "Hide Details"}
              onPress={() => setDetailsHidden((detailsHidden) => !detailsHidden)}
              disabled={fetchStatus === "start"}
            />
          </View>
        )}
    </Card>
  );
};

const TableHeader = () => {
  return (
    <View style={s.headingContainer}>
      <Text style={s.heading}>Nutrition Information</Text>
      <Text>(* DV)</Text>
    </View>
  );
};

export default NutritionInfo;
