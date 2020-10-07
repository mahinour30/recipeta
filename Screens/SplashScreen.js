import React from 'react';
import {View,Text, Dimensions, StyleSheet, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';


const SplashScreen= ({navigation}) => {
    setTimeout( () =>{
        navigation.navigate('SignInScreen')}, 1500);
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Animatable.Image 
        animation="bounceInUp" duraton="750"
        source ={require('../Images/logo.png')} style={styles.logo} resizeMode="stretch"/>
      </View>
     
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height*0.28;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width: height_logo,
        height: height_logo,
    },
    
});
