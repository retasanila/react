import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Actions} from 'react-native-router-flux';


// bikin function list supaya tinggal dipanggil
function List({ title, harga, img }) {
  return (
    <View style={styles.item}>
      <Image style={styles.thumb}  source={img} />
      <Text style={styles.jdul}>{title}</Text>
      <Text style={styles.harga}>{harga}</Text>
      <TouchableOpacity>
      <Image
          style={styles.iconcart}
          source={require('../asset/icon/shopping-cart.png')}
        />
       </TouchableOpacity>
      
    </View>
  );
}



export default class App extends React.Component {
//untuk list barang
constructor(props) {
  super(props);
  this.state = {
    //nama state untuk datanya marketlist supaya nanti tinggal dipanggil di list bawah
    marketlist: [
      {
        img: require('../asset/img/1.jpg'),//code gambar yang udah ada di local
        nama: 'YEEZY 1',
        harga: '$5000'
      },
      {
        img: require('../asset/img/2.jpg'),
        nama: 'YEEZY 2',
        harga: '$4750'
      },
      {
        img: require('../asset/img/3.jpg'),
        nama: 'YEEZY 3',
        harga: '$2500'
      },
      {
        img: require('../asset/img/4.jpg'),
        nama: 'YEEZY 4',
        harga: '$3000'
      },
      {
        img: require('../asset/img/1.jpg'),
        nama: 'YEEZY 1',
        harga: '$5000'
      },
      {
        img: require('../asset/img/2.jpg'),
        nama: 'YEEZY 2',
        harga: '$4750'
      },
      {
        img: require('../asset/img/3.jpg'),
        nama: 'YEEZY 3',
        harga: '$2500'
      },
      {
        img: require('../asset/img/4.jpg'),
        nama: 'YEEZY 4',
        harga: '$3000'
      },
      {
        img: require('../asset/img/1.jpg'),
        nama: 'YEEZY 1',
        harga: '$5000'
      },
      {
        img: require('../asset/img/2.jpg'),
        nama: 'YEEZY 2',
        harga: '$4750'
      },
      {
        img: require('../asset/img/3.jpg'),
        nama: 'YEEZY 3',
        harga: '$2500'
      },
      {
        img: require('../asset/img/4.jpg'),
        nama: 'YEEZY 4',
        harga: '$3000'
      },
      
    ]
  };
}
  
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.header}>
          <Text style={{fontSize: 15,color:'#ffff', fontWeight: 'BOLD'}}>MarketPlace</Text>
        </View>
        
        <View style={styles.srchbar}>
        <TextInput 
            placeholder="Cari Barang..." 
            style={styles.input}  />

       </View>

          <FlatList
            numColumns={2}// banyaknya kolom
            data={this.state.marketlist}//sumber datanya
            //kode untuk render data sesuaikan dengan nama kumpulannya
            renderItem={obj => (
              <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga}  />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
    
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#f5f6fa',
  },

  header: {
    backgroundColor: '#2980b9',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    
  },

  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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

    elevation: 6,
  },

 jdul: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    textAlign: 'center',
  },
  harga: {
    fontSize: 12,
  },

  thumb: {
    width: 100,
    height: 100,
  },

  iconcart:{
    height: 25,
    width: 25, 
  },
  

  btLogout: {
    flex: 1,
  },
  input: {
    alignSelf:'stretch',
    padding:10,
    borderRadius:5, 
    borderColor:'#44bd32',
    marginBottom:20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
      },
});
