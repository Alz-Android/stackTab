import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';


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

// export function MainTabsScreen({ route, navigation}) {

//   const { action } = route.params;
//   return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text style={{textAlign: 'center', marginTop: 300}}>{ JSON.stringify(action) }</Text>
//      </View>
//    );
//  }

 function DetailsStackScreen({route, navigation}) {
  
  const { action } = route.params;

  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{textAlign: 'center', marginTop: 300}}>{ JSON.stringify(action) }</Text>
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