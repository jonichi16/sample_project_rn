import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Spacing, Typography} from '../../common/styles';

type ListItemProps = {
  item: string;
};

const ListItem = ({item}: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Text testID="ListItem" style={styles.itemText}>
        {item}
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.spacing.sm,
    borderBottomWidth: 1,
  },
  itemText: {
    ...Typography.subHeader.md,
    color: Colors.primary.dark,
  },
});
