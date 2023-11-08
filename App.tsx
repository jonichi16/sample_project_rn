import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Splash from './src/common/components/Splash';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'tomato'} barStyle={'default'} />
      <View style={styles.container}>
        <Splash />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
