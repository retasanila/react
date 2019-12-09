import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  login() {
  Actions.login();
  }


  render() {
    return (
      
      <View style={styles.container}>
        <Logo/> 
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            selectionColor="#fff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
          />

          <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Phone Number"
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={(input) => this.password = input}
          />

          <Form type="Signup"/>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account??</Text>
          <TouchableOpacity onPress={this.login}>
            <Text style={styles.signupButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#5d4037',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection:'row'
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

  signupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },

  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});