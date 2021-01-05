import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Background = () => {
  const [state, setState] = useState({
    animation: new Animated.Value(0),
  });

  const boxInterpolation = state.animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)', 'green'],
  });

  const colorInterPolation = state.animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)', 'red'],
  });
  const textAnimatedStyle = {
    color: colorInterPolation,
  };
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(state.animation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    });
  };

  const boxAnimmatedStyle = {
    backgroundColor: boxInterpolation,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimmatedStyle]}>
          <Animated.Text style={textAnimatedStyle}>Hello world!</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Background;
