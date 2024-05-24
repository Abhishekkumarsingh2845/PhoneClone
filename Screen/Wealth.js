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
import Info from '../Src/Component/Info';

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
    <ScrollView>
      <Info  Phone=
      {'9450321897'} Email ={'Singhrnq231217@gmail.com'} UserName={'Abhishek'}/>
      <Info Phone='978728485'  Email ={'Abhi2333@gmail'}  UserName={'Harsh'}/>
      <Info  Phone='9834578123' Email ={'hajdji2333@gmail'}  UserName={'John'}/>
      <Info Phone ="8667367363" Email ={'harshi2333@gmail'}   UserName={'Kartik'}/>
      <Info Phone ="958399293"  Email ={'joyi2333@gmail'}  UserName={'Deepak'}/>
      <Info Phone ="9450349695"  Email ={'Abhi2333@gmail'}  UserName={'Vivek'}/>
      <Info  Phone ="9549940034" Email ={'Abhi2333@gmail'}  UserName={'Abhishek'}/>
      </ScrollView>
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
