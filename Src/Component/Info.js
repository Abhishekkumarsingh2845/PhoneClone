import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Info = ({Phone,Email,UserName}) => {
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: 80}}>
    <View
      style={{width: '100%', backgroundColor: 'grey', height: 1}}></View>
    <View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
          marginTop: 12,
          marginLeft: 22,
        }}>
        <View
          style={{
            width: 45,
            height: 45,
            backgroundColor: '#B8924C',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#B8924C',
          }}>
          <Image
            source={require('../../Asset/man.png')}
            style={{width: 40, height: 40, resizeMode: 'contain'}} />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 52,
            width: 173,
            marginLeft: 22,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
            {UserName}
          </Text>
          <Text style={{color: 'black'}}>{Phone}</Text>
          <Text style={{color: 'black'}}>{Email}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'whitesmoke',
            width: 43,
            height: 43,
            marginTop: 8,
            marginLeft: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <Image
            source={require('../../Asset/more.png')}
            style={{width: 30, height: 40, resizeMode: 'contain'}}></Image>
        </View>
      </View>
    </View>
  </View>
  )
}

export default Info

const styles = StyleSheet.create({})