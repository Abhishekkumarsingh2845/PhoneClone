import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text>Update</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <View style={styles.header1}>
          <View style={styles.headerLeftView}>
            <View>
              <Image
                source={require('../Asset/man.png')}
                style={styles.Image1}
              />
              <Image
                source={require('../Asset/india.png')}
                style={styles.Image2}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                  Home
                </Text>
                <Image
                  source={require('../Asset/down-arrow.png')}
                  style={styles.arrow}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 11}}>D-110 konark Vasundhara,UP</Text>
              </View>
            </View>
          </View>
          <View style={styles.headerRightView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../Asset/qr-code.png')}
                style={styles.scan}
              />
              <Image
                source={require('../Asset/bell.png')}
                style={styles.scan}
              />
              <Image
                source={require('../Asset/question.png')}
                style={styles.scan}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.UpdateCard}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../Asset/Phonepe.png')}
              style={styles.PhonePe}
            />
          </View>

          <View style={{marginLeft: 8, flexDirection: 'column'}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              App Update Available
            </Text>
            <Text style={{fontSize: 14, color: 'grey'}}>
              We need fixed some issue and added some{'\n'}cool feature in this
              update
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: -112,
              marginTop: 62,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, color: 'purple'}}>Later</Text>
            {/*<CustomButton
              title="Update"
              onPress={() => alert('Button Pressed')}
              style={styles.updateButton}
              textStyle={styles.updateButtonText}
          />*/}
          </View>
        </View>
      </View>

      <Image source={require('../Asset/banner.jpg')} style={styles.banner} />
      <View style={styles.moneytransfer}>
        <Text
          style={{
            fontSize: 22,
            color: 'black',
            marginLeft: 22,
            fontWeight: 'bold',
          }}>
          Money Transfers
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 12,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'purple',
              borderRadius: 2,
            }}>
            <Image
              source={require('../Asset/blank.png')}
              style={styles.icon1}
            />
            <Text
              style={{
                fontSize: 9.79,
                color: 'black',
                marginTop: 9,
                fontWeight: '500',
              }}>
              To Mobile{'\n'} Number
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'purple',
              borderRadius: 2,
            }}>
            <Image source={require('../Asset/bank.png')} style={styles.icon1} />

            <Text
              style={{
                fontSize: 10.7,
                color: 'black',
                marginTop: 7,
                fontWeight: '500',
              }}>
              To Bank/{'\n'}UPI ID
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'purple',
              borderRadius: 2,
            }}>
            <Image
              source={require('../Asset/arrow.png')}
              style={styles.icon1}
            />
            <Text
              style={{
                fontSize: 10.7,
                color: 'black',
                marginTop: 7,
                fontWeight: '500',
              }}>
              To Self{'\n'}Account
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'purple',
              borderRadius: 2,
            }}>
            <Image source={require('../Asset/bank.png')} style={styles.icon1} />
            <Text
              style={{
                fontSize: 10.7,
                color: 'black',
                marginTop: 7,
                fontWeight: '500',
              }}>
              Check{'\n'}Balance
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={styles.pu}>
        <Image source={require('../Asset/wall.png')} style={styles.wall}/>
        <Text style={{fontWeight:'bold',color:'white', marginTop:3,}}>
          Phone Wallet
        </Text>
        </View>
        <View style={styles.pu}>
        <Image source={require('../Asset/giftbox.png')} style={styles.wall}/>
        <Text style={{fontWeight:'bold',color:'white', marginTop:3,}}>
          Phone Gift
        </Text>
        </View>
        <View style={styles.pu}>
        <Image source={require('../Asset/loud-speaker.png')} style={styles.wall}/>
        <Text style={{fontWeight:'bold',color:'white', marginTop:3,}}>
          Refer & get100
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'purple',
  },
  header1: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image1: {
    width: 40,
    height: 40,
  },
  Image2: {
    width: 15,
    height: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  arrow: {
    width: 30,
    height: 30,
    top: 2,
    tintColor: 'white',
    alignItems: 'center',
  },
  scan: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    tintColor: 'white',
  },
  headerRightView: {
    flexDirection: 'row',
    marginTop: 11,
  },
  UpdateCard: {
    width: '94%',
    height: 120,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 11,
  },
  PhonePe: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 55,
    overflow: 'hidden',
    backgroundColor: 'ffffff',
  },
  button: {
    backgroundColor: 'blue', // Custom button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white', // Custom button text color
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: 'purple',
    width: 53,
    height: 32, // Specific style for the "Update" button
  },
  banner: {
    width: '100%',
    height: 165,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 42,
  },
  moneytransfer: {
    width: '94%',
    height: 120,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 11,
  },
  icon1: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
    marginTop: 3,
  },
  pu: {
    marginTop:12,
    marginLeft:11,
    width: 93,
    height: 80,
    borderRadius:11,
    backgroundColor: 'cornflowerblue',
    justifyContent:'center',
    alignItems:'center',
  },
  wall:
  {
    width:35,
    height:35,
    tintColor:'white',
   
   


  }
});

export default Home;
