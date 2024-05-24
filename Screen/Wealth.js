import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Wealth = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = item => {
    setSelectedItem(item);
  };

  const items = ['People', 'Posts', 'Jobs', 'Groups', 'Events'];
  const data = [
    {
      id: 1,
      name: 'Abhishek Singh',
      phone: '+91 9450321897',
      email: 'singhrnq231217@hmail.com',
      image: require('../Asset/man.png'),
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '+91 1234567890',
      email: 'johndoe@example.com',
      image: require('../Asset/man.png'),
    },
    {
      id: 3,
      name: 'Jane Smith',
      phone: '+91 9876543210',
      email: 'janesmith@example.com',
      image: require('../Asset/man.png'),
    },
    {
      id: 4,
      name: 'Michael Johnson',
      phone: '+91 5647382910',
      email: 'michaelj@example.com',
      image: require('../Asset/man.png'),
    },
    {
      id: 5,
      name: 'Emily Davis',
      phone: '+91 8374629102',
      email: 'emilyd@example.com',
      image: require('../Asset/man.png'),
    },
  ];


  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../Asset/layer.png')} style={styles.image} />
        </View>

        <View style={styles.searchContainer}>
          <Image
            source={require('../Asset/search.png')}
            style={{
              width: 23,
              height: 40,
              resizeMode: 'contain',
              marginLeft: 12,
              marginTop: 3,
            }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Language"
            placeholderTextColor="black"
          />
          <Image
            source={require('../Asset/close.png')}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              marginLeft: 59,
              marginTop: 16,
            }}
          />
        </View>
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ScrollView
          horizontal
          style={{backgroundColor: 'whitesmoke'}}
          showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(item)}>
              <View
                style={[
                  styles.itemContainer,
                  {
                    backgroundColor: selectedItem === item ? 'black' : 'white',
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedItem === item ? 'white' : 'black',
                  }}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{backgroundColor: 'white', width: '100%', height: 80}}>
        <View
          style={{width: '100%', backgroundColor: 'grey', height: 1}}></View>
        <View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection:'row',
              marginTop: 12,
              marginLeft: 22,
            }}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#B8924C',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 3,
                borderColor: '#B8924C',
              }}>
              <Image
                source={require('../Asset/man.png')}
                style={{width: 40, height: 40, resizeMode: 'contain'}}></Image>
            </View>
            <View style={{backgroundColor:'white',height:52,width:173,marginLeft:22}}>
              <Text style={{color:'black',fontWeight:'bold',fontSize:17}}>Abhishek Singh</Text>
              <Text style={{color:'black'}}>+91 9450321897</Text>
              <Text style={{color:'black'}}>singhrnq231217@hmail.com</Text>
            </View>
            <View style={{backgroundColor:'whitesmoke',width:43,height:43,marginTop:8,marginLeft:5,justifyContent:'center',alignItems:'center',borderRadius:25,borderColor:'grey',borderWidth:1}}>
              <Image source ={require("../Asset/more.png")} style={{width:30,height:40,resizeMode:'contain'}}>

              </Image>
            </View>
          </View>
         
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  searchContainer: {
    position: 'absolute',
    top: '40%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchInput: {
    marginTop: -2,
    fontSize: 16,
    marginLeft: 11,
  },
  itemContainer: {
    width: 75,
    height: 30,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default Wealth;
