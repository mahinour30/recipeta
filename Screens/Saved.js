import React, {useState} from 'react';
import {StyleSheet,Image,View,Text,Animated,TouchableHighlight,TouchableOpacity, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {SwipeListView} from 'react-native-swipe-list-view';
import SavedText from './SavedText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SavedScreen= ({navigation}) => {


  const[listData, setListData]=useState(
    SavedText.map((SavedTextItem,index)=>({
      key:`${index}`,
      title:SavedTextItem.title,
      caption:SavedTextItem.caption,
      photo:SavedTextItem.photo,
    }))
  );


  const closeRow=(rowMap,rowKey)=>{
    if(rowMap[rowKey]){
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow=(rowMap,rowKey)=>{
    closeRow(rowMap,rowKey);
    const newData = [...listData];
    const PrevIndex= listData.findIndex(item=> item.key === rowKey);
    newData.splice(PrevIndex,1);
    setListData(newData);
  };


    const VisibleItem=props=>{
      const {data}=props;
      return(
        <View style = {styles.rowFront}>
        <TouchableHighlight style={styles.rowFrontVisible}>
          <View>
          <TouchableOpacity onPress={()=>{navigation.navigate('Details')}}>
          <View style = {styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image   source={data.item.photo} 
            resizeMode='cover' style={styles.cardImg}/> 
          </View>
          <View style = {styles.cardInfo}>
            <Text style={styles.cardTitle}>{data.item.title}</Text>
            <Text style= {styles.cardDetails}>{data.item.caption}</Text>
          </View>
          </View>
      </TouchableOpacity>
          </View>
        </TouchableHighlight>
        </View>
      )
    };

    const renderItem=(data, rowMap)=>{
      return(<VisibleItem data={data}/>)
    };

    const HiddenItemWithActions=props=>{

      const {swipeAnimatedValue,onClose,onDelete} = props;
      return(
        <View style={styles.rowBack}>
          <TouchableOpacity onPress={()=>{onClose()}} style={[styles.backRightBtn,styles.backRightBtnLeft]}>
          <MaterialCommunityIcons style={styles.trash} name ='close-circle-outline' size={25} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onDelete()}} style={[styles.backRightBtn,styles.backRightBtnRight]}>
         
         
          <Animated.View
                style={[
                  styles.trash,
                  {
                    transform: [
                      {
                        scale: swipeAnimatedValue.interpolate({
                          inputRange: [-90, -45],
                          outputRange: [1, 0],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  },
                ]}>
          <MaterialCommunityIcons  name ='heart-off-outline' size={25} color='white'/>
          </Animated.View>
          </TouchableOpacity>
        </View>
      )
    }

    const renderHiddenItem=(data, rowMap)=>{
      return(<HiddenItemWithActions
      data={data}
      rowMap={rowMap}
      onClose={()=> closeRow(rowMap,data.item.key)}
      onDelete={()=> deleteRow(rowMap,data.item.key)}
      />
      );
    };

  const {colors} = useTheme();

  const theme = useTheme();

  return (


    <View style = {styles.cardsWrapper}>
     <SwipeListView
     data={listData}
     renderItem={renderItem}
     renderHiddenItem={renderHiddenItem}
     leftOpenValue={75}
     rightOpenValue={-150}
     disableRightSwipe
     >
     </SwipeListView>
    


    </View>

 
  );
};


const styles= StyleSheet.create({


    container:{
        flex:1,
        
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
    rowFrontVisible:{
      backgroundColor:'#fff',
      borderRadius:5,
      height:120,
      padding:10,
      marginBottom:15,
    },
    trash:{
      height:25,
      width:25,
      marginRight:7,
    },
    backRightBtnRight:{
      backgroundColor:'red',
      right:0,
      borderTopRightRadius:5,
      borderBottomRightRadius:5,
    },
    backRightBtnLeft:{
      backgroundColor:'#1f65ff',
      right:75,
    },
    rowBack:{
      alignItems:'center',
      backgroundColor:'#DDD',
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:15,
      margin:5,
      marginBottom:15,
      borderRadius:5,
    },
    backTextWhite:{
      color:'#FFF',
    },
    rowFront:{
      backgroundColor:'#FFF',
      borderRadius:5,
      height:140,
      margin:5,
      marginBottom:15,
      shadowColor:'#999',
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    backRightBtn:{
      alignItems:'flex-end',
      bottom:0,
      justifyContent:'center',
      position:'absolute',
      top:0,
      width:75,
      paddingRight:17,
    },


});




export default SavedScreen;