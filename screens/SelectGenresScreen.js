import React, { useState } from 'react'
import { Button, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles.js'

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';

export function SelectGenresScreen({navigation}) {

   const [action, setAction] = useState(false);
   const [adventure, setAdventure] = useState(false);
   const [anime, setAnime] = useState(false);
   const [horror, setHorror] = useState(false);
   const [romance, setRomance] = useState(false);
   const [scifi, setScifi] = useState(false);

    return(
        <View style={styles.container}>  
            <View style={{flexDirection: 'row'}}>             
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/111/80/80.jpg' }} >      
                    <Text style={styles.loginText}>Action</Text>
                </ImageBackground>     
                <CheckBox
                    
                    value= {action}
                    onValueChange={setAction}
                />                    
            </View>
             
            <View style={{flexDirection: 'row'}}>
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/112/80/80.jpg' }} >
                    <Text style={styles.loginText}>Adventure</Text>
                </ImageBackground>  
                <CheckBox
                value={adventure}
                onValueChange={setAdventure}
                />
            </View>
            <View style={{flexDirection: 'row'}}>             
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/113/80/80.jpg' }} >      
                    <Text style={styles.loginText}>Romance</Text>
                </ImageBackground>         
                <CheckBox
                value={romance}
                onValueChange={setRomance}
                />                    
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/114/80/80.jpg' }} >
                    <Text style={styles.loginText}>SciFi</Text>
                </ImageBackground>  
                <CheckBox
                value={scifi}
                onValueChange={setScifi}
                />
            </View> 

        <TouchableOpacity style={styles.loginBtn} 
            onPress={() => navigation.navigate('MainTabs', {
                screen: 'Follow',
                params: {
                        action: action, 
                        adventure: adventure,
                        anime: anime, 
                        horror: horror,
                        romance: romance,  
                        scifi: scifi          
                  },
              })} >
            <Text>Next</Text>
        </TouchableOpacity>          
        </View>
  );
}
