import React from 'react';
import {StyleSheet,View,Text,  Image, ScrollView, TouchableOpacity,Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import files from './base64';


const ScreenTwo= ({navigation}) => {


  const Recipe =()=> {
    firestore()
    .collection('recipe')
    .get()
    .then(querySnapshot => {
      // console.log('Total Recipes: ', querySnapshot.size);
  
      querySnapshot.forEach(documentSnapshot => {
        // console.log('Recipe ID: ', documentSnapshot.id, documentSnapshot.data());
        const IDS = [documentSnapshot.id]
        console.log(IDS)

        const firstApp = IDS.toString()

        console.log(firstApp)
       
        firestore()
        .collection('recipe')
        .doc(IDS.toString())
        .get()
        .then(documentSnapshot => {
          console.log('title: ', documentSnapshot.get('title'));
          console.log('caption: ', documentSnapshot.get('caption'));
          console.log('ingredients: ', documentSnapshot.get('ingredients'));
          console.log('recipe: ', documentSnapshot.get('recipe'));
          console.log('survings: ', documentSnapshot.get('survings'));

          
        });


      });
    });
  }




  const myCustomeShare= async()=>{
    const shareOptions={
      message:'Check out this delicious recipe!!',
      url: files.image1
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
      <Image source={require('../Images/PanCake.jpg')} 
            style={{height:'100%', width:'100%', borderBottomRightRadius:75}}/>
            </View>
            
      <View style={[styles.footer]}>

      <View style = {styles.cardsWrapper}>
        <Text style={styles.cardTitle}>Pan Cakes</Text>
          <Text style= {styles.cardDetails}>enough for 3 people</Text>
          <Text style={styles.cardTitle}>Ingredients</Text>

         <Text style= {styles.cardDetails}>1 ½ cups all-purpose flour 
         3 ½ teaspoons baking powder 
         1 teaspoon salt 
         1 tablespoon white sugar 
         1 ¼ cups milk 
         1 egg 
         3 tablespoons butter, melted</Text>
        
          
         <Text style={styles.cardTitle}>Recipe</Text>
          <Text style= {styles.cardDetails}>In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter mix until smooth. 
          Heat a lightly oiled griddle or frying pan over medium high heat. 
          Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. 
          Brown on both sides and serve hot.</Text>
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




export default ScreenTwo;