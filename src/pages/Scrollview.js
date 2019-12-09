import React, { Component } from 'react';
import { Platform, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Dimensions, 
  Image,
  TouchableOpacity
   } from 'react-native';

import {Actions} from 'react-native-router-flux';

var deviceWidth = Dimensions.get('window').width;


export default class App extends Component<{}> {

signup() {
Actions.signup()
}

login() {
Actions.login();
}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.firstView}>
            <Text style={styles.headerText}>Reta Sanila</Text>
          </View>

          <View style={styles.secondView}>
            <Text style={styles.headerText}>Bunga Mujahidah</Text>
          </View>

          <View style={styles.thirdView}>
            <Text style={styles.headerText}>Informatika 5</Text>
          </View>

          <View style={styles.forthView}>
          <Image style={{width: 300, 
            height: 300, 
            borderRadius: 150,
            marginVertical: 20}} 
            source={require('../images/Logo.png')}/>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.signup}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'white',
    fontWeight: "bold"
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: '#f8bbd0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: '#5d4037',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  thirdView: {
    width: deviceWidth,
    backgroundColor: '#c48b9f',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  forthView: {
    width: deviceWidth,
    backgroundColor: '#8b6b61',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 13,
  },

  buttonText: {
    fontSize: 16,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'

  }

});