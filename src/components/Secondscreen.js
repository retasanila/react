import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Secondscreen extends Component<{}> {

  dashboard() {
   Actions.dashboard()
   } 

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> -N O T I F I C A T I O N- </Text>
        </View>
         <TouchableOpacity onPress={this.dashboard}>
          <Text style={styles.TextA}>back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#5d4037',
    flex: 1,
  },

  header: {
    backgroundColor: '#321911',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0,0,0,0.5)',
    borderBottomWidth: 2,
  },

  headerText: {
    color: '#ffffff',
    fontSize: 20,
    padding: 15,
    
  },

  Text: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: '#ffffff',
    fontWeight: "bold"
  },

  TextA: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'rgba(255,255,255,0.5)',
  }



});