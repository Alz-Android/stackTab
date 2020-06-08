import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import {LoginScreen}        from './screens/LoginScreen.js'
import {SelectGenresScreen} from './screens/SelectGenresScreen.js'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectGenres" component={SelectGenresScreen} />
        <Stack.Screen name="Settings" component={SettingsStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function SelectGenresScreen() {
    
//   return(
//       <View style={styles.container}>
//           <Text style={styles.logo}>Select</Text>
//       </View>
//   );
// }



// function HomeStackScreen({ navigation }) {
//  return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{textAlign: 'center', marginTop: 300}}>Home Screen</Text>
//       <Button
//           title="Go to Settings"
//           onPress={() => navigation.navigate('Settings')}
//         />
//     </View>
//   );
// }

const Tab = createMaterialTopTabNavigator();
function SettingsStackScreen() {
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

          return <Ionicons name={iconName} size={size} color={color}     />;
            },
          })}
          tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          }}
      >
        <Tab.Screen name="Home" component={DetailsStackScreen} />
        <Tab.Screen name="Settings" component={DetailsStackScreen1} />
      </Tab.Navigator>
  
  );
}

// function DetailsStackScreen() {
//   return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text style={{textAlign: 'center', marginTop: 300}}>Details Screen</Text>

//      </View>
//    );
//  }

//  function DetailsStackScreen1() {
//   return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text style={{textAlign: 'center', marginTop: 300}}>Details Screen1</Text>

//      </View>
//    );
//  }





