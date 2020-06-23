import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './../styles/styles.js'

import {SelectGenresScreen} from './SelectGenresScreen.js'
import AsyncStorage from '@react-native-community/async-storage';

const Tab = createMaterialTopTabNavigator();
export function MainTabsScreen({navigation}) {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused
          ? 'ios-list-box'
          : 'ios-list';
        }
          return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
          }}
      >
        <Tab.Screen name="Following" component={FollowingScreen} />
        <Tab.Screen name="Discover" component={DetailsStackScreen1} />
        <Tab.Screen name="Browse" component={DetailsStackScreen2} />
        <Tab.Screen name="Playlists" component={DetailsStackScreen3} />
      </Tab.Navigator>
  );
}

 function FollowingScreen() {
 
    const [action, setAction] = useState(false);
    const [adventure, setAdventure] = useState(false);
    // const [anime, setAnime] = useState(false);
    // const [horror, setHorror] = useState(false);
    // const [romance, setRomance] = useState(false);
    // const [scifi, setScifi] = useState(false);
    
      async function readData() {
        alert("fetched data 0")
        const action = await AsyncStorage.getItem("action_KEY");
        const adventure = await AsyncStorage.getItem("adventure_KEY")
        // const anime = await AsyncStorage.getItem("anime_KEY")
        // const horror = await AsyncStorage.getItem("horror_KEY")
        // const romance = await AsyncStorage.getItem("romance_KEY")
        // const scifi = await AsyncStorage.setItem("scifi_KEY")

        setAction(action);
        setAdventure(adventure);
        // setAnime(anime);
        // setHorror(horror);
        // setRomance(romance);
        // setScifi(scifi);

        alert(action)
      }
    
      useEffect(() => {
        readData();
      }, []);
    
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{textAlign: 'center'}}>{action}</Text>
        </View>
      );
    }


 function DetailsStackScreen1() {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{textAlign: 'center', marginTop: 300}}>Details Screen1</Text>
     </View>
   );
 }

 function DetailsStackScreen2(navigation) {
  return (
        SelectGenresScreen(navigation)
    //  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //    <Text style={{textAlign: 'center'}}>Details Screen2</Text>
    //  </View>
   );
 }

 function DetailsStackScreen3() {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{textAlign: 'center', marginTop: 300}}>Details Screen3</Text>
     </View>
   );
 }