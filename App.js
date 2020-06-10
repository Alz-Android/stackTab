import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {LoginScreen}        from './screens/LoginScreen.js'
import {SelectGenresScreen} from './screens/SelectGenresScreen.js'
import {MainTabsScreen}     from './screens/MainTabsScreen.js'

const Stack = createStackNavigator();
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectGenres" component={SelectGenresScreen} />
        <Stack.Screen name="MainTabs" component={MainTabsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
