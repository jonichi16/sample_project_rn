import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../common/components/buttons/Button';
import {Colors, Spacing, Typography} from '../../common/styles';
import {userCredentials} from '../data/sampleUser';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onPress = () => {
    Keyboard.dismiss();

    if (
      userCredentials.username === username &&
      userCredentials.password === password
    ) {
      console.log('authenticated');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : <></>}
      <TextInput
        testID="UsernameInput"
        placeholder="Username"
        value={username}
        style={[
          {borderColor: error ? Colors.primary.error : Colors.primary.border},
          styles.input,
        ]}
        onChangeText={setUsername}
      />
      <TextInput
        testID="PasswordInput"
        placeholder="Password"
        value={password}
        style={[
          {borderColor: error ? Colors.primary.error : Colors.primary.border},
          styles.input,
        ]}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Login" style={styles.button} onPress={onPress} />
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.spacing.md,
    padding: Spacing.spacing.md,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    padding: Spacing.spacing.sm,
    ...Typography.body.md,
  },
  button: {
    width: '50%',
  },
  error: {
    ...Typography.subHeader.md,
    color: Colors.primary.error,
  },
});
