import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,

  AppRegistry,  
  Platform
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Thirdscreen extends Component<{}> {
 
login() {
  Actions.login();
  }

versi() {
  Actions.version();
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> -P R O F I L- </Text>
        </View>

        <View style={styles.image}>
        <TouchableOpacity>
          <Image style={{width: 200, 
            height: 200, 
            borderRadius: 150,
            marginVertical: 10}} 
            source={require('../images/Logo.png')}/>
        </TouchableOpacity>
        </View>

         <ScrollView contentContainerStyle = { styles.scrollView}>
            <TouchableOpacity>
              <Text style = { styles.item }>Tag</Text>
              <View style = { styles.separator }/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = { styles.item }>Troli</Text>
              <View style = { styles.separator }/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = { styles.item }>History</Text>
              <View style = { styles.separator }/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = { styles.item }>Setting</Text>
              <View style = { styles.separator }/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.login}>
              <Text style = { styles.item }>Logout</Text>
              <View style = { styles.separator }/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.versi}>
              <Text style = { styles.item }>Version</Text>
              <View style = { styles.separator }/>
            </TouchableOpacity>
        </ScrollView>
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
    backgroundColor: '#c48b9f',
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

  Text: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: '#c48b9f',
    fontWeight: "bold"
  },

  TextA: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: '#000000',
  },

  button: {
    width: 300,
    backgroundColor: '#8b6b61',
    borderRadius: 25,
    marginVertical: 50,
    paddingVertical: 13,
  },

  buttonText: {
    fontSize: 16,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'
  },

  scrollView: {
      alignSelf: 'stretch'
   },
 
   item: {
      padding: 15,
      alignSelf: 'stretch',
      color: '#8b6b61',
      fontSize: 18
   },
 
   separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#ddd'
   },

   image: {
    alignItems: 'center',
   }

});

AppRegistry.registerComponent('VerticalScrollView', () => VerticalScrollView);