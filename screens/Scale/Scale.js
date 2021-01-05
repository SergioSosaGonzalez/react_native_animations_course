import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const Scale = () => {
  const [state, setState] = useState({
    animation: new Animated.Value(1),
  });
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: -2,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      //setState({animation: new Animated.Value(1)});
    });
  };

  const animatedStyles = {
    transform: [{scale: state.animation}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Hola que tal a todos</Text>
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
    backgroundColor: 'tomato',
  },
});

export default Scale;
