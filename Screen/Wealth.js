import React, { useState } from 'react';
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

  const handlePress = (item) => {
    setSelectedItem(item);
  };

  const items = ['People', 'Posts', 'Jobs', 'Groups', 'Events'];

  return (
    <View style={{ flex: 1 }}>
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
        }}
      >
        <ScrollView
          horizontal
          style={{ backgroundColor: 'whitesmoke' }}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(item)}>
              <View
                style={[
                  styles.itemContainer,
                  {
                    backgroundColor: selectedItem === item ? 'black' : 'white',
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedItem === item ? 'white' : 'black',
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
