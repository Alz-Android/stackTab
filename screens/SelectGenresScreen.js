import React, { useState } from 'react'
import { Button, Text, View, ImageBackground, CheckBox, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles.js'



export function SelectGenresScreen({navigation}) {

    const [genre, setVisible] = useState( {
        action: false,
        adventure: false,
        anime: false,
        horror: false,
        romance: false,
        scifi: true,
      }
    )
    

    const [isSelected, setSelection] = useState(false);

    return(
        <View style={styles.container}>  





            <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
            </View>
            <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>

            <View style={{flexDirection: 'row'}}>             
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/111/80/80.jpg' }} >      
                    <Text style={styles.loginText}>Action</Text>
                    <Text style={styles.loginText}>{ JSON.stringify(genre.action) }</Text>
                </ImageBackground>     
                <CheckBox
                    value= {genre.action}
                    onValueChange={setVisible}
                    // onChange= { () => setVisible( !genre.action)}
                />                    
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/12/80/80.jpg' }} >
                <Text style={styles.loginText}>Adventure</Text>
                </ImageBackground>  
                <CheckBox
                value={genre.adventure}
                onChange={() => setVisible( !genre.adventure)}
                />
            </View>
            <View style={{flexDirection: 'row'}}>             
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/113/80/80.jpg' }} >      
                <Text style={styles.loginText}>Romance</Text>
                </ImageBackground>         
                <CheckBox
                value={genre.romance}
                onChange={() => setVisible( !genre.romance )}
                />                    
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
                <Text style={styles.loginText}>SciFi</Text>
                </ImageBackground>  
                <CheckBox
                value={genre.scifi}
                onChange={() => setVisible( !genre.scifi )}
                />
            </View>



        <TouchableOpacity style={styles.loginBtn} 
            onPress={() => navigation.navigate('MainTabs', {
                screen: 'Following',
                params: {
                        action: genre.action, 
                        adventure: genre.adventure,
                        anime: genre.anime, 
                        horror: genre.horror,
                        romance: genre.romance,  
                        scifi: genre.scifi          
                  },
              })}>
            <Text>Next</Text>
        </TouchableOpacity>          
        </View>
  );
}