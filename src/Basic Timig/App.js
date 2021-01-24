import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Easing
} from 'react-native';

const App = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0.3,
      duration: 3000,
      useNativeDriver: true,
      easing:Easing.bounce
    }).start();
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity: animatedValue}]} />
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
  box: {
    backgroundColor: 'tomato',
    width: 200,
    height: 200,
  },
});
