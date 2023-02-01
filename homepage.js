import React ,{useState} from 'react';
import { StyleSheet,View,Text,Image, TextInput,TouchableOpacity  } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Home = () => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Image source={require('./assets/accountc.png')} style={styles.account} />
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.entername}>Enter your Username</Text>
                    <TextInput 
                        style={styles.inputbox}
                        placeholder='Enter your name'
                        ></TextInput>
                    <Text style={styles.entername}>Enter your Password</Text>
                    <TextInput 
                        style={styles.inputbox}
                        placeholder='Enter your name'
                        ></TextInput>
                    <BouncyCheckbox 
                        fillColor="lightblue"
                        unfillColor="white"
                        text="Accept Terms and Conditions"
                        innerIconStyle={{ borderWidth: 2 }}
                        style={styles.checkboxed}
                     />
                    <TouchableOpacity 
                        style={styles.buttoned}
                        onPress={() => {}}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttoned : {
        margin : 10 ,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius : 30,
    }, 
    checkboxed : {
        marginTop : 15
    },
    entername : {
        fontSize : 20,
        color : 'slategrey',
        marginTop : 5,
        marginBottom : 5,

    },
    inputbox:{
        borderColor : 'lightgrey',
        borderWidth : 2,
        height : '15%',
        width : '90%',
        fontSize : 20,
        borderRadius : 8,
        padding : 5,
        marginBottom : 8
    },
    icon : {
        height : '20%'
    },
    innerbox : {
        height : '80%',
        width : '100%',
    },
    account : {
        height : '100%',
        aspectRatio : 1/1,
        borderColor : 'slategrey',
        borderWidth : 0,
        borderRadius : 10,
        margin : 2,
    },
    background : {
        backgroundColor : 'black',
        flex : 1,
        color : 'white',
        alignItems : 'center',
        justifyContent : 'center'
    },
    heading : {
        fontSize : 20,
        color : 'white',

    },
    container : {
        backgroundColor : '#fff',
        width : '80%',
        height : '150',
        borderRadius : 30,
        borderColor : 'darkgrey',
        borderWidth :1,
        alignItems : 'center',
        padding : 10

    }
});

export default Home;

