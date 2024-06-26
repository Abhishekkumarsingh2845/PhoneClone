import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../Utlis/Img';
import Col from '../Utlis/Color';

const {width} = Dimensions.get('window');

const images = [
Images.BANNER1,
Images.BANNER2,
Images.BANNER3,
  // Add more image paths as needed
];
const renderItem = ({item}) => (
  <View style={styles.slide}>
    <Image source={item} style={styles.image} resizeMode="cover" />
  </View>
);

const rechargeData = [
  {id: 1, text: 'Mobile\n Recharge', image: Images.MOBILE},
  {id: 2, text: 'Repay', image: Images.BUILDING},
  {id: 3, text: 'Credit \n Repayment', image: Images.CREDIT},
  {id: 4, text: ' Loan \n Repayment', image: Images.LOAN},
  {
    id: 5,
    text: 'Mobile \nRecharge',
    image: Images.LOUDPK,
  },
  {
    id: 6,
    text: 'Mobile \n Recharge',
    image:  Images.LOUDPK,
  },
  {
    id: 7,
    text: 'Mobile \n Recharge',
    image:  Images.LOUDPK,
  },
  {
    id: 8,
    text: 'Mobile \n Recharge',
    image:  Images.LOUDPK,
  },
];

const Home = () => {
  const [updateCardVisible, setUpdateCardVisible] = useState(true);

  const toggleUpdateCardVisibility = () => {
    setUpdateCardVisible(!updateCardVisible);
  };

  const numColumns = 4;

  const renderRechargeItems = rechargeData
    .reduce((rows, item, index) => {
      if (index % numColumns === 0) {
        rows.push([]);
      }
      rows[rows.length - 1].push(item);
      return rows;
    }, [])
    .map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map(item => (
          <View key={item.id} style={styles.rechargeItem}>
            <Image source={item.image} style={styles.rechargeImage} />
            <Text style={styles.rechargeText}>{item.text}</Text>
          </View>
        ))}
      </View>
    ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
          <View style={styles.header1}>
            <View style={styles.headerLeftView}>
              <View>
                <Image source={Images.MAN} style={styles.Image1} />
                <Image source={Images.FLAG} style={styles.Image2} />
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
                <TouchableOpacity>
                  <Image source={Images.QRCODE} style={styles.scan} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Images.BELL} style={styles.scan} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Images.QUESTIONMARK} style={styles.scan} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {updateCardVisible && (
          <View style={styles.UpdateCard}>
            <View style={{flexDirection: 'row', marginTop: 6}}>
              <View style={styles.logoContainer}>
                <Image source={Images.PHONEPE} style={styles.PhonePe} />
              </View>

              <View style={{marginLeft: 8, flexDirection: 'column'}}>
                <Text
                  style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                  App Update Available
                </Text>
                <Text style={{fontSize: 14, color: 'grey'}}>
                  We need fixed some issue and added some{'\n'}cool feature in
                  this update
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: -112,
                  marginTop: 78,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={toggleUpdateCardVisibility}>
                  <Text style={{fontSize: 22, color: 'purple'}}>Later</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={{marginTop: 10}}>
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
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
            <TouchableOpacity>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'purple',
                  borderRadius: 2,
                }}>
                <Image source={Images.PROFILE} style={styles.icon1} />
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
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'purple',
                  borderRadius: 2,
                }}>
                <Image source={Images.BANK} style={styles.icon1} />

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
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'purple',
                  borderRadius: 2,
                }}>
                <Image source={Images.REFRESH} style={styles.icon1} />
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
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'purple',
                  borderRadius: 2,
                }}>
                <Image source={Images.BANK} style={styles.icon1} />
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
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={styles.pu}>
              <Image source={Images.WALLET} style={styles.wall} />
              <Text style={{fontWeight: 'bold', color: 'white', marginTop: 3}}>
                Phone Wallet
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pu}>
              <Image source={Images.GIFTBOX} style={styles.wall} />
              <Text style={{fontWeight: 'bold', color: 'white', marginTop: 3}}>
                Phone Gift
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pu}>
              <Image source={Images.LOUDSPK} style={styles.wall} />
              <Text style={{fontWeight: 'bold', color: 'white', marginTop: 3}}>
                Refer & get100
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.recharge}>
            <Text
              style={{
                fontSize: 22,
                color: 'black',
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 12,
              }}>
              Recharge & Pay Bills
            </Text>
            {renderRechargeItems}
          </View>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: Col.black,
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
    borderRadius: 18,
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
    marginTop: 12,
    marginLeft: 11,
    width: 93,
    height: 80,
    borderRadius: 11,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wall: {
    width: 35,
    height: 35,
    tintColor: 'white',
  },
  recharge: {
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 11,
    marginBottom: 22,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  rechargeItem: {
    alignItems: 'center',
  },
  rechargeImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: 'purple',
  },
  rechargeText: {
    color: 'black',
    textAlign: 'center',
  },
  slide: {
    width,
    height: 200, // Adjust height as needed
    marginRight: 10,
  },
  image: {
    flex: 1,
    margin: 2,
    width: '100%',
    height: '100%',
  },
});

export default Home;
