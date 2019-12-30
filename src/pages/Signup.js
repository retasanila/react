import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';

export default class InputUsers extends Component<{}> {  
  login() {
  Actions.login();
  }

  InputUsers() {
  Actions.InputUsers();
  }

  constructor(props){
    super(props)
    this.state = {
      TextInputEmail:'',
      TextInputUsername:'',
      TextInputPhone:'',
      TextInputPassword:'',
    }
  }

  InsertUsers= () => {
    const {TextInputEmail} = this.state;
    const {TextInputUsername} = this.state;
    const {TextInputPhone} = this.state;
    const {TextInputPassword} = this.state;

    fetch('http://192.168.43.188/reactnative/insert.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: TextInputUsername,
        email: TextInputEmail,
        phone: TextInputPhone,
        password: TextInputPassword,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      })
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
            onChangeText = {TextInputValue => this.setState({TextInputUsername: TextInputValue})}
          />

            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            selectionColor="#fff"
            keyboardType="email-address"
            onChangeText = {TextInputValue => this.setState({TextInputEmail: TextInputValue})}
          />

          <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText = {TextInputValue => this.setState({TextInputPhone: TextInputValue})}
          />

          <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText = {TextInputValue => this.setState({TextInputUsername: TextInputValue})}
          />

          <TouchableOpacity style={styles.button} onPress={this.InsertUsers}>
          <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

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
  },

  button: {
    width: 300,
    backgroundColor: '#321911',
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