import React, {useState} from 'react';
import { View, StyleSheet ,TouchableOpacity} from 'react-native';
import { Avatar, Title, Image, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../components/context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth'; 
import {useTheme} from '@react-navigation/native';


export function DrawerContent (props){

    const SignOut=()=>{
        auth()
  .signOut()
  .then(props.navigation.navigate('SignInScreen'))
    }

    const {colors} = useTheme();

    const paperTheme = useTheme();


    const {signOut, toggleTheme} = React.useContext(AuthContext);


    // const toggleTheme = () =>{
    //     setIsDarkTheme(!isDarkTheme);
    // }

    return(

        <View style ={{flex:1}}>


            {/* //////////////// USER INFO SECTION ////////// */}
            <DrawerContentScrollView>
                <View style = {styles.drawerContent}>
                    <View style ={styles.userInfoSection}> 
                        <View style = {{flexDirection:"row", marginTop:15}}>
                        {/* <TouchableOpacity onPress={()=> props.navigation.navigate('Profile')}>
                            <Avatar.Image style={{marginTop:5}} size={50} 
                            source={require('../Images/Capture.png')} 
                            />
                            </TouchableOpacity> */}
                            <View style = {{marginLeft:15,flexDirection:'column'}}>
                                <Title style={{ color: 'pink' }} >Mahinour Magdi</Title>
                                {/* <Caption style={{ color: 'pink' }} >@mahinour__</Caption> */}
                            </View>
                        </View>
                        {/* <TouchableOpacity onPress={()=>{props.navigation.navigate("Friends")}}>
                        <View style={styles.row}>
                            <View style={styles.section} >
                                <Paragraph style={{ color: colors.text }}>15  </Paragraph>
                                <Caption style={{ color: colors.text }}>Friends</Caption>
                            </View>
                        </View>
                        </TouchableOpacity> */}
                    </View> 


     {/* //////////////// Home ////////// */}

     <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="home-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Home"
                onPress ={()=>{props.navigation.navigate('Home')}}
                />
           </Drawer.Section>


            {/* //////////////// PROFILE ////////// */}

            <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="account-circle-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Profile"
                onPress ={()=>{props.navigation.navigate('Profile')}}
                />
           </Drawer.Section>


           
     {/* //////////////// FRIENDS ////////// */}

     {/* <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="account-group-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Friends"
                onPress ={()=>{props.navigation.navigate('Friends')}}
                />
           </Drawer.Section>
                     */}


                    
     {/* //////////////// CHAT ////////// */}

     {/* <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="chat-processing-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Chat"
                onPress ={()=>{props.navigation.navigate('Chat')}}
                />
           </Drawer.Section> */}
                    


                    
     {/* //////////////// SAVED ////////// */}

     <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="bookmark-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Saved"
                onPress ={()=>{props.navigation.navigate('Saved')}}
                />
           </Drawer.Section>
                    


                    
     {/* //////////////// SETTINGS ////////// */}

     <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="cog-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Settings"
                onPress ={()=>{props.navigation.navigate('Settings')}}
                />
           </Drawer.Section>




           
     {/* //////////////// SUPPORT ////////// */}

     <Drawer.Section style ={styles.drawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="help-circle-outline"
                    color={color}
                    size={size}
                    />
                )}
                label = "Support"
                onPress ={()=>{props.navigation.navigate('Support')}}
                />
           </Drawer.Section>
                    
                    
                    
     {/* //////////////// DARK THEME ////////// */}

     <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text style={{ color: colors.text }}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    
                    

                </View>

            </DrawerContentScrollView>


            {/* //////////////// LOG OUT ////////// */}

           <Drawer.Section style ={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon 
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                )}
                label = "Sign Out"
                onPress={()=>{SignOut()}}
                />
           </Drawer.Section>


        </View>
    );
};

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