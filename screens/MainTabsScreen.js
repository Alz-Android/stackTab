import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './../styles/styles.js'

import {SelectGenresScreen} from './SelectGenresScreen.js'

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

 function FollowingScreen({route, navigation}) {
  
  //const { action, adventure, anime, horror, romance, scifi } = route.params;
  // const [action, setAction] = useState(false);

  const readData = async () => {
    alert("fetched data 0")
    try {
     
      const action = await AsyncStorage.getItem("action_KEY");
      // const adventure = await AsyncStorage.getItem("adventure_KEY")
      // const anime = await AsyncStorage.getItem("anime_KEY")
      // const horror = await AsyncStorage.getItem("horror_KEY")
      // const romance = await AsyncStorage.getItem("romance_KEY")
      // const scifi = await AsyncStorage.setItem("scifi_KEY")
      alert("fetched data 1")
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }
 
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{textAlign: 'center', marginTop: 300}}>{readData}</Text>
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