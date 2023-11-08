import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Splash = () => {
  const eyelid = useRef(new Animated.Value(0)).current;
  const eyeball = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        // Animation for eyelid
        Animated.sequence([
          Animated.timing(eyelid, {
            toValue: 5,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: -5,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),

        // Animation for eyeball
        Animated.sequence([
          Animated.timing(eyeball, {
            toValue: {x: 20, y: 80},
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: 100, y: 0},
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]),
      {
        iterations: -1,
      },
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.container, styles.background]}>
      <Animated.View
        style={[{transform: [{translateY: eyelid}]}, styles.eyelid]}
      />
      <Animated.View
        style={[
          {transform: eyeball.getTranslateTransform()},
          // eyeball.getLayout(),
          styles.eyeball,
        ]}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'tomato',
  },
  eyelid: {
    width: 100,
    height: 20,
    backgroundColor: 'darkgray',
  },
  eyeball: {
    width: 30,
    height: 30,
    backgroundColor: 'darkgray',
    borderRadius: 30,
  },
});
