import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });
  const interpolateRotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotation,
      },
    ],
  };
  



  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.Text}>Spinnerr</Text>
      </Animated.View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'blue',
  },
  Text: {
    color: 'white',
    textAlign: 'center',
  },
});


// import React, {useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ScrollView,
//   Image,
//   Animated,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Easing,
//   TouchableWithoutFeedback,
// } from 'react-native';

// const {height}=Dimensions.get("window")

// const App = () => {
//   const animatedValue1 = useRef(new Animated.Value(0)).current;
//   const animatedValue2 = useRef(new Animated.Value(0)).current;
//   const animatedValue3 = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.stagger(700,[
//       Animated.timing(animatedValue1, {
//         toValue: height,
//         duration: 2500,
//         useNativeDriver:true
        
//       }),
//       Animated.timing(animatedValue2, {
//         toValue: height,
//         duration: 2500,
//         useNativeDriver:true
//       }),
//       Animated.timing(animatedValue3, {
//         toValue: height,
//         duration: 2500,
//         useNativeDriver:true
//       })
    
//     ]).start()
//   });

 

//   const animatedStyle1 = {
//     transform:[{translateY:animatedValue1}]
//   };
//   const animatedStyle2 = {
//     transform:[{translateY:animatedValue2}]
//   };
//   const animatedStyle3 = {
//     transform:[{translateY:animatedValue3}]
//   };
  

//   return (
//     <View style={styles.container}>
     
       
//       <Animated.View style={[styles.button, animatedStyle1]}/>
//       <Animated.View style={[styles.button, animatedStyle2]}/>
//       <Animated.View style={[styles.button, animatedStyle3]}/>
      
      
//     </View>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//    flexDirection:"row"
//   },
//   button: {
//   flex:1,
//   backgroundColor:"#333",
//   marginHorizontal:5
//   },

// });



