import React ,{useState} from 'react';
import { StyleSheet,View,Text, } from "react-native";


const Home = () => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.icon}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor : '#656565',
        width : '80%',
        height : '50%',
        borderRadius : 30,
        borderColor : 'darkgrey',
        borderWidth :1,
        

    }
});

export default Home;

