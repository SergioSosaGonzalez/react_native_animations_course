import React from 'react';
import {View, SafeAreaView, ScrollView, Text, Button} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './styles';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.text}>
            Bienvenido a mis practicas con efectos con efectos
          </Text>
          <Button title="Opacity" onPress={() => navigation.push('Opacity')} />
          <Button
            title="Translate"
            onPress={() => navigation.push('Translate')}
          />
          <Button title="Scale" onPress={() => navigation.push('Scale')} />
          <Button
            title="WidthHeight"
            onPress={() => navigation.push('WidthHeight')}
          />
          <Button
            title="Rotation"
            onPress={() => navigation.push('Rotation')}
          />
          <Button
            title="Porcentage"
            onPress={() => navigation.push('Porcentage')}
          />
          <Button
            title="Absolute"
            onPress={() => navigation.push('Absolute')}
          />
          <Button
            title="Background"
            onPress={() => navigation.push('Background')}
          />
          <Text style={styles.text}>Animated Functions</Text>
          <Button
            color="red"
            title="Spring"
            onPress={() => navigation.push('Spring')}
          />
          <Button
            color="red"
            title="Loop"
            onPress={() => navigation.push('Loop')}
          />
          <Button
            color="red"
            title="Event"
            onPress={() => navigation.push('Event')}
          />
          <Button
            color="red"
            title="Decay"
            onPress={() => navigation.push('Decay')}
          />
          <Button
            color="red"
            title="Add"
            onPress={() => navigation.push('Add')}
          />
          <Button
            color="red"
            title="Divide"
            onPress={() => navigation.push('Divide')}
          />
          <Button
            color="red"
            title="Multiply"
            onPress={() => navigation.push('Multiply')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;
