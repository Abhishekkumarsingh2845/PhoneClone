import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

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
            <View  style={{marginLeft: 12}}>
              <View style={{flexDirection: 'row',alignItems:'center' }}>
                <Text style={{fontSize: 20, fontWeight: 'bold',color:'white'}}>Home</Text>
                <Image
                  source={require('../Asset/down-arrow.png')}
                  style={styles.arrow}
                />
              </View>
              <View style={{flexDirection: 'row',alignItems:'center' }}>
                <Text style={{fontSize:11}}>D-110 konark Vasundhara,UP</Text>
              </View>
            </View>
          </View>
          <View style={styles.headerRightView}>
            <View style={{flexDirection:'row'}}>
            <Image source ={require('../Asset/qr-code.png')} style={styles.scan}/>
            <Image source ={require('../Asset/bell.png')} style={styles.scan}/>
            <Image source ={require('../Asset/question.png')} style={styles.scan}/>
            </View>
            </View>
        </View>
      </View>
      <View style={styles.UpdateCard}>
        <View >
           <Image source={require("../Asset/Phonepe.png")} style={styles.PhonePe}/>
        </View>

      </View>
    </View>
  );
};

export default Home;

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
  arrow:
  {
    width:30,
    height:30,
    top:2,
    tintColor:'white',
    alignItems:'center' 
  },
  scan : {
    width:20,
    height:20,
    marginHorizontal: 5,
    tintColor:'white',
  },
  headerRightView:
  {
    flexDirection:'row',
    marginTop:11,
  },
  UpdateCard:
  {
    width:"94%",
    height:120,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:10,
  },
  PhonePe :
  {
    width:50,
    height:50,
    borderRadius:20
  }
});
