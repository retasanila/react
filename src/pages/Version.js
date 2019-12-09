import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar ,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Version extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dasboardTextCont}>
        <Text style={styles.dasboardT}>-N A N A B A S E</Text>
          <Text style={styles.dasboardText}>  Monday, 4 November 2019</Text>
          <Text style={styles.dasboardText}>  By: Reta Sanila Bunga Mujahidah</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8bbd0',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
    
  },

  dasboardTextCont: {
    flex: 1,
    fontSize: 18,
    marginVertical: 200,
    width: 300,
    paddingVertical: 30,
    

  },

  dasboardText: {
    color: '#8b6b61',
    fontSize: 18,
    
  },

  dasboardT: {
    color: '#321911',
    width: 300,
    fontSize: 20,
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },

});