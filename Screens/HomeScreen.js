import React from 'react';
import {StyleSheet,View,Text,Button, StatusBar, Image, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen= ({navigation}) => {

  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
{/* //////////////////// EXPLORE /////////////////// */}
          <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
    <View style ={styles.sliderContainer}>
      <Swiper autoplay height={200} activeDotColor='pink'>
      <View style= {styles.slide}>
          <Image source={require('../Images/ApplePie.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/LemonTart.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/Muffins.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/PigsInPlanket.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/PanCake.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/CupCake.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/Cookies.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/CheeseCake.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
        <View style= {styles.slide}>
          <Image source={require('../Images/Cake.jpg')} 
          resizeMode='cover'
          style={styles.sliderImage}/>
        </View>
      </Swiper>
    </View>

{/* //////////////////// RECIPIES /////////////////// */}

    <View style = {styles.cardsWrapper}>
    <Text style={{color:'pink'}}>Explore</Text>
    
    <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/Cake.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Regular Cake</Text>
      <Text style= {styles.cardDetails}>enjoy a delicious easy to make home made cake in just 30 minutes</Text>
    </View>
    </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>

    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/PanCake.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Pan Cakes</Text>
      <Text style= {styles.cardDetails}>step up your breakfast with these delicious pancakes</Text>
    </View>
    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>

    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/CheeseCake.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Cheese Cake</Text>
      <Text style= {styles.cardDetails}>nothing brings people together like Cheesecakes!!</Text>
    </View>
    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/Cookies.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Cookies</Text>
      <Text style= {styles.cardDetails}>feel you'r granda's love with these yummy cookies </Text>
    </View>
    </View>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/ApplePie.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Apple Pie</Text>
      <Text style= {styles.cardDetails}>nothing else feel like love</Text>
    </View>
    </View>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/CupCake.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Cup Cake</Text>
      <Text style= {styles.cardDetails}>have you tried this easy recipe yet!!</Text>
    </View>
    </View>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/LemonTart.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Lemon Tart</Text>
      <Text style= {styles.cardDetails}>the best summer dessert</Text>
    </View>
    </View>
      </TouchableOpacity>



      <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/PigsInPlanket.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Pigs In Planket</Text>
      <Text style= {styles.cardDetails}>enjoy this hot snak in just 20 minutes!</Text>
    </View>
    </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
    <View style = {styles.card}>
    <View style={styles.cardImgWrapper}>
      <Image  source={require('../Images/Muffins.jpg')} 
      resizeMode='cover' style={styles.cardImg}/> 
    </View>
    <View style = {styles.cardInfo}>
      <Text style={styles.cardTitle}>Muffins</Text>
      <Text style= {styles.cardDetails}>easiest muffin recipie for the whole family to enjoy</Text>
    </View>
    </View>
      </TouchableOpacity>


    </View>

 
    </ScrollView>
  );
};


const styles= StyleSheet.create({


    container:{
        flex:1,
        
    },
    sliderContainer:{
      height:200,
      width:'90%',
      marginTop:10,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8,
    },
    wrapper:{},
    slide:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'transparent',
      borderRadius:8,
    },
    sliderImage:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
    },
    cardsWrapper:{
      marginTop:20,
      width:'90%',
      alignSelf:'center',
    },
    card:{
      height:100,
      marginVertical:10,
      flexDirection:'row',
      shadowColor:'pink',
      shadowOffset:{width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    cardImgWrapper:{
      flex:1,
    },
    cardImg:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
      borderBottomRightRadius:0,
      borderTopRightRadius:0,
    },
    cardInfo:{
      flex:2,
      padding:10,
      borderColor:'pink',
      borderWidth:1,
      borderLeftWidth:0,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      backgroundColor:'white',
    },
    cardTitle:{
      fontWeight:'bold',
    },
    cardDetails:{
      fontSize:12,
      color:'grey',
    },
});




export default HomeScreen;