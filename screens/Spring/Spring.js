import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Spring = () => {
  const [state, setstate] = useState({
    animation: new Animated.Value(1),
  });

  const animatedStyles = {
    transform: [{scale: state.animation}],
  };
  const handlePress = () => {
    Animated.spring(state.animation, {
      toValue: 2,
      useNativeDriver: false,
    }).start(() => {
      Animated.spring(state.animation, {
        toValue: 1,
        friction: 2,
        tension: 160,
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
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
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});

export default Spring;
