import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  AppRegistry,  
  Platform
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Thirdscreen extends Component<{}> {
 
chat() {
    Actions.firstscreen();
  }

alert() {
    Alert.alert(
    'Buy This Book??',
    'Checkout Now',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK')},
    ],
    {cancelable: false},
  );
  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={{width: 350, 
            height: 350, 
            borderRadius: 5,
            marginVertical: 10}} 
            source={require('../images/3.jpg')}/>
        </View>
        <View style={styles.tittle}>
          <Text style={styles.text}>CHOCHO BOOK</Text>
          <Text style={styles.pay}> Rp.100.000,00-</Text>
        </View>
      

      <View style={styles.footer}>

            <View style={styles.nav}>
            <TouchableOpacity onPress={this.chat}>
            <Image
                style={{width: 60, height: 65}}
                source={require('../images/chat.png')} />
            </TouchableOpacity>
            </View>

            <View style={styles.nav} >
            <TouchableOpacity onPress={this.alert}>
            <Image
                style={{width: 60, height: 60}}
                source={require('../images/trolley.png')} />
            </TouchableOpacity>
            </View>

        </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffeeff', 
    flex: 1,
  },

  image: {
    alignItems: 'center',
   },

  text: {
    fontSize: 30,
  },

  pay: {
    fontSize: 20,
  },

  tittle: {
    color: '#321911',
    left: 5,
    top: 0,
    
  },

  nav:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8bbd0'
  },

  footer:{
    backgroundColor: '#f8bbd0',
    flexDirection: 'row',
    height: 50,  
    borderTopWidth: 2,
    borderTopColor: '#ddd',
    marginVertical: 128
  },


});
