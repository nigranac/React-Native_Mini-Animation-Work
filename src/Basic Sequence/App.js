import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

const App = () => {
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animatedValue1, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue2, {
        toValue: 3,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue1, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue2, {
        toValue: 0.5,
        useNativeDriver: true,
      }),
    ]).start();
  });

  const animatedStyle = {
    transform: [{scale: animatedValue2}, {translateY: animatedValue1}],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.Text}>animation</Text>
      </Animated.View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'tomato',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'blue',
  },
  Text: {
    color: 'purple',
    fontSize: 20,
    borderWidth: 3,
    borderColor: 'black',
    width: 100,
    height: 50,
    textAlign: 'center',
  },
});
