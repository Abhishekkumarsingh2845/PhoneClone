import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList,StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Search from './Src/Tabs/Search';
import Whislist from './Src/Tabs/Whislist';
import Profile from './Src/Tabs/Profile';
import Home from './Src/Tabs/Home';
import Add from './Src/Tabs/Add';

const MyComponent = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Add />
      ) : selectedTab === 3 ? (
        <Whislist />
      ) : selectedTab === 4 ? (
        <Profile />
      ) : null}

      <View style={styles.bottomTab}>
      <StatusBar
        barStyle="light-content" // Set the text and icon color to light
        backgroundColor="#0000ff" // Set the background color of the status bar
      />

        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(0);
          }}>
          <Image
            source={require('./Src/images/home.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 0 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(1);
          }}>
          <Image
            source={require('./Src/images/search.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(2);
          }}>
          <Image
            source={require('./Src/images/add.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 2 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(3);
          }}>
          <Image
            source={require('./Src/images/heart.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 3 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setselectedTab(4);
          }}>
          <Image
            source={require('./Src/images/user.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 4 ? 'blue' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke', // Example background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Example text color
  },
  bottomTab: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 0,
  },
  tab: {
    width: '20%',
    height: '100%',

    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  heading: {
    fontSize: 22,
    color: 'black',
    top: 122,
    fontWeight: 'bold',
    marginLeft: -161,
  },
  item: {
    width: '80%',
    height: 15,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 22,
    color: 'black',
  },
});

export default MyComponent;