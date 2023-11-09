import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../authentication/context/AuthProvider';

const List = () => {
  const auth = useContext(AuthContext);

  const onPress = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    auth!.setIsLoggedIn(false);
  };

  return (
    <View>
      <Text>List</Text>
    </View>
  );
};

export default List;
