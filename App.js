import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import{Audio }from'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri:"http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay:true}
       )
  }

  render() {
    return (
      <TouchableOpacity style={{
        backgroundColor:"purple",
        marginLeft:100,
        borderWidth:2,
        borderColor:"black",
        alignItem:'center',
        justifyContent:'center',
        width:100,
        height:50,
        borderRadius:40

      }}
      onPress={this.playSound}>
      <Text style={{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:10
      }}>Press Me
      </Text>
      </TouchableOpacity>
     
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


