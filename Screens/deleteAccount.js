
import React from 'react';
import {View,Text,StyleSheet,Alert, Dimensions,TextInput,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; 


const DeleteAccountScreen= ({navigation}) => {


  const SignOut=()=>{
    auth()
.signOut()
.then(navigation.navigate('SignInScreen'))
Alert.alert('Account has been deleted'); 

}



  const {colors} = useTheme();

  return (
    <View style={styles.container}>
                    <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'pink'}}></View>

       <View style={[styles.header,{backgroundColor:colors.background}]}>
       <Text style={styles.title}>Delete Account</Text>
         <Text style={styles.caption}>WARNING!!.</Text>
         <Text style={styles.caption}>this action can not be undone.</Text>

        </View>

        <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background}}>
          <View style={{flex:1, backgroundColor:'pink',paddingHorizontal:20, borderBottomRightRadius:75,borderBottomLeftRadius:75, borderTopLeftRadius:75,paddingTop:35}}>

          <View style ={styles.action}>
                    <TextInput 
                    numberOfLines={1}
                    placeholder="Enter Your Password."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    />
              </View>
              <View style ={styles.action}>
                    <TextInput 
                    numberOfLines={1}
                    placeholder="Confirm Your Password."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    />
              </View>


              


          </View>
          <View style = {[styles.button, {paddingHorizontal:30}]}> 
                  <TouchableOpacity 
                                  onPress={()=>{SignOut()}}
                                  style ={[styles.submit, {backgroundColor:'pink' ,borderRadius:75}]}>
                      <Text style={styles.textsubmit} color ='grey'>Submit</Text>
                  </TouchableOpacity>
                 
                  
                  </View>
          <View style={{flex:0.5}}>
          </View>
          </View>
           </View>
    </View>
  );
};
const {width,height}=Dimensions.get("window");
export default DeleteAccountScreen;
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
  paddingTop:5,
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
  paddingBottom:10,
  paddingTop:10
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