import {View, Text} from 'react-native';
import React from 'react';

const Edit = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 92,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          opacity: 0.6,
          elevation: 25,
          backgroundColor: 'blue',
          position: 'absolute',
          right: 10,
        }}></View>
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          opacity: 0.6,
          elevation: 25,
          backgroundColor: 'blue',
          position: 'absolute',
          right: 50,
          top: 10,
        }}></View>
    </View>
  );
};

export default Edit;
