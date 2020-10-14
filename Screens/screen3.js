import React from 'react';
import {StyleSheet,View,Text,  Image, ScrollView, TouchableOpacity,Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import files from './base64';


const ScreenThree= ({navigation}) => {


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
      <Image source={require('../Images/CheeseCake.jpg')} 
            style={{height:'100%', width:'100%', borderBottomRightRadius:75}}/>
            </View>
            
      <View style={[styles.footer]}>

      <View style = {styles.cardsWrapper}>
        <Text style={styles.cardTitle}>Cheese Cake</Text>
          <Text style= {styles.cardDetails}>enough for 8 people</Text>
          <Text style={styles.cardTitle}>Ingredients</Text>

         <Text style= {styles.cardDetails}>1 (8 ounce) package cream cheese 
         1 cup white sugar 
         ½ cup confectioners\' sugar 
         1 cup sour cream 
         ¼ cup milk 
         2 teaspoons vanilla extract 
         3 large eggs 
         1 cup sour cream 
         ¼ cup confectioners\' sugar 
         1 teaspoon vanilla extract 
         1 ½ cups fresh strawberries, halved 
         1 cup fresh blueberries 
         1 cup strawberry glaze</Text>
        
          
         <Text style={styles.cardTitle}>Recipe</Text>
          <Text style= {styles.cardDetails}>Preheat oven to 350 degrees F (175 degrees C.) 
          In a large bowl, beat the cream cheese, white sugar and 1/2 cup confectioners sugar until smooth. Beat in 1 cup sour cream, milk and 1 teaspoon vanilla. Slowly beat in eggs, one at a time. Pour filling into crust. 
          Bake in the preheated oven for 25 minutes, or until filling is set. Cool for 20 minutes. Preheat oven to 425 degrees F (220 degrees C.) 
          In a small bowl, combine 1 cup sour cream, 1/4 cup confectioners\' sugar and 1 teaspoon vanilla. Mix until smooth, then spread over cheesecake. Bake in preheated oven for 5 minutes. Allow to cool, then refrigerate for at least 1 hour. 
          Arrange strawberries and blueberries on top of the cheesecake. Spoon strawberry glaze over berries. Refrigerate several hours before serving.</Text>
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




export default ScreenThree;