import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Edit from '../Src/Component/Edit';
import LinearGradient from 'react-native-linear-gradient';
import TextInputCom from '../Src/Component/TextInputCom';
import Color from '../Src/Component/Color';

const History = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Edit />

      <View style={{height: 192, backgroundColor: 'white'}}>
        <LinearGradient
          colors={['#afbef4', '#5e80fc', 'royalblue']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
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
        <View
          style={[
            styles.buttonContainer,
            {backgroundColor: 'white', borderWidth: 1, marginTop: 10},
          ]}>
          <Text style={[styles.buttonText, {color: 'black'}]}>
            CHANGE TEMPLATE
          </Text>
        </View>

        <TextInputCom name="Name" />
        <TextInputCom name="Email" />
        <TextInputCom name="Company" />
        <TextInputCom name="Company" />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Color Colour={{backgroundColor: 'black'}} />
        <Color Colour={{backgroundColor: 'pink'}} />
        <Color Colour={{backgroundColor: 'yellowgreen'}} />
        <Color Colour={{backgroundColor: 'lightskyblue'}} />
        <Color Colour={{backgroundColor: 'lightsalmon'}} />
        <Color Colour={{backgroundColor: 'mediumvioletred'}} />
        <Color Colour={{backgroundColor: 'lightgray'}} />
        <Color Colour={{backgroundColor: 'cornflowerblue'}} />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 192,
          marginTop: 22,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../Asset/phone-call.png')}
            style={{width: 45, height: 22, resizeMode: 'contain'}}
          />
          <Text style={{color: 'black', fontSize: 18, marginLeft: 6}}>
            +91 9026679170
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../Asset/close.png')}
              style={{
                width: 40,
                height: 22,
                resizeMode: 'contain',
                tintColor: 'grey',
                marginLeft: 82,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../Asset/email.png')}
            style={{width: 45, height: 22, resizeMode: 'contain'}}
          />
          <Text style={{color: 'black', fontSize: 18, marginLeft: 6}}>
            singhrnq231217@gmail
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../Asset/close.png')}
              style={{
                width: 40,
                height: 22,
                resizeMode: 'contain',
                tintColor: 'grey',
                marginLeft: 32,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../Asset/global.png')}
            style={{width: 45, height: 22, resizeMode: 'contain'}}
          />
          <Text style={{color: 'black', fontSize: 18, marginLeft: 6}}>
            www.pelfizz.com
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../Asset/close.png')}
              style={{
                width: 40,
                height: 22,
                resizeMode: 'contain',
                tintColor: 'grey',
                marginLeft: 82,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../Asset/location.png')}
            style={{width: 45, height: 22, resizeMode: 'contain'}}
          />
          <Text style={{color: 'black', fontSize: 18, marginLeft: 6}}>
            E-106 Noida Sec 60
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../Asset/close.png')}
              style={{
                width: 40,
                height: 22,
                resizeMode: 'contain',
                tintColor: 'grey',
                marginLeft: 62,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
      </View>
      <TouchableOpacity>
        <View
          style={{
            width: '95%',
            height: 50,
            borderRadius: 30,
            backgroundColor: 'black',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 12,
              fontSize: 18,
              fontWeight: 'bold',
              Color: 'black',
            }}>
            ADD ITEM
          </Text>
        </View>
      </TouchableOpacity>
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
  horizontalLine: {
    height: 1,
    width: '85%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -12,
    marginLeft: 18, // optional, adds vertical spacing
  },
};

export default History;
