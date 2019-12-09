import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Firstscreen extends Component<{}> {
 
dashboard() {
   Actions.dashboard()
   } 

  render() {
    return (

     <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> -C H A T I N G- </Text>
        </View>

        <View style={styles.footer}>

        <TextInput style={styles.textInput}
              placeholder='Tulis pesan . . .' 
              placeholderTextColor='rgba(255,255,255,0.9)'
              underlineColorAndroid='transparent'>
        </TextInput>

        <TouchableOpacity>
          <Image
                style={{width: 50, height: 50}}
                source={require('../images/send.png')} />
        </TouchableOpacity>

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

  header: {
    backgroundColor: '#f8bbd0',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },

  headerText: {
    color: '#321911',
    fontSize: 20,
    padding: 15,
    fontWeight: "bold",
  },

  textInput: {
    alignSelf: 'stretch',
    color: 'white',
    padding: 10,
    paddingTop: 10,
    backgroundColor: '#c48b9f',
    width: 290,
    fontSize: 18,
    borderRadius: 30,
   
  },

   scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },

  footer: {
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  }, 

   addButton: {
    backgroundColor: '#ffeeff',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1000,
    marginBottom: 0,
    zIndex: 10,
  },

  addButtonText: {
    color:'#321911',
    fontSize: 50,

  },


});