import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spacing, Typography} from '../../common/styles';

const DataProcessing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Processing Data...</Text>
    </View>
  );
};

export default DataProcessing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.spacing.sm,
  },
  text: {
    ...Typography.subHeader.lg,
  },
});
