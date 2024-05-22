import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import Edit from '../Src/Component/Edit';
import LinearGradient from 'react-native-linear-gradient';

const History = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Edit />

      <View
        style={{
          height: 192,

          backgroundColor: 'white',
        }}>
        <LinearGradient
          colors={['#2E3192', '#1BFFFF', 'royalblue']} // Define your gradient colors here
          start={{x: 0, y: 0}} // Define the start point of the gradient
          end={{x: 1, y: 1}} // Define the end point of the gradient
          locations={[0.3, 0.5, 0.6]}
          style={styles.gradientView}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              marginTop: 122,
              marginLeft:-5,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              padding:20,
            
            }}>
             
              <Image
                source={require('../Asset/download.png')}
                style={{
                   width: 70,
                   height: 70,
                  resizeMode: 'contain',
                  borderRadius:35,
                  borderWidth: 1,
                  borderColor:'lightgrey',
                }}
              />
           
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = {
  gradientView: {
    // Make the gradient fill the container
    justifyContent: 'center',
    alignItems: 'center',
    width: 262,
    height: 122,
    marginTop: 12,
    marginLeft: 32,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
};

export default History;





