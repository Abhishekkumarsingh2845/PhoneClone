import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Color = ({Colour}) => {
  return (
   
    
      <View style={{...styles.color1,...Colour}} />

  );
};

export default Color;

const styles = StyleSheet.create({
  color1: {
    width: 35,
    height: 35,
    backgroundColor:"red",
    borderRadius: 17,
  },

  color2:
  {
    backgroundColor: 'black',
        height: 52,
        width: 290,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
  }
});
