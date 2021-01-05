import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Rotation = () => {
  const [state, setstate] = useState({
    animation: new Animated.Value(0),
  });
  const rotateInterpolite = state.animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [
      {
        rotate: rotateInterpolite,
      },
    ],
  };
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 180,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(state.animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
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

export default Rotation;
