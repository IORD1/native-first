import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! yo</Text>
      <StatusBar style="auto" />
      <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="You can type in me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slategrey',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

------------------------------------------------------

import React from 'react';
import {Text, TextInput} from 'react-native';


const getFullName = (
  firstName,secondName,thirdName
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};



const cat = () => {
  return (
    <view>
      <text>
        Hello , i am ...
      </text>
      <TextInput
        style={{
          height : 40,
          borderColor : 'gray',
          borderWidth : 1,
        }}
        defaultValue = 'Name me '
        />
    </view>
  );

};

export default cat; 