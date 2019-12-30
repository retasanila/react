import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar ,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

function List({ title, harga, img }) {

  return (

    <View>
          <View style={styles.item}>

            <Image style={styles.thumb}  source={img} />
            <Text style={styles.judul}>{title}</Text>
            <Text style={styles.harga}>{harga}</Text>
          </View>
    </View>
  );
}


export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    marketlist: [
      {
        img: require('../images/1.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/2.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/3.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/10.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/5.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/6.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/7.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/8.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/9.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/4.jpg'),
        nama: 'Chocho Book',
        harga: 'Rp.100.000,00'
      },
      // {
      //   img: require('../images/3.jpg'),
      //   nama: 'Chocho Book',
      //   harga: 'Rp.100.000,00'
      // },
      // {
      //   img: require('../images/4.jpg'),
      //   nama: 'Chocho Book',
      //   harga: 'Rp.100.000,00'
      // },
      // {
      //   img: require('../images/1.jpg'),
      //   nama: 'Chocho Book',
      //   harga: 'Rp.100.000,00'
      // },
      // {
      //   img: require('../images/2.jpg'),
      //   nama: 'Chocho Book',
      //   harga: 'Rp.100.000,00'
      // },
      // {
      //   img: require('../images/3.jpg'),
      //   nama: 'Chocho Book',
      //   harga: 'Rp.100.000,00'
      // },
      // {
      //   img: require('../images/4.jpg'),
      //   nama: 'Chocho Book',
      //   harga: 'Rp.100.000,00'
      // },
      
    ]
  };
}

  login() {
  Actions.login();
  }

  chat() {
    Actions.firstscreen();
  }

  notif() {
    Actions.secondscreen();
  }

  profil() {
    Actions.thirdscreen();
  }

  shop() {
    Actions.shop();
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> -N A N A B A S E- </Text>
        </View>

        <View>
        <TextInput 
            placeholder="Cari" 
            style={styles.input}  />
        </View>


      <ScrollView>
       <FlatList
            numColumns={2}
            data={this.state.marketlist}
            renderItem={obj => (

              <TouchableOpacity onPress={this.shop}>
              <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga} />
              </TouchableOpacity>
            
            )}
            keyExtractor={(item, index) => index.toString()}
          />

        
        </ScrollView>

        <View style={styles.footer}>

            
            <View style={styles.nav}>
            <TouchableOpacity onPress={this.chat}>
            <Image
                style={{width: 60, height: 60}}
                source={require('../images/chat.png')} />
            </TouchableOpacity>
            </View>

            <View style={styles.nav}>
            <TouchableOpacity onPress={this.notif}>
            <Image
                style={{width: 50, height: 50}}
                source={require('../images/notif.png')} />
            </TouchableOpacity>
            </View>

            <View style={styles.nav}>
            <TouchableOpacity onPress={this.profil}>
            <Image
                style={{width: 50, height: 50}}
                source={require('../images/profil.png')} />
            </TouchableOpacity>
            </View>

        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 7,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },

  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    textAlign: 'center',
    padding: 5,
  },

  harga: {
    fontSize: 12,
  },

  thumb: {
    width: 150,
    height: 100,
    borderRadius: 5,

  },

  iconcart:{
    height: 25,
    width: 25, 
  },

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
  },

  logoutButton: {
    fontSize: 70,
    borderRadius: 25,
    paddingVertical: 50,
    textAlign: "center",
    margin: 10,
    justifyContent: 'center',
  },

  input: {
    alignSelf:'stretch',
    padding: 10,
    borderRadius: 5, 
    borderColor:'#44bd32',
    marginBottom: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 5,
  }

});