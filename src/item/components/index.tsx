import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';
import useLorem from '../hooks/useLorem';
import {Colors, Spacing, Typography} from '../../common/styles';

type ItemProps = NativeStackScreenProps<RootStackParamList, 'Item'>;

const Item = ({route, navigation}: ItemProps) => {
  const {item} = route.params;
  const {lorem, isLoading} = useLorem();

  useEffect(() => {
    navigation.setOptions({title: item});
  }, [item, navigation]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.lorem}>{lorem}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.md,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    ...Typography.subHeader.lg,
    color: Colors.primary.dark,
  },
  lorem: {
    ...Typography.body.md,
    color: Colors.primary.dark,
  },
});
