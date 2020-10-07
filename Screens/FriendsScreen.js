import React from 'react';

import {StyleSheet,View,Text} from 'react-native';


const FriendsScreen= ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Friends Screen</Text>
    </View>
  );
};


const styles= StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});




export default FriendsScreen;