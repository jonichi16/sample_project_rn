import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../common/components/buttons/Button';
import {Spacing, Typography} from '../../common/styles';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    Keyboard.dismiss();

    if (username && password) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID="UsernameInput"
        placeholder="Username"
        value={username}
        style={styles.input}
        onChangeText={setUsername}
      />
      <TextInput
        testID="PasswordInput"
        placeholder="Password"
        value={password}
        style={styles.input}
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
});
