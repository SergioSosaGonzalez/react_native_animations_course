import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Translate = () => {
  const [state, setState] = useState({
    animation: new Animated.Value(0),
  });
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 100,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setState({
        animation: new Animated.Value(0),
      });
      /*Animated.timing(state.animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();*/
    });
  };

  const animatedStyles = {
    transform: [{translateX: state.animation}],
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

export default Translate;
