import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Divide = () => {
  const [state, setstate] = useState({
    animation: new Animated.Value(0),
  });
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 200,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(state.animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const randomValue = 2;
  const newAnimation = Animated.divide(state.animation, randomValue);
  const animatedStyles = {
    transform: [
      {
        translateY: newAnimation,
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

export default Divide;
