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
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  // useEffect(() => {
  //   Animated.timing(animatedValue, {
  //     toValue: 0.3,
  //     duration: 3000,
  //     useNativeDriver: true,
  //     easing:Easing.bounce
  //   }).start();
  // });

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      friction:3,
      tension:40
    }).start();
  };

  const animatedStyle = {
   transform:[{scale:animatedValue}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <Animated.View style={([styles.button], animatedStyle)}>
          <Text style={styles.Text}>Press Me</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
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
    borderWidth:3,
    borderColor:"blue"
  },
  Text: {
    color: 'purple',
    fontSize: 20,
    borderWidth:3,
    borderColor:"black",
    width: 100,
    height: 50,
    textAlign:"center"
  },
});
