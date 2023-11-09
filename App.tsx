import {Text, View} from 'react-native';
import React from 'react';
import Button from './src/common/components/buttons/Button';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Button title="Click Me" onPress={() => console.log('Hello')} />
    </View>
  );
};

export default App;
