import { Colors } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import Button from "./Button";
import { buttonStyles } from "./styles";

const s = buttonStyles.next;

const NextButton = ({ gutterTop, ...ButtonProps }) => {
  return (
    <View>
      <View style={{ flex: 1, minHeight: gutterTop }} />
      <View style={s.buttonWrapper}>
        <Button
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
    </View>
  );
};

NextButton.defaultProps = {
  gutterTop: 50,
};

NextButton.propTypes = {
  gutterTop: PropTypes.number,
  ...Button.propTypes,
};

export default NextButton;
