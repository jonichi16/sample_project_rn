import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../common/components/buttons/Button';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        testID="UsernameInput"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        testID="PasswordInput"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={() => console.log('hello')} />
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({});
