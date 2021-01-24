import React from 'react';
import {View, Animated, ScrollView, Dimensions, StatusBar,Image} from 'react-native';
import Texter from './Texter';

const Header_Maximum_Height = 800;

const Header_Minimum_Height = 20;
const App = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const scale = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [300, 100],
    extrapolate: 'clamp',
  });
  return (
    <View>
        <StatusBar hidden/>
        {/* <View>
            <Image
            source={require("./assets/rosee.png")}
            style={{width:Dimensions.get("window").width,height:Dimensions.get("window").height/3}}
            />
        </View> */}
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        <Animated.Image
          source={require('./assets/livingroom.png')}
          style={{
            height: scale,

            width: Dimensions.get('window').width,
          }}
        />

        <View>
          <Texter />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
