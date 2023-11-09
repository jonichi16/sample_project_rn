import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../common/styles';

type ListHeaderProps = {
  title: string;
};

const ListHeader = ({title}: ListHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text testID="ListHeader" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    padding: Spacing.spacing.sm,
    borderBottomWidth: 1,
  },
  headerText: {
    ...Typography.header.lg,
    color: Colors.primary.dark,
  },
});
