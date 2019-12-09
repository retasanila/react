import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
    <View style={styles.container}>
      <Image style={{width: 130, 
        height: 130, 
        borderRadius: 80,
        marginVertical: 10}} 
        source={require('../images/Logo.png')}/>
      <Text style={styles.logoText}>NANABASE</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoText : {
    marginVertical: 5,
    fontSize: 30,
    color:'#ffffff',
  }
});