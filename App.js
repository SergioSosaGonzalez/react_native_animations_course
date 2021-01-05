/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import {
  Home,
  Opacity,
  Translate,
  Scale,
  WidthHeight,
  Rotation,
  Porcentage,
  Absolute,
  Background,
  Multiply,
  Modulo,
  Loop,
  Divide,
  Decay,
  Add,
  Event,
  Spring,
} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Opacity" component={Opacity} />
        <Stack.Screen name="Translate" component={Translate} />
        <Stack.Screen name="Scale" component={Scale} />
        <Stack.Screen name="WidthHeight" component={WidthHeight} />
        <Stack.Screen name="Rotation" component={Rotation} />
        <Stack.Screen name="Porcentage" component={Porcentage} />
        <Stack.Screen name="Absolute" component={Absolute} />
        <Stack.Screen name="Background" component={Background} />
        <Stack.Screen name="Spring" component={Spring} />
        <Stack.Screen name="Multiply" component={Multiply} />
        <Stack.Screen name="Modulo" component={Modulo} />
        <Stack.Screen name="Loop" component={Loop} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Divide" component={Divide} />
        <Stack.Screen name="Decay" component={Decay} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
