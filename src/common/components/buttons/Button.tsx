import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../styles';

type ButtonProps = {
  title: string;
  testID?: string;
  style?: ViewStyle;
  onPress: () => void;
};

const Button = ({title, testID, style, onPress}: ButtonProps) => {
  return (
    <Pressable
      role="button"
      testID={testID}
      style={({pressed}) => [
        {
          ...(style || {width: '100%'}),
          backgroundColor: pressed ? Colors.primary.p500 : Colors.primary.p600,
          transform: pressed ? [{scale: 0.98}] : [{scale: 1}],
        },
        styles.button,
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
