import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../common/components/buttons/Button';

const List = () => {
  const onPress = async () => {
    await AsyncStorage.removeItem('isLogin');
  };

  return (
    <View>
      <Text>List</Text>
      <Button title="Logout" onPress={onPress} />
    </View>
  );
};

export default List;
