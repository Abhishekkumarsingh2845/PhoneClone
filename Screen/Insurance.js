import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';

const Insurance = () => {

  const[color,setColor]=useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../Asset/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Contact"
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 65,
          backgroundColor: 'white',
          marginTop: 42,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 0.8,
          borderColor: 'darkgrey',
          alignItems:'center',
          padding:5,
        }}>
          <View style={{backgroundColor:'whitesmoke',width:'100%',height:'100%',flexDirection:'row',}}>
        <TouchableOpacity
          style={{
            width: '49%',
            height: '90%',
            backgroundColor: 'whitesmoke',
            borderRadius: 5,
            alignItems:'center',
            justifyContent:'center',
          }}>
            <Text style={{fontSize:16,color:'black'}}>PEOPLE(20)

            </Text>
          </TouchableOpacity>
           <TouchableOpacity
          style={{
            width: '49%',
            height: '90%',
            backgroundColor: 'whitesmoke',
            borderRadius: 5,
            alignItems:'center',
            justifyContent:'center',
          }}>
             <Text style={{fontSize:16,color:'black'}}>GROUP(01)
             </Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: 124,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
    height: 45,
    paddingHorizontal: 10,
    marginTop: 133,
    marginLeft: 8,
  },
  searchIcon: {
    width: 33,
    height: 33,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    color: '#000',
  },
});

export default Insurance;
