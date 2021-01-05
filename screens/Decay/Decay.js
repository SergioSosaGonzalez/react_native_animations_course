import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
} from 'react-native';

const Decay = () => {
  const [state, setstate] = useState({
    animation: new Animated.ValueXY(0),
  });

  const [panResponder, setPanResponder] = useState(null);

  useEffect(() => {
    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          state.animation.extractOffset();
        },
        onPanResponderMove: Animated.event(
          [null, {dx: state.animation.x, dy: state.animation.y}],
          {useNativeDriver: false},
        ),
        onPanResponderRelease: (e, {vx, vy}) => {
          Animated.decay(state.animation, {
            velocity: {x: vx, y: vy},
            deceleration: 0.977,
            useNativeDriver: false,
          }).start();
        },
      }),
    );
  }, []);

  const animatedStyles = {
    transform: state.animation.getTranslateTransform(),
  };

  return (
    <View style={styles.container}>
      {panResponder !== null ? (
        <Animated.View
          style={[styles.box, animatedStyles]}
          {...panResponder.panHandlers}
        />
      ) : (
        <></>
      )}
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

export default Decay;
