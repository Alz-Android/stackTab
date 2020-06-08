import * as React from 'react';
import { Button, Text, View, ImageBackground, CheckBox } from 'react-native';
import {styles} from './../styles/styles.js'

export function SelectGenresScreen(props) {
    
  return(
        <View style={styles.container}>  
          <View style={{flexDirection: 'row'}}>             
            <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/111/80/80.jpg' }} >      
              <Text style={styles.loginText}>Action</Text>
            </ImageBackground>         
            <CheckBox
    //        value={this.state.action}
   //         onChange={() => this.setState({ action: !this.state.action })}
            />                    
          </View>
          
          {/* <View style={{flexDirection: 'row'}}>
            <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/12/80/80.jpg' }} >
              <Text style={styles.loginText}>Adventure</Text>
            </ImageBackground>  
            <CheckBox
              value={this.state.adventure}
              onChange={() => this.setState({ adventure: !this.state.adventure })}
            />
          </View>
          <View style={{flexDirection: 'row'}}>             
            <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/113/80/80.jpg' }} >      
              <Text style={styles.loginText}>Romance</Text>
            </ImageBackground>         
            <CheckBox
            value={this.state.romance}
            onChange={() => this.setState({ romance: !this.state.romance })}
            />                    
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <ImageBackground  style={styles.imageThumbnailTitles} source={{ uri: 'https://i.picsum.photos/id/121/80/80.jpg' }} >
              <Text style={styles.loginText}>SciFi</Text>
            </ImageBackground>  
            <CheckBox
              value={this.state.scifi}
              onChange={() => this.setState({ scifi: !this.state.scifi })}
            />
          </View> */}


          {/* <TouchableOpacity style={styles.loginBtn} 
            onPress={() => this.props.navigation.navigate('SelectNovel',
              {action: this.state.action, 
              adventure: this.state.adventure,
              anime: this.state.anime, 
              horror: this.state.horror,
              romance: this.state.romance,  
              scifi: this.state.scifi          
              })}>
            <Text>Next</Text>
          </TouchableOpacity>           */}
        </View>
  );
}