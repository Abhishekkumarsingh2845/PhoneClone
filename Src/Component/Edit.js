import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const Edit = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
        <Image
          source={require('./../../Asset/layer.png')}
          style={{
            width: '100%',
            height: '100%',
            marginLeft: -42,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          width: 80,
          height: 90,
          backgroundColor: 'blue',
          position: 'absolute',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 92,
    backgroundColor: 'black',
    justifyContent: 'center', // To center the image vertically
    alignItems: 'center', // To center the image horizontally
  },
});

export default Edit;
