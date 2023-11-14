import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../styles';

type ButtonProps = {
  title: string;
  testID?: string;
  disabled?: boolean;
  style?: ViewStyle;
  onPress: () => void;
};

const Button = ({title, testID, disabled, style, onPress}: ButtonProps) => {
  return (
    <Pressable
      role="button"
      testID={testID}
      disabled={disabled || false}
      style={({pressed}) => [
        styles.button,
        {
          ...(style || {width: '100%'}),
          opacity: pressed ? 0.8 : disabled ? 0.45 : 1,
          transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
          backgroundColor: disabled ? 'darkgray' : Colors.primary.p600,
        },
      ]}
      onPress={onPress}>
      <Text testID="ButtonText" style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: Spacing.spacing.sm,
  },
  buttonText: {
    ...Typography.header.md,
    color: Colors.primary.dark,
    textAlign: 'center',
  },
});
