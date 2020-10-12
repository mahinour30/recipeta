import React , {useContext, useState, useEffect}from 'react';
import {View,Text, StyleSheet,TextInput, Alert, Platform, TouchableOpacity, Dimensions, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../components/context';
import Users from './Users';
import {useTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';



const SignInScreen= ({navigation}) => {

  useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '523256204672-r84egr6miqs79ncrq4sn5rspddtp47e9.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    

  })



  const {colors} = useTheme();


  const [data, setData] = React.useState({
      email:'',
      password:'',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword:true,
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }




  const {signIn} = React.useContext(AuthContext);

    const textInputChange =(val) =>{
      if (val.trim().length != 0 ){
        setData ({
          ...data,
          email:val,
          check_textInputChange:true,
          isValidUser:true,
        });
      } else {
        setData({
          ...data,
          email:val,
          check_textInputChange:false,
          isValidUser:false,
        })
      }
    }


    const handlePasswordChange=(val) =>{
      if(val.trim().length >= 8){
      setData({
        ...data,
        password:val,
        isValidPassword:true,
      });
    }else {
      setData({
        ...data,
        password:val,
        isValidPassword:false,
      });
    }
  }

    const updateSecurityTextEntry =() =>{
      setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
      });
    }

    const handleValidUser =(val)=>{

      if(val.trim().length !=0){
        setData({
          ...data,
          isValidUser: true,
        });
       
        } else {
          setData({
            ...data,
            isValidUser: false,
          });
      }

    }
    const handleValidPassword =(val)=>{

      if(val.trim().length !=0){
        setData({
          ...data,
          isValidPassword: true,
        });
       
        } else {
          setData({
            ...data,
            isValidPassword: false,
          });
      }

    }


    const loginHandle = (email, password) =>{
      const foundUser = Users.filter( item => {
        return email == item.email 
        && password == item.password;
      });


      if (data.email==0 || data.password==0){
        Alert.alert('Missing Input',
         'Please provide email and password.',
          [ {text:'Okay'}
        ]);
        return;
      }
      if (foundUser.length == 0){
        Alert.alert('Invalid User',
         'email or password is incorrect.',
          [ {text:'Okay'}
        ]);
        return;
      }
     
      signIn(foundUser)
    }

  return (
    <Animatable.View style={[styles.container,{backgroundColor:colors.background}]} animation="lightSpeedIn">
      <StatusBar backgroundColor='pink' barStyle='light-content'/>
      <View style ={styles.header}>
        <Text  style ={styles.text_header}>Welcome!</Text>
      </View>

{/* ////////////////// EMAIL ///////////////// */}
      <View style ={[styles.footer, { backgroundColor:'pink'}]} >
        <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background,borderTopLeftRadius:75,borderBottomRightRadius:75}}>
          </View>
          
          <View style={{flex:1, backgroundColor:colors.background, borderTopLeftRadius:75}}>
          <Text  style ={styles.text_footer}>Email</Text>
        <View style ={[styles.action]}>
        <Icon 
                    name="email-outline"
                    color='gray'
                    size={25}
                    />
                    <TextInput 
                    placeholder="Your Email"
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText = {(val) => textInputChange(val)}
                    onEndEditing={(e)=> handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 

                    <Animatable.View animation = "bounceIn">
                       <Feather
                    name="check-circle"
                    color='gray'
                    size={20}
                    />
                    </Animatable.View>
                   
                    : null}
        </View>
        
        {data.isValidUser ? null :

         <Animatable.View animation ="fadeInLeft" duration={500}>        
           <Text style ={styles.errorMsg}>Enter Email</Text>
           </Animatable.View>              
            }
             
{/* ////////////////// Password ///////////////// */}
<View>
  

        <Text  style ={styles.text_footer} >Password</Text>
        <View style ={styles.action}>
        <Icon 
                    name="lock-outline"
                    color='grey'
                    size={25}
                    />
                    <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText = {(val) => handlePasswordChange(val)}
                    onEndEditing={(e)=> handleValidPassword(e.nativeEvent.text)}
                    />

                  <TouchableOpacity
                  onPress={updateSecurityTextEntry}
                  >
                    {data.secureTextEntry? 
                     <Feather 
                    name="eye-off"
                    color='grey'
                    size={20}
                    />
                    :
                    <Feather
                    name="eye"
                    color='grey'
                    size={20}
                    />
}
                  </TouchableOpacity>

              </View>
              
              {data.isValidPassword ? null :
              <Animatable.View animation ="fadeInLeft" duration={500}>        
           <Text style ={styles.errorMsg}>Password must be at least 8 characters</Text>
           </Animatable.View>
            }

              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={{color:'pink'}} > Forgot Password</Text>

              </TouchableOpacity>



                  <View style = {styles.button}> 
                  <TouchableOpacity 
                  style ={styles.signIn}
                  onPress={()=>{loginHandle( data.email, data.password)}}>
                  
                   <LinearGradient colors={['white', 'pink']} style={styles.signIn}>
                      <Text  color ='grey'>
                        Sign In
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                 
                  
                  </View>
                 
        <TouchableOpacity 
        onPress={() => navigation.navigate('SignUpScreen')}
        style={styles.signIn}
        >
          <Text style ={[ {color:'grey'}]}> don't have an account?
          <Text style ={[styles.textSign, {color:'pink'}]}> Sign Up</Text>
          </Text>
          
          
        </TouchableOpacity>
        
              

      </View>
          </View>
       
       

      </View>
     


      <View style={{backgroundColor:'pink', flex:1.5}}>
              <Text>fooot</Text>
              <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background}}>
                <View style={{backgroundColor:'pink', paddingBottom:35, paddingStart:20,paddingEnd:20, alignItems:'center', borderTopLeftRadius:75}}>
                
                <View style = {styles.buttonSocial}> 
                  <TouchableOpacity 
                  style ={styles.signIn}
                  onPress={()=>{onGoogleButtonPress()}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Icon name='google' style={{flex:1, paddingLeft:20}} size={25} color='tomato'/>
                     <Text style={{flex:2.5,  color:'tomato'}}>
                       Sign In with Google
                      </Text>
                  </View>
                     
                  </TouchableOpacity>
                 
                  
                  </View>
                  <View style = {styles.buttonSocial}> 
                  <TouchableOpacity 
                  style ={styles.signIn}
                  onPress={()=>{onFacebookButtonPress()}}>
                                          <View style={{flexDirection:'row',alignItems:'center'}}>

                        <Icon name='facebook' style={{flex:1, paddingLeft:20}} size={25} color='royalblue'/>
                     <Text style={{flex:2.5,  color:'royalblue'}}>
                        Sign In with Facebook
                      </Text>
                      </View>

                  </TouchableOpacity>
                 
                  
                  </View>
                </View>
          </View>
            </View> 
 
    </Animatable.View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flex:.60,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50,
    borderBottomRightRadius:75,
    backgroundColor:'pink',
  },
  footer:{
    flex:3,
    paddingHorizontal:20,
    paddingVertical:30,
  },
  text_header:{
    color:'white',
    fontWeight:'bold',
    fontSize:30,
  },
  text_footer:{
    color:'gray',
    fontSize:15,
  },
  
  action:{
    flexDirection:'row',
    marginTop:0,
    borderBottomWidth:1,
    borderBottomColor:'pink',
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
  },
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
  },
  textSign:{
    fontSize:18,
    fontWeight:'bold',
  },
   errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
buttonSocial:{
  alignItems:'center',
  backgroundColor:'white',
  marginVertical:15,
  width:'90%',
  borderRadius:25
},

});