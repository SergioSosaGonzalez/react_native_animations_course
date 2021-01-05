import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Absolute = () => {
  const [state, setState] = useState({
    animation: new Animated.Value(0),
  });
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(state.animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyles = {
    top: state.animation,
    left: state.animation,
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
    position: 'absolute',
    left: 0,
    top: 0,
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default Absolute;
