import {Animated, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from '../styles';

const Splash = () => {
  const eyelid = useRef(new Animated.Value(0)).current;
  const eyeball = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        // Animation for eyelid
        Animated.sequence([
          Animated.timing(eyelid, {
            toValue: 8,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: -8,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: -8,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: -14,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: 8,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: 20,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyelid, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
          }),
        ]),

        // Animation for eyeball
        Animated.sequence([
          Animated.timing(eyeball, {
            toValue: {x: 0, y: 8},
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: 0, y: -8},
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: 0, y: -8},
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: -14, y: -8},
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: -20, y: 8},
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: 0, y: 12},
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(eyeball, {
            toValue: {x: 0, y: 0},
            duration: 350,
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
    <>
      <StatusBar backgroundColor={Colors.primary.p600} barStyle={'default'} />
      <View style={[styles.container, styles.background]}>
        <View style={styles.eye}>
          <Animated.View
            style={[{transform: [{translateY: eyelid}]}, styles.eyelid]}
          />
          <Animated.View
            style={[
              {transform: eyeball.getTranslateTransform()},
              styles.eyeball,
            ]}
          />
        </View>
      </View>
    </>
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
    backgroundColor: Colors.primary.p600,
  },
  eye: {
    backgroundColor: Colors.primary.light,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: Colors.primary.dark,
    borderRadius: 60,
    overflow: 'hidden',
  },
  eyelid: {
    width: '100%',
    height: '100%',
    backgroundColor: 'darkslategrey',
    borderBottomWidth: 10,
    borderColor: Colors.primary.dark,
    position: 'absolute',
    left: 0,
    top: '-50%',
    zIndex: 10,
  },
  eyeball: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: 30,
    top: 22,
    backgroundColor: Colors.primary.dark,
    borderRadius: 30,
  },
});
