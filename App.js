
import React, { useEffect } from 'react';
import { NavigationContainer 
  , DarkTheme as NavigationDarkTheme
  ,DefaultTheme as NavigationDefaultTheme, useTheme
 } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Saved from './Screens/Saved';
import Settings from './Screens/Settings';
import Support from './Screens/Support';
import FriendsScreen from './Screens/FriendsScreen';
import ChatScreen from './Screens/ChatScreen';
import RootStackScreen from'./Screens/RootStackScreen';
import {DrawerContent} from './Screens/DrawerContent'
import {AuthContext} from './components/context';
import DeleteAccount from './Screens/deleteAccount';
import ChangePassword from './Screens/changePassword';
import AboutUs from './Screens/AboutUs';
import FAQFeedback from './Screens/FAQFeedback';
import EditProfile from './Screens/editProfile';
import CreateProfile from './Screens/CreateProfileScreen';
import OnboardingScreen from './Screens/Onboarding'
import CreatePost from './Screens/CreatePost';
import RootStack from './Screens/RootStackScreen';
import ScreenTwo from './Screens/screen2';
import ScreenThree from './Screens/screen3';



import {Image} from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import { View } from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, Avatar,
   Provider as PaperProvider,
   DarkTheme as PaperDarkTheme
  ,DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LottieView from 'lottie-react-native';



const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FriendsStack = createStackNavigator();
const ChatStack = createStackNavigator();
const SavedStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SupportStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const ChangePasswordStack = createStackNavigator();
const DeleteAccountStack = createStackNavigator();
const AboutUsStack = createStackNavigator();
const FAQFeedbackStack = createStackNavigator();
const CreateProfileStack = createStackNavigator();
const AppStack = createStackNavigator();
const CreatePostStack = createStackNavigator();
const RootStackStack = createStackNavigator();
const ScreenTwoStack = createStackNavigator();
const ScreenThreeStack = createStackNavigator();





const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <HomeStack.Navigator screenOptions={{
    headerStyle :{
      backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:colors.text,
    headerTintColor:'pink',
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:'normal',
    }
    
  }}>
    <HomeStack.Screen name="Recipeta" component={HomeScreen} options={{
      headerLeft:()=> (
        <View style = {{marginLeft:20,marginTop:8}}>
          {/* <TouchableOpacity onPress={()=> navigation.openDrawer()}>
        <Avatar.Image style={{marginTop:8}} size={35} 
        source={require('./Images/Capture.png')} 
         />
         
        </TouchableOpacity> */}
        

        <Icon.Button 
        style = {{marginTop:5}}
        name="ios-menu" 
        size ={27} 
        color= 'pink' 
         backgroundColor =  {colors.background}       
        onPress={()=> navigation.openDrawer()}/>


        </View>
      ),

      headerRight:()=> (
        <View style = {{marginRight:0,marginTop:8, flexDirection:'row'}}>
       

<Icon.Button 
        name="ios-add-circle" 
        size ={35} 
        color= 'pink' 
        backgroundColor =  {colors.background}       
        onPress={()=> navigation.navigate('CreatePost')}/>

        </View>
      ),
     
    }}
    />
  </HomeStack.Navigator>

  )};

const DetailStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <DetailStack.Navigator 
  screenOptions={{
    headerShown: false
  }}
  >
    <DetailStack.Screen name=" " component={DetailScreen}
    options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={25} color='red' 
        backgroundColor = "transparent"
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }} />
  
  </DetailStack.Navigator>

)};

const ProfileStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(
  

  <ProfileStack.Navigator screenOptions={{
    headerStyle :{
      backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <ProfileStack.Screen name=" " component={ProfileScreen} 
    options={{
      headerLeft:()=> (
        <Icon.Button name="menu" size ={25}  color= {colors.text} 
         backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.openDrawer()}>

        </Icon.Button>
      )

    }} />
 </ProfileStack.Navigator>
  )};

const FriendsStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(
  

  <FriendsStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <FriendsStack.Screen name="Friends" component={FriendsScreen} 
    options={{
      headerLeft:()=> (
        <Icon.Button name="menu" size ={25}  color= {colors.text} 
        backgroundColor =  {colors.background} 
        onPress={()=> 
        navigation.openDrawer()}>

        </Icon.Button>
      )

    }} />
 </FriendsStack.Navigator>
)};

const ChatStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(
  

  <ChatStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <ChatStack.Screen name="Chat" component={ChatScreen} 
    options={{
      headerLeft:()=> (
        <Icon.Button name="menu" size ={25}  color= {colors.text} 
        backgroundColor =  {colors.background} 
        onPress={()=> 
        navigation.openDrawer()}>

        </Icon.Button>
      )

    }} />
 </ChatStack.Navigator>
)};

const SavedStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(
  

  <SavedStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <SavedStack.Screen name="Saved" component={Saved}  options={{
      headerLeft:()=> (
        <Icon.Button name="menu" size ={25}  color= {colors.text} 
        backgroundColor =  {colors.background} 
        onPress={()=> 
        navigation.openDrawer()}>

        </Icon.Button>
      )

    }}/>
 </SavedStack.Navigator>
)};

const SettingsStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(
  

  <SettingsStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <SettingsStack.Screen name="Settings" component={Settings}  options={{
      headerLeft:()=> (
        <Icon.Button name="menu" size ={25}  color= {colors.text} 
        backgroundColor =  {colors.background} 
        onPress={()=> 
        navigation.openDrawer()}>

        </Icon.Button>
      )

    }}/>
 </SettingsStack.Navigator>
)};

const SupportStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(
  

  <SupportStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <SupportStack.Screen name="Support" component={Support}  options={{
      headerLeft:()=> (
        <Icon.Button name="menu" size ={25}  color= {colors.text} 
        backgroundColor =  {colors.background} 
        onPress={()=> 
        navigation.openDrawer()}>

        </Icon.Button>
      )

    }}/>
 </SupportStack.Navigator>
)};

const editProfileStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <EditProfileStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <EditProfileStack.Screen  name="Edit profile"  component={EditProfile}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35}color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </EditProfileStack.Navigator>
)};

const changePasswordStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <ChangePasswordStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <ChangePasswordStack.Screen name="Change Password" component={ChangePassword}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35}color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </ChangePasswordStack.Navigator>
)};

const DeleteAccountStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  < DeleteAccountStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    < DeleteAccountStack.Screen name=" Delete Account" component={DeleteAccount}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35}color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </ DeleteAccountStack.Navigator>
)};

const AboutUsStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <AboutUsStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <AboutUsStack.Screen name="About Us" component={AboutUs}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35} color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </AboutUsStack.Navigator>
)};

const FAQFeedbackStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <FAQFeedbackStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:'pink',
      shadowColor:'pink',
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <FAQFeedbackStack.Screen name=" " component={FAQFeedback}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35} color= {colors.background} 
        backgroundColor =  'pink'
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </FAQFeedbackStack.Navigator>
)};

const CreateProfileStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <CreateProfileStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <CreateProfileStack.Screen  name="Create profile"  component={CreateProfile}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35}color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </CreateProfileStack.Navigator>
)};

const CreatePostStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <CreatePostStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <CreatePostStack.Screen  name=" "  component={CreatePost}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35}color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </CreatePostStack.Navigator>
)};


const RootStackStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <RootStackStack.Navigator screenOptions={{
    headerStyle :{
     backgroundColor:colors.background,
      shadowColor:colors.background,
      elevation:0,
    },
    headerTintColor:"pink",
    headerTitleAlign:"center",
    headerTitleStyle:{
      fontWeight:"bold",
      fontStyle:"normal"
    }
    
  }}>
    <RootStackStack.Screen  name=" "  component={RootStack}  options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={35}color= {colors.text} 
        backgroundColor =  {colors.background}
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }}/>
 </RootStackStack.Navigator>
)};



const ScreenTwoStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <ScreenTwoStack.Navigator 
  screenOptions={{
    headerShown: false
  }}
  >
    <ScreenTwoStack.Screen name=" " component={ScreenTwo}
    options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={25} color='red' 
        backgroundColor = "transparent"
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }} />
  
  </ScreenTwoStack.Navigator>

)};




const ScreenThreeStackScreen = ({navigation}) =>{
  const {colors} =useTheme();
  return(

  <ScreenThreeStack.Navigator 
  screenOptions={{
    headerShown: false
  }}
  >
    <ScreenThreeStack.Screen name=" " component={ScreenThree}
    options={{
      headerLeft:()=> (
        <Icon.Button name="md-arrow-back-circle-outline" size ={25} color='red' 
        backgroundColor = "transparent"
        onPress={()=> 
        navigation.goBack()}>

        </Icon.Button>
      )

    }} />
  
  </ScreenThreeStack.Navigator>

)};


const App =() =>{

  

  // const[isLoading, setIsLoading] = React.useState(true);
  // const [userToken,setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false );


  const initialLoginState ={
    isLoading:true,
    userName:null,
    userToken:null,
  };


  const CustomDefaultTheme={
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background:'white',
      text:'#333333',
    }
  }

  const CustomDarkTheme={
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background:'#333333',
      text:'white',
    }
  }


  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;


  const loginReducer = (prevState, action ) =>{
    switch(action.type){
      case 'RETREVE_TOKEN':
        return{
          ...prevState,
          userToken:action.token,
          isLoading:false,
        };

      case 'REGISTER':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,};

        case 'LOGIN':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,};

        case 'LOGOUT':
        return{
          ...prevState,
          userName:null,
          userToken:null,
          isLoading:false,};
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn:async(foundUser)=>{
      // setUserToken('rand');
      // setIsLoading(false);
      // let userToken;
      const userToken= String(foundUser[0].userToken);
      const userName = foundUser[0].username;

        try {
          // userToken='abcd';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e){
          console.log(e);
        }
      
      // console.log(userName,'+', password);
      dispatch({type:'LOGIN', id : userName, token : userToken});

    },

    signUp:()=>{
      // setUserToken('rand');
      // setIsLoading(false);
    },

    signOut:async()=>{
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({type:'LOGOUT'});

    },

    toggleTheme:()=> {

      setIsDarkTheme( isDarkTheme=>!isDarkTheme);
    }
  }),[]);
  
  
  useEffect(()=>{
    setTimeout(async()=>{
      // setIsLoading(false);
      let userToken;
      userToken=null;
      try { 
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e){
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type:'REGISTER',  token:userToken});

    },800);
  },[]);


  const [isFirstLaunch,setIsFirstLaunch]=React.useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      } else{
        setIsFirstLaunch(false);
      }
    });
  },[])


  

  if(isFirstLaunch === null){
    return null;
    } else if (isFirstLaunch=== true){
      return (
        <NavigationContainer>
          <Drawer.Navigator headerMode="none">
            <Drawer.Screen name='Onboarding' component={OnboardingScreen}/>
            <Drawer.Screen name="SignUpScreen" component={SignUpScreen}/>   
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Details" component={DetailStackScreen} />
            <Drawer.Screen name="Profile" component={ProfileStackScreen} />
            <Drawer.Screen name="Friends" component={FriendsStackScreen} />
            <Drawer.Screen name="Chat" component={ChatStackScreen} />
            <Drawer.Screen name="Saved" component={SavedStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsStackScreen} />
            <Drawer.Screen name="Support" component={SupportStackScreen} />
            <Drawer.Screen name="SignInScreen" component={SignInScreen}/>          
            <Drawer.Screen name="EditProfile" component={editProfileStackScreen}/>
            <Drawer.Screen name="ChangePassword" component={changePasswordStackScreen}/>
            <Drawer.Screen name="DeleteAccount" component={DeleteAccountStackScreen}/>
            <Drawer.Screen name="AboutUs" component={AboutUsStackScreen}/>
            <Drawer.Screen name="FAQFeedback" component={FAQFeedbackStackScreen}/>
            <Drawer.Screen name="CreateProfile" component={CreateProfileStackScreen}/>
            <Drawer.Screen name="CreatePost" component={CreatePostStackScreen}/>          
        
        </Drawer.Navigator>
        </NavigationContainer>
        );
    }else {
      <NavigationContainer>
          <Drawer.Navigator headerMode="none">
            <Drawer.Screen name="SignUpScreen" component={SignUpScreen}/>          
        </Drawer.Navigator>
        </NavigationContainer>
    }
  

  if (loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image 
        source={require('./Images/cooking.gif')}  
        style={{width: 450, height: 450 }}
    />
      </View>
    );
  }

  return(
    
    <PaperProvider theme={PaperDarkTheme}>
    <AuthContext.Provider value={authContext}>

    
    <NavigationContainer theme = {theme} >

       { loginState.userToken !== null ? (



        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} /> }>
          {/* <Drawer.Screen name="OnboardingScreen" component={OnboardingScreen} initialRouteName="OnboardingScreen" headerMode="none"/> */}
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Details" component={DetailStackScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} />
          <Drawer.Screen name="Friends" component={FriendsStackScreen} />
          <Drawer.Screen name="Chat" component={ChatStackScreen} />
          <Drawer.Screen name="Saved" component={SavedStackScreen} />
          <Drawer.Screen name="Settings" component={SettingsStackScreen} />
          <Drawer.Screen name="Support" component={SupportStackScreen} />
          <Drawer.Screen name="SignInScreen" component={SignInScreen}/>          
          <Drawer.Screen name="SignUpScreen" component={SignUpScreen}/>
          <Drawer.Screen name="EditProfile" component={editProfileStackScreen}/>
          <Drawer.Screen name="ChangePassword" component={changePasswordStackScreen}/>
          <Drawer.Screen name="DeleteAccount" component={DeleteAccountStackScreen}/>
          <Drawer.Screen name="AboutUs" component={AboutUsStackScreen}/>
          <Drawer.Screen name="FAQFeedback" component={FAQFeedbackStackScreen}/>
          <Drawer.Screen name="CreateProfile" component={CreateProfileStackScreen}/>
          <Drawer.Screen name="CreatePost" component={CreatePostStackScreen}/>
          <Drawer.Screen name="ScreenTwo" component={ScreenTwoStackScreen} />
          <Drawer.Screen name="ScreenThree" component={ScreenThreeStackScreen} />




      </Drawer.Navigator> 
      )
    :
              <RootStackScreen/>

       }

    </NavigationContainer>
    
         </AuthContext.Provider>
         </PaperProvider>

  );
};



export default App;
