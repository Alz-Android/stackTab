import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import {styles} from './../styles/styles.js'

export function LoginScreen({navigation}) {
    state={
      email:"",
      password:"",
      confirmPassword:""
    }
    
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>RailViewer</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
 //             onChangeText={text => this.setState({email:text})}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
 //             onChangeText={text => this.setState({password:text})}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.loginBtn}>
            <Text >LOGIN</Text>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.loginText} onPress={() => navigation.navigate('Register')}>Register</Text>
          </TouchableOpacity>  
          
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SelectGenres')}> 
            <Text >TRY NOW</Text>
          </TouchableOpacity>
        </View>
      );
    }
  