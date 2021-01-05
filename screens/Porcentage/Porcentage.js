import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Porcentage = () => {
  const [state, setState] = useState({
    animation: new Animated.Value(0),
  });
  const widthInterpolate = state.animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['20%', '50%', '80%'],
  });
  const heightInterpolate = state.animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['20%', '30%', '40%'],
  });
  const animatedStyles = {
    width: widthInterpolate,
    height: heightInterpolate,
  };
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 2,
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

export default Porcentage;
