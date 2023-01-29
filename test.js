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
--------------------------------
import React from "react";
import { Text , View} from 'react-native';

const Cat = () => {
  return(
      <View>
        <Text>I am a Cat</Text>
      </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>Yo welcome</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );

};

export default Cafe;
-------------------------------------
import React from 'react';
import {Text,View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>
        Hello, I am {props.name} !
      </Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name='pratham'/>
      <Cat name='pratha' />
      <Cat name='Yo' />
    </View>
  );
};

export default Cafe;
------------------------------------------
import React from 'react';
import {Text,View,Image} from 'react-native';

const CatApp = () => {
  return (
      <View>
        <Image 
        source={{
          uri:'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg',
        }}
          style={{
            width:200,
            height:200
          }}
        />
        <Text> Hello,I am your ca </Text>
        
      </View>
  );
};

export default CatApp;
---------------------------------------
import React , {useState} from 'react';
import {Button,Text,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Cat = props => {
  const [isHungery, SetIsHungery] = useState(true);

  return (
      <View>
        <Text>
          I am {props.name} , and i am {isHungery ? 'hungry' : 'full'} !
        </Text>
        <Button 
          onPress={() => {
            isHungery ? SetIsHungery(false) : SetIsHungery(true);
          }}
          title = {isHungery ? 'Pour me some milk' : 'Thank you'}
        />

      </View>
  );  
};

const Cafe = () => {
  return(
    <>
    <Cat name='Pratham'></Cat>
    <Cat name='yo'/>
    </>
  )
}

export default Cafe;
----------------------------TEXT INPUT---------------
import React ,{useState} from "react";
import {View,Text,Button,TextInput} from 'react-native';

const pizzaTranslator = () => {
  const[text,setText] = useState('');
  return(
    <View style={{padding: 100}}>
      <TextInput 
        style={{height:30, borderColor:'lightgrey',borderWidth:2,borderRadius: 15,paddingLeft: 10}}
        placeholder = 'Type here to translate'
        onChangeText={newText => setText(newText)}
        defaultValue = {text}
        />
        <Text style={{padding:10,fontSize:42}}>
          {text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')
          }
        </Text>
    </View>
  );

};

export default pizzaTranslator;
-------------------------------------------------------
import React from "react";
import { View,ScrollView,Text,Image } from "react-native";

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => {
  <ScrollView>
   <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>

  </ScrollView>
};

export default App;

