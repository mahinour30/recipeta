import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {StyleSheet,View,Text, Image,Button,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const OnboardingScreen= ({navigation}) => {


    const {width,height}=Dimensions.get("window");

    const Dots=({selected})=>{
        let backgroundColor;
        backgroundColor= selected ? 'pink' : '#666666';

        return(
            <View style={{
                width:5,
                height:5,
                marginHorizontal:3,
                backgroundColor:backgroundColor,
                borderRadius:3,
            }}
            />
        )
    };
    const Skip=({...props})=>(
        <TouchableOpacity {...props} >
           <Text style={{color:'pink',paddingStart:20 }}>Skip</Text>
       </TouchableOpacity>
        
    );
    const Next=({...props})=>(
       <TouchableOpacity {...props} >
           <Text style={{color:'pink',paddingEnd:20 }}>Next</Text>
       </TouchableOpacity>
    );
    const Done=({...props})=>(
        <TouchableOpacity {...props} >
           <Text style={{color:'pink',paddingEnd:20 }}>Done</Text>
       </TouchableOpacity>
    );
    
  return (
    <Onboarding 
    DoneButtonComponent={Done}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DotComponent={Dots}
    bottomBarColor ='white'
    onSkip={() => navigation.navigate('App', { screen: 'SignUpScreen' })}
    onDone={() => navigation.navigate('SignUpScreen')}
    pages={[
      {
        backgroundColor: 'white',
        image: <Image source={require('../Images/1.png')}  style={{width:width,
            height:height}}/>,
            title: ' ',
            subtitle: ' ',
        
    },
      {
        backgroundColor: 'white',
        image: <Image source={require('../Images/2.png')}
        style={{width:width,
            height:height}} />,
            title: ' ',
            subtitle: ' ',
        
      },
      {
        backgroundColor: 'white',
        image: <Image source={require('../Images/3.png')} 
        style={{width:width,
            height:height}}/>,
        title: ' ',
        subtitle: ' ',
      },
    ]}
  />
  );
};






export default OnboardingScreen;
const styles= StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});
