import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const Wealth = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../Asset/layer.png')} style={styles.image} />
      </View>

      {/* Search bar */}
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
      <View>
        
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
});

export default Wealth;
