import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './../styles/styles.js'

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
        <Tab.Screen name="Following" component={DetailsStackScreen} />
        <Tab.Screen name="Discover" component={DetailsStackScreen1} />
        <Tab.Screen name="Browse" component={DetailsStackScreen2} />
        <Tab.Screen name="Playlists" component={DetailsStackScreen3} />
      </Tab.Navigator>
  
  );
}

 function DetailsStackScreen({route, navigation}) {
  
  const { action, adventure, anime, horror, romance, scifi } = route.params;

  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       {/* <Text style={{textAlign: 'center'}}>{ JSON.stringify(action) }</Text>
       <Text style={{textAlign: 'center'}}>{ JSON.stringify(adventure) }</Text>
       <Text style={{textAlign: 'center'}}>{ JSON.stringify(anime) }</Text>
       <Text style={{textAlign: 'center'}}>{ JSON.stringify(horror) }</Text>
       <Text style={{textAlign: 'center'}}>{ JSON.stringify(romance) }</Text>
       <Text style={{textAlign: 'center'}}>{ JSON.stringify(scifi) }</Text> */}



       <View style={action ?  { display:"flex" } : { display:"none" }}>
        <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
            <Text style={styles.loginText}>Action</Text>
        </ImageBackground>  
      </View>
       <View style={adventure ?  { display:"flex" } : { display:"none" }}>
        <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
            <Text style={styles.loginText}>Adventure</Text>
        </ImageBackground>  
      </View>
      <View style={anime ?  { display:"flex" } : { display:"none" }}>
        <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
            <Text style={styles.loginText}>Anime</Text>
        </ImageBackground>  
      </View>
       <View style={horror ?  { display:"flex" } : { display:"none" }}>
        <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
            <Text style={styles.loginText}>Horror</Text>
        </ImageBackground>  
      </View>
      <View style={romance ?  { display:"flex" } : { display:"none" }}>
        <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
            <Text style={styles.loginText}>Romance</Text>
        </ImageBackground>  
      </View>
       <View style={scifi ?  { display:"flex" } : { display:"none" }}>
        <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
            <Text style={styles.loginText}>SciFi</Text>
        </ImageBackground>  
      </View>


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

 function DetailsStackScreen2() {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{textAlign: 'center', marginTop: 300}}>Details Screen2</Text>
     </View>
   );
 }

 function DetailsStackScreen3() {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{textAlign: 'center', marginTop: 300}}>Details Screen3</Text>
     </View>
   );
 }