import { Colors } from "_global_styles";
import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import InputStyles from "./styles";

const s = InputStyles.spinner.small;

const NumberInput = ({ label, value, onChange, step }) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <InputSpinner
        min={1}
        max={1000}
        speed={10}
        height={28}
        step={step}
        type="real"
        precision={1}
        value={value}
        rounded={false}
        style={s.spinner}
        onChange={onChange}
        inputStyle={s.input}
        color={Colors.blue.s2}
      />
    </View>
  );
};

NumberInput.defaultProps = {
  step: 1,
  label: " ",
};

NumberInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
};

export default NumberInput;
