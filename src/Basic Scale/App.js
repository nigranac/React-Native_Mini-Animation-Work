import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback
} from 'react-native';

const App = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  

 const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue:2,
      duration: 1500,
      useNativeDriver:true
    }).start();
  }


  const animatedStyles = {
    transform: [
      { scale:animatedValue }
    ]
  }
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box,animatedStyles]}>

          <Text style={styles.Text}>HELLO WORLD</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"gold"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    justifyContent:"center",
    alignItems:"center"
  },
  Text:{
  fontSize:20
  }
});

