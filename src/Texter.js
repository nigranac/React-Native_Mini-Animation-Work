import React from 'react';
import {View, Text} from 'react-native';

const Texter = () => {
  return (
    <View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>
          Downtown charming Lisbon 2
        </Text>
        <View style={{marginVertical: 40}}>
          <Text style={{fontSize: 25}}>4.10(42) . Lisboa,Portugal</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderWidth: 2,
            marginVertical: 20,
          }}></View>
        <View>
          <Text style={{fontSize: 25}}>
            This is a rare find.Joao's place on Airbnb is usually fully booked
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderWidth: 2,
            marginVertical: 20,
          }}></View>

        <View>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>
            Entire flat hosted by Joao
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 25}}>3 guest</Text>
          <Text style={{fontSize: 25}}>1 bedroom</Text>
          <Text style={{fontSize: 25}}>1 bed</Text>
          <Text style={{fontSize: 25}}>1 bathroom</Text>
        </View>
        <View>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>
            Our hotel is completely renovated in 2013 and has all the features
            and amenities to fulfill your needs. All of the rooms are equipped
            with free-wireless Internet.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Texter;
