
import React from 'react';
import {View,Text,StyleSheet, Dimensions,TextInput,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';


const ForgotPasswordScreen= ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
                    <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'pink'}}></View>

       <View style={[styles.header,{backgroundColor:colors.background}]}>
       <Text style={styles.title}>Forgot Password?</Text>
         <Text style={styles.caption}>To reset your password, Pleaser submit your Email adrees, Check your Emails, Then follow the sent instructons.</Text>
        </View>

        <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background}}>
          <View style={{flex:1, backgroundColor:'pink',paddingHorizontal:20, borderBottomRightRadius:75,borderBottomLeftRadius:75, borderTopLeftRadius:75,paddingTop:95}}>

          <View style ={styles.action}>
                    <TextInput 
                    numberOfLines={1}
                    placeholder="Enter Email here."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    />
              </View>


              <View style = {styles.button}> 
                  <TouchableOpacity style ={styles.submit}>
                  
                   <LinearGradient colors={['white', 'pink']} style={styles.submit}>
                      <Text style={styles.textsubmit} color ='grey'>Submit</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                 
                  
                  </View>


          </View>
          <View style={{flex:0.5}}>
          </View>
          </View>
           </View>
    </View>
  );
};
const {width,height}=Dimensions.get("window");
export default ForgotPasswordScreen;
const styles = StyleSheet.create({

container:{
  flex:1,
},
header:{
  flex:1,
  height:0.61*height,
  borderBottomRightRadius:75,
},
footer:{
  flex:2,
},
caption:{
  fontSize:13,
  paddingHorizontal:40,
  paddingTop:10,
  color:'pink',
},
title:{
  fontWeight:'bold',
  paddingStart:40,
  fontSize:30,
  paddingTop:105,
  color:'pink',
},
text_footer:{
  color:'gray',
  fontSize:15,
},

action:{
  flexDirection:'row',
  marginTop:0,
  borderBottomWidth:1,
  borderBottomColor:'gray',
  paddingBottom:0,
},
textInput:{
  flex:1,
  marginTop: Platform.OS == 'ios' ? 0 : -12,
  paddingLeft:10,
  color:'gray',
},
button:{
  alignItems:'center',
  marginTop:50,
},button:{
  alignItems:'center',
  marginTop:50,
},
submit:{
  width:'100%',
  height:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
},
textSign:{
  fontSize:18,
  fontWeight:'bold',
},
})