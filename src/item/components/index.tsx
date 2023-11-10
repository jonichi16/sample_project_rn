import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';

type ItemProps = NativeStackScreenProps<RootStackParamList, 'Item'>;

const Item = ({route, navigation}: ItemProps) => {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({title: item});
  }, [item, navigation]);

  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
