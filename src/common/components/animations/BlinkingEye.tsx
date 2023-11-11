import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from '../../styles';

type BlinkingEyeProps = {
  isScrolling: boolean;
};

const BlinkingEye = ({isScrolling}: BlinkingEyeProps) => {
  const eyelid = useRef(new Animated.Value(0)).current;
  const eyeball = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  // const animationStart = Animated.loop(
  //   Animated.parallel([
  //     // Animation for eyelid
  //     Animated.sequence([
  //       Animated.timing(eyelid, {
  //         toValue: 3,
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyelid, {
  //         toValue: -3,
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyelid, {
  //         toValue: -9,
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyelid, {
  //         toValue: 5,
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyelid, {
  //         toValue: 7,
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyelid, {
  //         toValue: 0,
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //     ]),

  //     // Animation for eyeball
  //     Animated.sequence([
  //       Animated.timing(eyeball, {
  //         toValue: {x: 0, y: 3},
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyeball, {
  //         toValue: {x: 0, y: -3},
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyeball, {
  //         toValue: {x: -7, y: -7},
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyeball, {
  //         toValue: {x: -11, y: 3},
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyeball, {
  //         toValue: {x: -3, y: 6},
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(eyeball, {
  //         toValue: {x: 0, y: 0},
  //         duration: 200,
  //         useNativeDriver: true,
  //       }),
  //     ]),
  //   ]),
  //   {iterations: -1},
  // );

  const animationStart = Animated.loop(
    Animated.parallel([
      // Animation for eyelid
      Animated.sequence([
        Animated.timing(eyelid, {
          toValue: 13,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(eyelid, {
          toValue: 13,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(eyelid, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(eyelid, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // Animation for eyeball
      Animated.sequence([
        Animated.timing(eyeball, {
          toValue: {x: 0, y: 9},
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(eyeball, {
          toValue: {x: 0, y: 9},
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(eyeball, {
          toValue: {x: 0, y: 0},
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(eyeball, {
          toValue: {x: 0, y: 0},
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]),
    {iterations: -1},
  );

  const animationReset = Animated.parallel([
    Animated.timing(eyelid, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }),
    Animated.timing(eyeball, {
      toValue: {x: 0, y: 0},
      duration: 200,
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    console.log(isScrolling);
    isScrolling ? animationStart.start() : animationReset.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolling]);

  return (
    <View style={styles.eye}>
      <Animated.View
        style={[{transform: [{translateY: eyelid}]}, styles.eyelid]}
      />
      <Animated.View
        style={[{transform: eyeball.getTranslateTransform()}, styles.eyeball]}
      />
    </View>
  );
};

export default BlinkingEye;

const styles = StyleSheet.create({
  eye: {
    backgroundColor: Colors.primary.light,
    width: 45,
    height: 45,
    borderWidth: 6,
    borderColor: Colors.primary.dark,
    borderRadius: 60,
    overflow: 'hidden',
  },
  eyelid: {
    width: '100%',
    height: '100%',
    backgroundColor: 'darkslategrey',
    borderBottomWidth: 6,
    borderColor: Colors.primary.dark,
    position: 'absolute',
    left: 0,
    top: '-60%',
    zIndex: 10,
  },
  eyeball: {
    width: 14,
    height: 14,
    position: 'absolute',
    left: 11,
    top: 8,
    backgroundColor: Colors.primary.dark,
    borderRadius: 30,
  },
});
