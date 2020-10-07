
import React, {useState} from 'react';
import {View,Text, TouchableOpacity,ScrollView, ImageBackground, TextInput, StyleSheet, Platform, ImagePickerIOS} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import { color } from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePost= ({navigation}) => {

  const [image,setImage] = useState('https://avatars.dicebear.com/api/:sprites/:seed.svg');
  // const {photo}=this.state;

  const {colors}=useTheme();

  const takePhotoFromCamera=()=>{
    const options={
      noData:true
    };
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(0);
    });

      
  }

  
  const takePhotoFromLibrary=()=>{
    const options={
      noData:true
    };
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(0);
    });

  };

   renderInner= ()=>(
    <View style={styles.panel}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>

      <TouchableOpacity style={styles.panelButton} onPress={()=>{takePhotoFromCamera()}}>
        <Text style={styles.PanelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={()=>{takePhotoFromLibrary()}}>
        <Text style={styles.PanelButtonTitle}>Choose From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={()=>{bs.current.snapTo(1)}}>
        <Text style={styles.PanelButtonTitle} >Cancel</Text>
      </TouchableOpacity>
    </View>
    
  );
   renderHeader= ()=>(
    <View style={styles.header}>
      <View style={styles.panelHeader}>
      <View style={styles.panleHandle}>

    </View> 
    </View>
    </View>
  );

  const bs=React.createRef();
  const fall=new Animated.Value(1);
  return(


    <ScrollView style={[styles.container,{backgroundColor:'pink'}]}>


 {/* ///////////////////// INFO //////////////////////// */}

 <Animated.View style ={[styles.footer1, { backgroundColor:'#333333',
    opacity: Animated.add(0.3,Animated.multiply(fall,1.0))}]}>
      <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'#333333',borderTopLeftRadius:75,borderBottomRightRadius:75}}>
          </View>




          <View style={{flex:1, backgroundColor:'pink', borderTopLeftRadius:75, paddingTop:45,borderBottomRightRadius:75, paddingHorizontal:20, paddingVertical:20}}>
          <View style={styles.action}>



                  <FontAwesome name='cutlery' color={'#333333'} size={20} style={{marginTop:12, paddingEnd:10}}/>
                  <TextInput 
                  numberOfLines={1}
                  placeholder='Title'
                  placeholderTextColor='#666666'
                  style={[styles.TextInput,{color:'#333333'},{width:335,
                  }]}
                  autoCorrect={false}/>
                </View>




                <View style={styles.action}>
                  <FontAwesome name='info' color={'#333333'} size={20} style={{marginTop:12, paddingEnd:10}}/>
                  <TextInput 
                  multiline={true}
                  placeholder='Description'
                  placeholderTextColor='#666666'
                  style={[styles.TextInput,{ color:'#333333'},{width:335,
                  }]}
                  autoCorrect={false}/>
                </View>





                <View style={styles.action}>
                  <FontAwesome name='list' color={'#333333'} size={20} style={{marginTop:12, paddingEnd:10}}/>
                  <TextInput 
                  multiline={true}
                  placeholder='Ingredients'
                  placeholderTextColor='#666666'
                  keyboardType='email-address'
                  style={[styles.TextInput,{ color:'#333333'},{width:335,
                  }]}
                  autoCorrect={false}/>
                </View>





                <View style={[styles.action, {marginBottom:20}]}>
                  <FontAwesome name='align-left' color={'#333333'} size={20} style={{marginTop:12, paddingEnd:10}}/>
                  <TextInput
                  multiline={true}
                  placeholder='Recipe'
                  placeholderTextColor='#666666'
                  keyboardType='email-address'
                  style={[styles.TextInput,{ color:'#333333'},{width:335,
                  }]}
                  autoCorrect={false}/>
                </View>





          </View>
    
          </Animated.View>
     
          {/* ///////////////////// IMAGE //////////////////////// */}

          <View style={[styles.header,{alignItems:'center', borderTopLeftRadius:75, backgroundColor:'#333333'}]}>
      <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
          <View style={{
            height:150, width:'100%', borderWidth:2,backgroundColor:'gray', borderRadius:15, justifyContent:'center',alignItems:'center',paddingBottom:30, marginVertical:30,
          }}>
          
            <ImageBackground source={{uri:image,}} 
            style={{height:200, width:200}}
            imageStyle ={{borderRadius:15}}>
           
              <View style={{
                flex:1, justifyContent:'center', alignItems:'center',
              }}>
                <Icon name='camera' size={35} color={'#333333'} style={{
                  opacity:0.7,alignItems:'center', justifyContent:'center',borderWidth:1, borderColor:'#fff',borderRadius:10
                }}/>
              </View>
            </ImageBackground>

             
          </View>
        </TouchableOpacity>
                

      </View>
      
      <BottomSheet
        ref={bs}
        snapPoints={[330,0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
            
      


         

                {/* ///////////////////// BUTTON //////////////////////// */}

      <View style ={[styles.footer2, { backgroundColor:'#333333',}]}>
      <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'#333333',borderTopLeftRadius:75,borderBottomRightRadius:75}}>
          </View>
          <View style={{flex:1, backgroundColor:'pink', borderTopRRadius:75,borderTopLeftRadius:75,borderBottomLeftRadius:75,borderBottomRightRadius:75}}>
            <View style ={{paddingVertical:60, paddingHorizontal:35}}>
               <TouchableOpacity style= {[styles.commandButton, {backgroundColor:'#333333'}]} onPress={() => navigation.navigate('Home')}>
                  <Text style= {{color:'pink',fontSize:17,
    fontWeight:'bold'}}>Submit</Text>
                </TouchableOpacity>

            </View>
         
          </View>

          
      </View>
          
     
    </ScrollView>
  )

  }
  export default CreatePost;

  
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  commandButton:{
    padding:15,
    borderRadius:25,
    backgroundColor:'pink',
    alignItems:'center',
    marginTop:10,
    width:350,
  },
  panel:{
    padding:20,
    backgroundColor:'pink',
    paddingTop:20,
  },
  header:{
  shadowColor:'pink',
  shadowOffset:{width:-1,height:-3},
  shadowRadius:2,
  shadowOpacity:0.4,
  paddingTop:20,
  flex:.80,
    borderBottomRightRadius:75,
  },

  footer:{
    flex:3,
    paddingHorizontal:20,
    paddingVertical:30,
  },
  footer1:{
    flex:1.5,
  },
  footer2:{
    flex:3,
  },
  panelHeader:{
    alignItems:'center',
  },
  panleHandle:{
    width:40,
    height:8,
    borderRadius:4,
    backgroundColor:'#00000040',
    marginBottom:10,
  },
  panelTitle:{
    fontSize:27,
    height:35,
    color:'white'
  },
  panelSubtitle:{
    fontSize:14,
    color:'gray',
    height:30,
    marginBottom:10,
    color:'white'
  },
  panelButton:{
    padding:13,
    borderRadius:10,
    backgroundColor:'white',
    alignItems:'center',
    marginVertical:7,

  },
  PanelButtonTitle:{
    fontSize:17,
    fontWeight:'bold',
    color:'pink',
  },
  action:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5,
    alignSelf:'flex-start',
  },
  actionError:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#ff0000',
    paddingBottom:5,
  },
  textInput:{
    flex:1,
    marginTop: Platform.OS === 'ios' ? 0:-12,
    paddingLeft:10,
    color:'#05375a',

  },
})