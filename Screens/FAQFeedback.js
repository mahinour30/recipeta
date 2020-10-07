
import React from 'react';
import {View,Text,StyleSheet, Dimensions,TextInput,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';


const FAQFeedbackScreen= ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
              <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'pink'}}></View>
       <View style={[styles.header,{backgroundColor:colors.background}]}>
       <Text style={styles.title}>Your feedback matters!</Text>
         <Text style={styles.caption}>We would love to hear your suggestion, And help in case of a complain.</Text>
         <Text style={styles.caption}>All you have to do is type your inquiry or suggestion in the following text field and send it to us to review.</Text>


        </View>

        <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject,backgroundColor:colors.background}}>
          <View style={{flex:1, backgroundColor:'pink',paddingHorizontal:20, borderBottomLeftRadius:75,borderBottomRightRadius:75, borderTopRightRadius:75}}>

          <View style ={styles.action}>
                    <TextInput 
                    multiline={true}
                    numberOfLines={8}
                    placeholder="Enter Email here."
                    style ={styles.textInput} 
                    autoCapitalize="none"
                    />
              </View>


              <View style = {styles.button}> 
                  <TouchableOpacity style ={styles.submit}>
                  
                   <LinearGradient colors={['white', 'pink']} style={styles.submit}>
                      <Text style={styles.textsubmit} color ='grey'>Send</Text>
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
export default FAQFeedbackScreen;
const styles = StyleSheet.create({

container:{
  flex:1,
},
header:{
  flex:1,
  height:0.61*height,
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
  paddingTop:65,
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