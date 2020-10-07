import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Image, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






const SupportScreen =(props) =>{


  return (
          <View style ={{flex:1}}>
            <DrawerContentScrollView>
              <View style = {styles.drawerContent}>
        
      {/* //////////////// ABOUT US ////////// */}

      <Drawer.Section style ={styles.drawerSection}>
              <DrawerItem 
              icon={({color,size}) =>(
                  <Icon 
                  name="script-text-outline"
                  color={color}
                  size={size}
                  />
              )}
              label = "About us"
              onPress ={()=>{props.navigation.navigate('AboutUs')}}
              />
        </Drawer.Section>
                  


                  
      {/* //////////////// FAQ AND FEEDBACK ////////// */}

      <Drawer.Section style ={styles.drawerSection}>
              <DrawerItem 
              icon={({color,size}) =>(
                  <Icon 
                  name="face-agent"
                  color={color}
                  size={size}
                  />
              )}
              label = "FAQ and feedback"
              onPress ={()=>{props.navigation.navigate('FAQFeedback')}}
              />
        </Drawer.Section>
                  
                  
                  

              </View>

          </DrawerContentScrollView>



      </View>
  );
};

export default SupportScreen;


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