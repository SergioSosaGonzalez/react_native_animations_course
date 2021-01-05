import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const WidthHeight = () => {
  const [state, setstate] = useState({
    animation: new Animated.Value(150),
  });
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(state.animation, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyles = {
    width: state.animation,
    //height: state.animation,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Hola mundo</Text>
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

export default WidthHeight;
