import React, {useState} from 'react';
import {StyleSheet, View, Animated, ScrollView} from 'react-native';

const Event = () => {
  const [state, setstate] = useState({
    animation: new Animated.Value(0),
  });
  const backgroundInterpolate = state.animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: state.animation,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <Animated.View style={[styles.box, backgroundStyle]} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 3000,
  },
});

export default Event;
