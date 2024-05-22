import { View, Text, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Edit from '../Src/Component/Edit';
import LinearGradient from 'react-native-linear-gradient';

const History = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Edit />

      <View style={{ height: 192, backgroundColor: 'white' }}>
        <LinearGradient
          colors={['#afbef4', '#5e80fc', 'royalblue']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0.4, 0.5, 0.6]}
          style={styles.gradientView}>
          <View style={styles.imageView}>
            <Image
              source={require('../Asset/download.png')}
              style={styles.image}
            />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>EDIT IMAGES/VIDEO</Text>
        </View>
        <View style={[styles.buttonContainer, { backgroundColor: 'white', borderWidth: 1, marginTop: 10 }]}>
          <Text style={[styles.buttonText, { color: 'black' }]}>CHANGE TEMPLATE</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor='black'
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor='black'
        />
        <TextInput
          style={styles.input}
          placeholder="Company"
          placeholderTextColor='black'
        />
         <TextInput
          style={styles.input}
          placeholder="Company"
          placeholderTextColor='black'
        />
      </View>
    </ScrollView>
  );
};

const styles = {
  gradientView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 262,
    height: 122,
    marginTop: 12,
    marginLeft: 32,
    borderRadius: 15,
  },
  imageView: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    marginTop: 122,
    marginLeft: -5,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    width: '87%',
    height: 52,
    backgroundColor: 'black',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  input: {
    width: 285,
    height: 49,
    backgroundColor: 'whitesmoke',
    marginTop: 10,
    borderRadius: 13,
    paddingHorizontal: 15,
  },
};

export default History;
