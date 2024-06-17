// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProductModelScreen = () => {
//     const [product,setproductlist]= useState();
//   const [loading, setLoading] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     ProductModel();
//   }, []);

//   const ProductModel = async () => {
//     setLoading(true);
//     setError('');
//     try{
//         const token =await AsyncStorage.getItem("authToken");
//         if(!token)
//             {
//                 throw new Error("Token not found");

//             }
//             const ApiUrl ="https://cuckoo.mcrm.in/API/";
//             const requestData = {
//                 operation :'getModel',
//                 data:[],
//             };

//             const header ={
//                 Authorization : "Bearer ${token}",

//             };
//             const  respponse =await axios.post(ApiUrl,requestData,{header}) ;
//             console.log("product Response:",respponse.data);
//             if(respponse.data.status ==='0')
//                 {
//                    setproductlist(respponse.data.data);

//                 }
//                 else
//                 {
//                     setError(respponse.data.msg);
//                     Alert.alert("Api eror",respponse.data.msg);
//                 }
            

//     }
//     catch(error)
//     {
//         console.error('API Error:', error);
//         setError('Failed to fetch product list. Please try again later.');
//         Alert.alert('API Error', 'Failed to fetch product list. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//   };

//   return (
//     <View>
//       <Text>ProductModelScreen</Text>
//     </View>
//   );
// };

// export default ProductModelScreen;

// const styles = StyleSheet.create({});


// ProductListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductModelListScreen = ({ route }) => {
  const { productId } = route.params;
  const [modelList, setModelList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchModelList();
  }, []);

  const fetchModelList = async () => {
    setLoading(true);
    setError('');

    try {
      const token = await AsyncStorage.getItem('authToken'); // Retrieve the token
      if (!token) {
        throw new Error('Token not found');
      }

      const apiUrl = 'https://cuckoo.mcrm.in/API/';
      const requestData = {
        operation: 'getModel',
        data: [{
          product_id: productId,
        }],
      };

      const headers = {
        Authorization: `Bearer ${token}`, // Use token in the headers
      };

      const response = await axios.post(apiUrl, requestData, { headers });
      console.log('Model List Response:', response.data);

      if (response.data.status === '200') {
        setModelList(response.data.data);
      } else {
        setError(response.data.msg);
        Alert.alert('API Error', response.data.msg);
      }
    } catch (error) {
      console.error('API Error:', error);
      setError('Failed to fetch model list. Please try again later.');
      Alert.alert('API Error', 'Failed to fetch model list. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderModelItem = ({ item }) => (
    <View style={styles.modelItem}>
      <Text style={styles.modelName}>{item.model}</Text>
      <Text style={styles.modelID}>ID: {item.model_id}</Text>
      <Text style={styles.warrantyDays}>Warranty Days: {item.warranty_days}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Model List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={modelList}
          renderItem={renderModelItem}
          keyExtractor={(item) => item.model_id.toString()}
          style={styles.flatList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
    marginTop: 10,
  },
  modelItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modelName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modelID: {
    fontSize: 16,
    color: '#666',
  },
  warrantyDays: {
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});

export default ProductModelListScreen;
