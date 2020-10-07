import React from 'react';
import {View,Text, StyleSheet,TextInput, Platform, TouchableOpacity, Dimensions, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';


const SignUpScreen= ({navigation}) => {
  const {colors} = useTheme();

  const [data, setData] = React.useState({
      email:'',
      password:'',
      confirm_password:'',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      
  });


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



  return (
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



             


                  <View style = {styles.button}> 
                   <TouchableOpacity  onPress={() => navigation.navigate('CreateProfile')} style={styles.signIn} >
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
     <View style={{backgroundColor:'pink', flex:1.75}}>
              <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background}}>
                <View style={{backgroundColor:'pink', paddingBottom:35, paddingStart:20,paddingEnd:20, alignItems:'center', borderTopRightRadius:75}}>
                  
                <View style = {styles.buttonSocial}> 
                  <TouchableOpacity 
                  style ={styles.signIn}
                  onPress={()=>{navigation.navigate()}}>
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
                  onPress={()=>{navigation.navigate()}}>
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

});