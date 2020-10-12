
import React from 'react';
import {View,Alert,Text,StyleSheet, Dimensions,TextInput,TouchableOpacity, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import SignUpScreen from './SignUpScreen'

const ChangePasswordScreen= (props) => {

  const ID=props.userID

  const [data, setData] = React.useState({
    current_password:'',
    confirm_password:'',
    new_password:'',
    
    
});


const handleCurrentPassordChange=(val) =>{
  setData({
    ...data,
    current_password:val,
  });
};


const handleConfirmPasswordChange=(val) =>{
  setData({
    ...data,
    confirm_password:val,
  });
};


const handleNewPasswprdChange=(val) =>{
  setData({
    ...data,
    new_password:val,
  });
};


  const Change=()=>{

      const CurrentPassword = data.current_password
      const NewPassword = data.new_password
      const ConfirmPassword = data.confirm_password



    const fbPassword= firestore()
  .collection('users')
  .doc(ID)
  console.log(ID)

  if (fbPassword==data.current_password){
    if (data.password==data.confirm_password){
      firestore()
  .collection('users')
  .doc(ID).update({
    Password:NewPassword
      })
      }
      

  }
     Alert.alert('Password has been changed'); 
  }


  const {colors} = useTheme();

  return ( 


<View style={styles.container}>
              <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'pink'}}></View>
       <View style={[styles.header,{backgroundColor:colors.background}]}>
       <Text style={styles.title}>Change Password</Text>
         <Text style={styles.caption}>please enter your corrent password then enter your new password.</Text>
         <Text style={styles.caption}>this will change your password.</Text>


        </View>

        <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background}}>
          <View style={{flex:1, backgroundColor:'pink',paddingHorizontal:20, borderBottomLeftRadius:75,borderBottomRightRadius:75, borderTopRightRadius:75}}>

          <View style ={styles.action}>
                    <TextInput 
                    multiline={true}
                    numberOfLines={1}
                    placeholder="Current Password."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText = {(val) => handleCurrentPassordChange(val)}

                    />
              </View>

              <View style ={styles.action}>
                    <TextInput 
                    multiline={true}
                    numberOfLines={1}
                    placeholder="New Password."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText = {(val) => handleNewPasswprdChange(val)}

                    />
              </View>
              <View style ={styles.action}>
                    <TextInput 
                    multiline={true}
                    numberOfLines={1}
                    placeholder="Confirm New Password."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText = {(val) => handleConfirmPasswordChange(val)}

                    />

                    
              </View>

         


          </View>


          
          <View style={{flex:0.8}}>
           
          </View>
<TouchableOpacity style={{marginBottom:50,}}onPress={() => Change()}
                   style ={[styles.submit, {backgroundColor:'pink', borderRadius:75}]}>
                  
                      <Text style={styles.textsubmit} color ='grey'>Send</Text>
                  </TouchableOpacity>
              

          </View>
           </View>
    </View>
  );
};
const {width,height}=Dimensions.get("window");
export default ChangePasswordScreen;
const styles = StyleSheet.create({

container:{
  flex:1,
},
header:{
  flex:.6,
  borderBottomLeftRadius:75,
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
  paddingTop:20,
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
  marginTop:20
},
textInput:{
  flex:1,
  marginTop: Platform.OS == 'ios' ? 0 : -12,
  paddingLeft:10,
  color:'gray',
},
button:{
  alignItems:'center',
  paddingTop:20
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