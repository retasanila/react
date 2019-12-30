import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {
  dashboard() {
  Actions.dashboard()
  } 

  signup() {
  Actions.signup()
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Logo/> 
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          selectionColor="#fff"
          
        />

        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="rgba(255,255,255,0.7)"
          
        />

        <TouchableOpacity style={styles.button} onPress={this.dashboard}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
          
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet??</Text>

          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#321911',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection:'row'
  },

  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },

  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
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