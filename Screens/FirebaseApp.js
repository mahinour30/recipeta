import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import firestore from '@react-native-firebase/firestore';




class FirebaseApp extends Component{
    state={
        user:{
            name:""
        }
    }
    constructor(props){
        super(props);
        this.getUser();
        // this.getUsers();
        this.subscriber = firestore().collection("users").
        doc('Yq29hEQ20XJpWcQIqncK').onSnapshot(doc =>{
            this.setState({
                user:{
                    name:doc.data().name
                }
            })
        })
        firestore()
            .collection('users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                    querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
    }
    getUser = async() =>{
        const userDocument = await firestore()
        .collection('users').
        doc('Yq29hEQ20XJpWcQIqncK')
        .get()
        console.log(userDocument)
    }
    // getUsers = async() =>{
    //     const userDocuments = await firestore()
    //     .collection('users').
    //     where('age','<',18 )
    //     .get()
    //     console.log(userDocuments)
    // }
    render(){
        return(
            <View>
                <Text> Name :{this.state.user.name} </Text>
            </View>
        );
    }
}


export default FirebaseApp