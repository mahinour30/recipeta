import React,{useEffect, useState} from 'react';
import {View,Text, Alert,StyleSheet,TextInput, Platform, TouchableOpacity, Dimensions,ScrollView, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import auth, { firebase } from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import firestore from '@react-native-firebase/firestore';





const SignUpScreen= ({navigation}) => {

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
      confirm_password:'',
      fullname:'',
      phonenumber:'',
      personalblog:'',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      
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


  const Register= ()=>{
    
      const Email = data.email
      const Password = data.password
      const ConfirmPassword = data.confirm_password
      const FullName = data.fullname
      const PhoneNumber = data.fullname
      const PersonalBlog = data.personalblog


    if (data.password==data.confirm_password){
      
      firebase.auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        const fbRootRefFS=firebase.firestore();
        const userID = user.user.uid;
        console.log('user id : ',userID)
        const userRef = fbRootRefFS.collection('users')
        .doc(userID)

        userRef.set({
          Email,
          Password,
          ConfirmPassword,
          FullName,
          PhoneNumber,
          PersonalBlog,
        })
        setID(userID)

        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
    
        console.error(error);
      }).then(navigation.navigate('Home'))

    }
    else {Alert.alert('Invalid User',
    'Username or password is incorrect.',
     [ {text:'Okay'}
   ])}
   
  }
  

  

    const textInputChange =(val) =>{
      if (val.length != 0){
        setData ({
          ...data,
          email:val,
          check_textInputChange:true
        });
      } else {
        setData({
          ...data,
          email:val,
          check_textInputChange:false
        })
      }
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
    const handleValidConfirmPassword =(val)=>{

      if(val.trim().length !=0){
        setData({
          ...data,
          isValidConfirmPassword: true,
        });
       
        } else {
          setData({
            ...data,
            isValidConfirmPassword: false,
          });
      }

    }

    const handlePasswordChange=(val) =>{
      setData({
        ...data,
        password:val,
      });
    };
    const handleConfirmPasswordChange=(val) =>{
      setData({
        ...data,
        confirm_password:val,
      });
    };

    const updateSecurityTextEntry =() =>{
      setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
      });
    };
    const updateConfirmSecurityTextEntry =() =>{
      setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry,
      });
    }


    const handleFullNameChange=(val) =>{
      setData({
        ...data,
        fullname:val,
      });
    };

    const handleBlogChange=(val) =>{
      setData({
        ...data,
        personalblog:val,
      });
    };

    const handlePhoneNumberChange=(val) =>{
      setData({
        ...data,
        phonenumber:val,
      });
    };





  return (
    <ScrollView>
      
      <Animatable.View style={[styles.container,{backgroundColor:colors.background}]} animation="lightSpeedIn">
      <StatusBar backgroundColor={'pink' }barStyle='light-content'/>
      <View style ={[styles.header, { backgroundColor:'pink'}]}>
        <Text  style ={styles.text_header}>Register Now</Text>
      </View>

{/* ////////////////// EMAIL ///////////////// */}
      <View style ={[styles.footer, { backgroundColor:'pink'}]} >
         <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background,borderTopRightRadius:75,borderBottomLeftRadius:75}}>
          </View>
       
       <View  style={{flex:1, backgroundColor:colors.background, borderTopLeftRadius:75, }}>

       <Text  style ={styles.text_footer}>Email</Text>
        <View style ={styles.action}>
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
                
             




{/* ////////////////// Full Name ///////////////// */}

<Text  style ={styles.text_footer} >Full Name</Text>
        <View style ={styles.action}>
        <Icon 
                    name="account-circle-outline"
                    color='grey'
                    size={25}
                    />
                    <TextInput 
                    placeholder="Enter Your Full Name"
                    style ={styles.textInput} 
                    autoCapitalize='words'
                    onChangeText = {(val) => handleFullNameChange(val)}
                    />

              </View>

             




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

{/* ////////////////// Confirm Password ///////////////// */}


              <Text  style ={styles.text_footer} >Confirm Password</Text>
        <View style ={styles.action}>
        <Icon 
                    name="lock-outline"
                    color='grey'
                    size={25}
                    />
                    <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    onChangeText = {(val) => handleConfirmPasswordChange(val)}
                    onEndEditing={(e)=> handleValidConfirmPassword(e.nativeEvent.text)}
                    />

                  <TouchableOpacity
                  onPress={updateConfirmSecurityTextEntry}
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

              {data.isValidConfirmPassword ? null :
              <Animatable.View animation ="fadeInLeft" duration={500}>        
           <Text style ={styles.errorMsg}>Password must be at least 8 characters</Text>
           </Animatable.View>
            }

{/* ////////////////// Phone ///////////////// */}

<Text  style ={styles.text_footer} >Phone Number</Text>
        <View style ={styles.action}>
        <Icon 
                    name="cellphone-android"
                    color='grey'
                    size={25}
                    />
                    <TextInput 
                    placeholder="Enter Your Phone Number"
                    style ={styles.textInput} 
                    keyboardType='number-pad'
                    autoCapitalize="none"
                    onChangeText = {(val) => handlePhoneNumberChange(val)}
                    />
              </View>


{/* ////////////////// Blog ///////////////// */}


<Text  style ={styles.text_footer} >Personal Blog</Text>
        <View style ={styles.action}>
        <Icon 
                    name="tooltip-text-outline"
                    color='grey'
                    size={25}
                    />
                    <TextInput 
                    placeholder="Enter your Personal Blog"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style ={styles.textInput} 
                    keyboardType='email-address'
                    autoCapitalize="none"
                    onChangeText = {(val) => handleBlogChange(val)}
                    />
              </View>




             


                  <View style = {styles.button}> 
                   <TouchableOpacity  onPress={() => Register()} style={styles.signIn} >
                      <LinearGradient  colors={['white', 'pink']} style={styles.signIn}>
                      <Text style={styles.textsignIn} color ='grey'>
                        Sign Up
                      </Text>
                    </LinearGradient>
                   </TouchableOpacity>
                     
                    
                  </View>
                 
                  <TouchableOpacity 
        
        style={styles.signIn}
        ><View style={{marginTop:20}}>
          <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                </Text>
</View>
          <Text style ={[ {color:'grey', paddingTop:20}]}> already  have an account?
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                      <Text  style ={[styles.textSign, {color:'pink'}]}> Sign In</Text>

          </TouchableOpacity>
          </Text>
          
        </TouchableOpacity>

      </View>

       </View>
 
            
      </View>



     
 
    </Animatable.View>
  
                <View style={{backgroundColor:'pink', paddingBottom:35, paddingStart:20,paddingEnd:20, alignItems:'center', borderTopRightRadius:75}}>
                  
                <View style = {styles.buttonSocial}> 
                  <TouchableOpacity 
                  style ={styles.signIn}
                  onPress={()=>{onGoogleButtonPress()}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Icon name='google' style={{flex:1, paddingLeft:20}} size={25} color='tomato'/>
                     <Text style={{flex:2.5,  color:'tomato'}}>
                       Sign Up with Google
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
                        Sign Up with Facebook
                      </Text>
                      </View>

                  </TouchableOpacity>
                 
                  
                  </View>

          </View>

    </ScrollView>
    
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flex:.60,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50,
    borderBottomLeftRadius:75,
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
  color_textPrivate:{
    fontSize:12,
  },
  buttonSocial:{
  alignItems:'center',
  backgroundColor:'white',
  marginVertical:15,
  width:'90%',
  borderRadius:25
},
   errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},

});