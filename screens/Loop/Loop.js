import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Loop = () => {
  const [state, setstate] = useState({
    animation: new Animated.Value(0),
  });
  const interpolated = state.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(state.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      {iterations: 3},
    ).start();
  };

  const animatedStyles = {
    transform: [
      {
        rotate: interpolated,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
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
    backgroundColor: 'tomato',
  },
});

export default Loop;
