import PropTypes from "prop-types";
import React, { forwardRef, memo } from "react";
import { TextInput as RNTextInput, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { textInputStyles } from "./styles";

const TextInput = forwardRef(
  (
    {
      label,
      variant,
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
    const styles = textInputStyles[variant];

    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <View style={styles.inputContainer}>
          {leftIcon && (
            <Icon
              size={20}
              type={leftIcon.type}
              name={leftIcon.name}
              color={leftIcon.color}
              containerStyle={styles.leftIconContainer}
            />
          )}
          <RNTextInput
            ref={ref}
            style={[styles.input, inputStyle]}
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
              containerStyle={styles.rightIconContainer}
            />
          )}
        </View>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
    );
  }
);

TextInput.defaultProps = {
  label: " ",
  variant: "base",
  editable: true,
  blurOnSubmit: true,
};

TextInput.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["base", "large"]),
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
