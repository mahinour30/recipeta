import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Image, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






const SettingsScreen =(props) =>{


  return (
          <View style ={{flex:1}}>
            <DrawerContentScrollView>
              <View style = {styles.drawerContent}>

         

      {/* //////////////// EDIT PROFILE ////////// */}

      <Drawer.Section style ={styles.drawerSection}>
              <DrawerItem 
              icon={({color,size}) =>(
                  <Icon 
                  name="account-edit-outline"
                  color={color}
                  size={size}
                  />
              )}
              label = "Edit profile"
              onPress ={()=>{props.navigation.navigate('EditProfile')}}
              />
        </Drawer.Section>


          {/* //////////////// CHANGE PASSWORD ////////// */}

          <Drawer.Section style ={styles.drawerSection}>
              <DrawerItem 
              icon={({color,size}) =>(
                  <Icon 
                  name="lock-outline"
                  color={color}
                  size={size}
                  />
              )}
              label = "Change password"
              onPress ={()=>{props.navigation.navigate('ChangePassword')}}
              />
        </Drawer.Section>


        
      {/* //////////////// DELETE ACCOUNT ////////// */}

      <Drawer.Section style ={styles.drawerSection}>
              <DrawerItem 
              icon={({color,size}) =>(
                  <Icon 
                  name="account-remove-outline"
                  color={color}
                  size={size}
                  />
              )}
              label = "Delete account"
              onPress ={()=>{props.navigation.navigate('DeleteAccount')}}
              />
        </Drawer.Section>
                  
              </View>

          </DrawerContentScrollView>



      </View>
  );
};

export default SettingsScreen;


const styles = StyleSheet.create({
  DrawerContent:{
      flex: 1,
  },
  userInfoSection:{
      paddingLeft:20,
  },
  title:{
      fontSize:16,
      marginTop:0,
      fontWeight:'bold',
  },
  caption:{
      fontSize:14,
      lineHeight:14,
  },
  row:{
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
  },
  section:{
      flexDirection: 'row',
      alignItems:'center',
      marginRight:15,
  },
  paragraph:{
      fontWeight:'bold',
      marginRight:3,
  },
  drawerSection:{
      marginTop:0,
  },
  bottomDrawerSection:{
      marginBottom:0,
      borderTopColor:'pink',
      borderTopWidth:1,
  },
  preference:{
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingVertical:0,
      paddingHorizontal:16,
  },
});