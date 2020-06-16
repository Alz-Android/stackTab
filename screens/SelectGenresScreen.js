import React, { useState } from 'react'
import { Button, Text, View, ImageBackground, CheckBox, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles.js'
import AsyncStorage from '@react-native-community/async-storage';



export function SelectGenresScreen({navigation}) {

    const action = false;
    const adventure = false;
    const anime = false;
    const horror = false;
    const romance = false;
    const scifi = false;

//    const [action, setAction] = useState(false);
//    const [adventure, setAdventure] = useState(false);
//    const [anime, setAnime] = useState(false);
//    const [horror, setHorror] = useState(false);
//    const [romance, setRomance] = useState(false);
//    const [scifi, setScifi] = useState(false);

   const saveData = async () => {
    try {
      await AsyncStorage.setItem("action_KEY", "test") //JSON.stringify(action))
      await AsyncStorage.setItem("adventure_KEY", JSON.stringify(adventure))
      await AsyncStorage.setItem("anime_KEY", JSON.stringify(anime))
      await AsyncStorage.setItem("horror_KEY", JSON.stringify(horror))
      await AsyncStorage.setItem("romance_KEY", JSON.stringify( romance))
      await AsyncStorage.setItem("scifi_KEY", JSON.stringify(scifi))
      alert('Data successfully saved')
      const x = await AsyncStorage.getItem("action_KEY")
      alert(x)
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }


    return(
        <View style={styles.container}>  
            <View style={{flexDirection: 'row'}}>             
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/111/80/80.jpg' }} >      
                    <Text style={styles.loginText}>Action</Text>
                </ImageBackground>     
                <CheckBox
                    value= {action}
                    onValueChange={saveData}
                />                    
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/12/80/80.jpg' }} >
                    <Text style={styles.loginText}>Adventure</Text>
                </ImageBackground>  
                <CheckBox
                value={adventure}
                onValueChange={saveData}
                />
            </View>
            <View style={{flexDirection: 'row'}}>             
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/113/80/80.jpg' }} >      
                    <Text style={styles.loginText}>Romance</Text>
                </ImageBackground>         
                <CheckBox
                value={romance}
                onValueChange={saveData}
                />                    
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
                    <Text style={styles.loginText}>SciFi</Text>
                </ImageBackground>  
                <CheckBox
                value={scifi}
                onValueChange={saveData}
                />
            </View>

        <TouchableOpacity style={styles.loginBtn} 
            onPress={() => navigation.navigate('MainTabs', {
                screen: 'Following',
                params: {
                        // action: action, // genre.action ..
                        // adventure: adventure,
                        // anime: anime, 
                        // horror: horror,
                        // romance: romance,  
                        // scifi: scifi          
                  },
              })} >
            <Text>Next</Text>
        </TouchableOpacity>          
        </View>
  );
}



// can't figure how to do all genres with one usestate 
    // const [genre, setVisible] = useState( {
    //     action: false,
    //     adventure: false,
    //     anime: false,
    //     horror: false,
    //     romance: false,
    //     scifi: true,
    //   }
    // )
    
    // const handleChange = (event) => {
    //     const target = event.target;
    //     const value =  event.value;    //target.type === "checkbox" ? target.checked : target.value;
    //     const name = event.name;
    //     console.log(event);

    //     setVisible(oldCredentials => ({
    //       ...oldCredentials,
    //       [name]: value
    //     }));
    //   };
    

    // const [isSelected, setSelection] = useState(false);

    //         <View style={styles.checkboxContainer}>
    //             <CheckBox
    //                 value={isSelected}
    //                 onValueChange={setSelection}
    //                 style={styles.checkbox}
    //             />
    //             <Text style={styles.label}>Do you like React Native?</Text>
    //         </View>
    //         <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>

