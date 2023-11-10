import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Spacing, Typography} from '../../common/styles';

type ListItemProps = {
  item: string;
  index: number;
  goToItem: (item: string) => void;
};

const ListItem = ({item, index, goToItem}: ListItemProps) => {
  return (
    <Pressable style={styles.container} onPress={() => goToItem(item)}>
      <Text testID="ListItem" style={styles.itemText}>
        {item}
      </Text>
    </Pressable>
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
