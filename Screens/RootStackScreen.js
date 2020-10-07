import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPassword from './ForgotPassword'
import CreateProfile from './CreateProfileScreen'
import OnboardingScreen from './Onboarding';
import Home from './HomeScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation})=>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <RootStack.Screen name="CreateProfile" component={CreateProfile}/>
        <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <RootStack.Screen name="Home" component={Home} />


    </RootStack.Navigator>

);

export default RootStackScreen;