import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = () => {
  return (
    <View style={{backgroundColor:'white',height:192,marginTop:22,justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
      <Image source={require('../Asset/phone-call.png')} style ={{width:45,height:22,resizeMode:'contain'}}/>
      <Text style={{color:'black',fontSize:18,marginLeft:6}}>+91 9026679170</Text>
      <Image source={require('../Asset/close.png')} style ={{width:40,height:22,resizeMode:'contain',tintColor:'grey',marginLeft:82}}/>
    </View>
    <View style={styles.horizontalLine} />
    <View style={{flexDirection:'row'}}>
      <Image source={require('../Asset/email.png')} style ={{width:45,height:22,resizeMode:'contain'}}/>
      <Text style={{color:'black',fontSize:18,marginLeft:6}}>singhrnq231217@gmail</Text>
      <Image source={require('../Asset/close.png')} style ={{width:40,height:22,resizeMode:'contain',tintColor:'grey',marginLeft:32}}/>
    </View>
    <View style={styles.horizontalLine} />
    <View style={{flexDirection:'row'}}>
      <Image source={require('../Asset/global.png')} style ={{width:45,height:22,resizeMode:'contain'}}/>
      <Text style={{color:'black',fontSize:18,marginLeft:6}}>www.pelfizz.com</Text>
      <Image source={require('../Asset/close.png')} style ={{width:40,height:22,resizeMode:'contain',tintColor:'grey',marginLeft:82}}/>
    </View>
    <View style={styles.horizontalLine} />
    <View style={{flexDirection:'row'}}>
      <Image source={require('../Asset/location.png')} style ={{width:45,height:22,resizeMode:'contain'}}/>
      <Text style={{color:'black',fontSize:18,marginLeft:6}}>E-106 Noida Sec 60</Text>
      <Image source={require('../Asset/close.png')} style ={{width:40,height:22,resizeMode:'contain',tintColor:'grey',marginLeft:62}}/>
    </View>
    <View style={styles.horizontalLine} />
  </View>
  )
}

export default Detail

const styles = StyleSheet.create({})