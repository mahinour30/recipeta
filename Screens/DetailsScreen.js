import React from 'react';
import {StyleSheet,View,Text,  Image, ScrollView, TouchableOpacity,Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-community/async-storage';


const DetailScreen= ({navigation}) => {


  const myCustomeShare= async()=>{
    const shareOptions={
      message:'Check out this delicious recipe!!',
      uri: require('../Images/Cake.jpg')
    }
    try {
      const ShareResponse= await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    }catch(error){
      console.log('Error => ', error);
    }
  }

  const {colors} = useTheme();

  const theme = useTheme();

  return (
   


    <ScrollView style={styles.container}>
            
      <View style={[styles.header,{ backgroundColor:'red'}]}>
      <Image source={require('../Images/Cake.jpg')} 
            style={{height:'100%', width:'100%', borderBottomRightRadius:75}}/>
            </View>
            
      <View style={[styles.footer]}>

      <View style = {styles.cardsWrapper}>
        <Text style={styles.cardTitle}>Regular Cake</Text>
          <Text style= {styles.cardDetails}>enough for 8 people</Text>
          <Text style={styles.cardTitle}>Ingredients</Text>

         <Text style= {styles.cardDetails}>1 cup flour
         1 cup flour
         1 cup flour
         1 cup flour
         1 cup flour
         1 cup flour</Text>
        
          
         <Text style={styles.cardTitle}>Recipe</Text>
          <Text style= {styles.cardDetails}>
          enjoy a delicious easy to make home made cake in just 30 minutes 
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes
          enjoy a delicious easy to make home made cake in just 30 minutes</Text>
        <View style = {[styles.cardInfo,{backgroundColor:colors.background}]}>
          <TouchableOpacity>
            <View style={{width:175, alignItems:'center', borderRightWidth:1, borderColor:'pink'}}>
              <Icon name ='heart-outline' color={colors.text} size={25}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{myCustomeShare()}}>
            <View style={{width:350/2, alignItems:'center', borderLeftWidth:1, borderColor:'pink'}}>
              <Icon name ='share-outline' color={colors.text} size={25}  />
            </View>
          </TouchableOpacity >
        </View>
        </View>



      </View>
    </ScrollView>
  );
};

const {height}=Dimensions.get("window");

const styles= StyleSheet.create({

  container:{
    flex:1,
  },
  header:{
    flex:1,
    height:0.33*height,
    borderBottomRightRadius:75,
    backgroundColor:'pink',
  },
  footer:{
    flex:2,
  },
    sliderContainer:{
      height:200,
      width:'90%',
      marginTop:10,
      justifyContent:'center',
      alignSelf:'center',
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
    cardInfo:{
      flex:2,
      flexDirection:'row',
      padding:10,
      borderColor:'pink',
      borderWidth:1,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      borderBottomLeftRadius:8,
      borderTopLeftRadius:8,
      marginTop:20,
      marginBottom:20

    },
    cardTitle:{
      fontWeight:'bold',
      color:'pink',
      fontSize:18
    },
    cardDetails:{
      fontSize:15,
      color:'#666666',
    },
    
});




export default DetailScreen;