import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component{

dashboard() {
   Actions.dashboard()
   } 

  render() {
    return (
    <View style={styles.container}>
      <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.7)"
        selectionColor="#fff"
        onSubmitEditing={()=> this.password.focus()}
      />

      <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="rgba(255,255,255,0.7)"
        ref={(input) => this.password = input}
      />

      <TouchableOpacity style={styles.button} onPress={this.dashboard}>
      <Text style={styles.buttonText}>{this.props.type}</Text>
      </TouchableOpacity>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color:'#ffffff',
    marginVertical: 10
  },

  button: {
    width: 300,
    backgroundColor: '#8b6b61',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'

  }


});
