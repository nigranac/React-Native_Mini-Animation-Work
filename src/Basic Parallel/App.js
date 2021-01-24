import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

const App = () => {
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue1, {
        toValue: 300,
        duration: 1500,
        useNativeDriver:true
        
      }),
      Animated.spring(animatedValue2, {
        toValue: 3,
        duration: 2500,
        useNativeDriver:true
      })
    
    ]).start()
  });

  const animatedStyle = {
    transform: [
      {
        translateY: animatedValue1,
      },
      {
        scale: animatedValue2,
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



