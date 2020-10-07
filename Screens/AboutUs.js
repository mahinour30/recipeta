
import React from 'react';
import {View,Text, Image} from 'react-native';


const AboutUsScreen= ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Image style={{width:300, height:300}} source = { require('../Images/logo.png')}/>
      
      <Text>Copyright 2020, Recipeta,Inc. </Text>
     <Text style={{fontSize:10}}> ALL rights reservred</Text>
    </View>
  );
};

export default AboutUsScreen;
