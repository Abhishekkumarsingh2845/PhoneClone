import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Home from './Screen/Home.js'
import Insurance from './Screen/Insurance';
import Store from './Screen/Store';
import Wealth from './Screen/Wealth';
import History from "./Screen/History"


const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
  {selectedTab === 0 && <Home />}
      {selectedTab === 1 && <Store/>}
      {selectedTab === 2 && <Insurance />}
      {selectedTab === 3 && <Wealth />}
      {selectedTab === 4 && <History />}
      <View style={styles.bottomTab}>
        <View style={styles.bottomTab2}>
          <TouchableOpacity onPress={() => setSelectedTab(0)}>
            <View style={[styles.iconContainer, selectedTab === 0 && styles.selectedTab]}>
              <Image source={require('./Asset/user.png')} style={styles.image} />
              <Text style={{color:'black',fontSize:12}}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab(1)}>
            <View style={[styles.iconContainer, selectedTab === 1 && styles.selectedTab]}>
              <Image source={require('./Asset/wallet.png')} style={styles.image} />
              <Text style={{color:'black',fontSize:12}}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab(2)}>
            <View style={[styles.iconContainer, selectedTab === 2 && styles.selectedTab]}>
              <Image source={require('./Asset/verified.png')} style={styles.image} />
              <Text style={{color:'black',fontSize:12}}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab(3)}>
            <View style={[styles.iconContainer, selectedTab === 3 && styles.selectedTab]}>
              <Image source={require('./Asset/ruppe.png')} style={styles.image} />
              <Text style={{color:'black',fontSize:12}}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab(4)}>
            <View style={[styles.iconContainer, selectedTab === 4 && styles.selectedTab]}>
              <Image source={require('./Asset/ss.png')} style={styles.image} />
              <Text style={{color:'black',fontSize:12}}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomTab: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: 'whitesmoke',
    position: 'absolute',
    bottom: 0,
  },
  bottomTab2: {
    width: '100%',
    height: verticalScale(50),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#dfe1e6',
    borderRadius: moderateScale(20),  // Adjusted for better centering
    width: scale(55),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: 'purple',
  },
  image: {
    width: scale(40),
    height: scale(40),
    resizeMode: 'contain',
  },
});
