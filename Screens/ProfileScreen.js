import React from 'react';
import {View,SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar, Title,Caption,Text,TouchableRipple,
} from 'react-native-paper'
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const ProfileScreen= ({navigation}) => {

  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.userInfoSection}>
       <View style={{flexDirection:'row', marginTop:15}}>
         {/* <Avatar.Image source={require('../Images/Capture.png')} size={60}/> */}
         <View style={{marginLeft:20}}>
           <Title style={[styles.title, {
             marginTop:15,
             marginBottom:5
           }]} style={{ color: 'pink' }}> Mahinour Magdi</Title>
           <Caption style={styles.caption} style={{ color: 'pink' }}> @mahinour__</Caption>
         </View>
       </View> 
     </View>


           <View style={styles.userInfoSection}>
           <View style = {styles.row}>
              <Icon name= 'email' color='#777777' size={20} style={{marginLeft:20}}/>
              <Text style={{color:'#777777', marginLeft:20}}>mahiimalik1d@gmail.com</Text>
            </View>

            {/* <View style = {styles.row}>
            <Icon name= 'account-group' color='#777777' size={20}/>
            <TouchableOpacity onPress={()=>{navigation.navigate('Friends')}}>
              <Text style={{color:'#777777', marginLeft:20}}>15 <Text style={{color:'#777777'}}>Friends</Text></Text>
            
            </TouchableOpacity>
            
           </View> */}
           </View>




           <View style={styles.menuWrapper}>
             <TouchableRipple onPress ={()=>{navigation.navigate('EditProfile')}}>
               <View style={styles.menuItem}>
                 <Icon name ='account-edit-outline'color='pink' size={25} />
                 <Text style={styles.menuItemText}>Edit Profile</Text>
               </View> 
             </TouchableRipple>
             <TouchableRipple onPress ={()=>{navigation.navigate('ChangePassword')}}>
               <View style={styles.menuItem}>
                 <Icon name ='lock-outline'color='pink' size={25} />
                 <Text style={styles.menuItemText}>Change Password</Text>
               </View> 
             </TouchableRipple>
             <TouchableRipple onPress ={()=>{navigation.navigate('Saved')}}>
               <View style={styles.menuItem}>
                 <Icon name ='heart-outline'color='pink' size={25} />
                 <Text style={styles.menuItemText}>Favourites</Text>
               </View> 
             </TouchableRipple>
             <TouchableRipple onPress ={()=>{navigation.navigate('DeleteAccount')}}>
               <View style={styles.menuItem}>
                 <Icon name ='account-remove-outline'color='pink' size={25} />
                 <Text style={styles.menuItemText}>Delete Account</Text>
               </View> 
             </TouchableRipple>
           </View>

           

    </SafeAreaView>
  );
};

export default ProfileScreen;


const styles=StyleSheet.create({
container:{
  flex:1,
},
userInfoSection:{
  paddingHorizontal:20,
  marginBottom:25,
},
title:{
  fontSize:24,
  fontWeight:'bold',
},
caption:{
  fontSize:14,
  lineHeight:14,
  fontWeight:'500',
},
row:{
  flexDirection:'row',
  marginBottom:10,
},
menuWrapper:{
  marginTop:10,
},
menuItem:{
  flexDirection:'row',
  paddingVertical:15,
  paddingHorizontal:30,
},
menuItemText:{
  color:'pink',
  marginLeft:20,
  fontWeight:'600',
  fontSize:16,
  lineHeight:26
},

});
