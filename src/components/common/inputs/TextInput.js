import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import { TextInput as RNTextInput, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import InputStyles from "./styles";

const TextInput = forwardRef(
  (
    {
      size,
      label,
      editable,
      leftIcon,
      rightIcon,
      inputStyle,
      labelStyle,
      errorMessage,
      blurOnSubmit,
      containerStyle,
      ...otherProps
    },
    ref
  ) => {
    //
    const s = InputStyles.text[size];

    return (
      <View style={[s.container, containerStyle]}>
        <Text style={[s.label, labelStyle]}>{label}</Text>
        <View style={s.inputContainer}>
          {leftIcon && (
            <Icon
              size={20}
              type={leftIcon.type}
              name={leftIcon.name}
              color={leftIcon.color}
              containerStyle={s.leftIconContainer}
            />
          )}
          <RNTextInput
            ref={ref}
            style={[s.input, inputStyle]}
            editable={editable}
            blurOnSubmit={blurOnSubmit}
            {...otherProps}
          />
          {rightIcon && (
            <Icon
              size={20}
              type={rightIcon.type}
              name={rightIcon.name}
              color={rightIcon.color}
              containerStyle={s.rightIconContainer}
            />
          )}
        </View>
        {errorMessage && <Text style={s.error}>{errorMessage}</Text>}
      </View>
    );
  }
);

TextInput.defaultProps = {
  label: " ",
  size: "small",
  editable: true,
  blurOnSubmit: true,
};

TextInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
  leftIcon: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
  }),
  rightIcon: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
  }),
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  ...TextInput.propTypes,
};

TextInput.whyDidYouRender = true;

export default memo(TextInput);
