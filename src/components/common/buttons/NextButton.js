import { Colors } from "_global_styles";
import React from "react";
import { View } from "react-native";
import Button from "./Button";
import ButtonStyles from "./styles";

const s = ButtonStyles.nextButton;

const NextButton = ({ ...ButtonProps }) => {
  return (
    <View style={s.buttonWrapper}>
      <Button
        iconRight
        title="Next"
        raised={true}
        titleStyle={s.titleStyle}
        icon={{
          size: 30,
          name: "arrow-right",
          color: Colors.white,
        }}
        {...ButtonProps}
      />
    </View>
  );
};

NextButton.propTypes = {
  ...Button.propTypes,
};

export default NextButton;
