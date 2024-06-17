// import { View, Text } from 'react-native'
// import React from 'react'

// const Screen2 = () => {
//   return (
//     <View>
//       <Text>Screen2</Text>
//     </View>
//   )
// }

// export default Screen2

// import React, { useState, useEffect } from 'react';

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   Alert,
//   Button,
// } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProductListScreen = ({navigation}) => {
//   const [productList, setProductList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchProductList();
//   }, []);

//   const fetchProductList = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const token = await AsyncStorage.getItem('authToken');
//       if (!token) {
//         throw new Error('Token not found');
//       }

//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getProduct',
//         data: [],
//       };

//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };

//       const response = await axios.post(apiUrl, requestData, {headers});
//       console.log('Product List Response:', response.data);

//       if (response.data.status === '200') {
//         setProductList(response.data.data);
//       } else {
//         setError(response.data.msg);
//         Alert.alert('API Error', response.data.msg);
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       setError('Failed to fetch product list. Please try again later.');
//       Alert.alert(
//         'API Error',
//         'Failed to fetch product list. Please try again later.',
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProductItem = ({item}) => (
//     <View style={styles.productItem}>
//       <Text style={styles.productName}>{item.product_name}</Text>
//       <Text style={styles.productID}>ID: {item.product_id}</Text>
//       <Text style={styles.serviceType}>Service Type: {item.service_type}</Text>
//       <Button
//         title="Go"
//         onPress={() =>
//           navigation.navigate('ProductModelListScreen', {
//             productId: item.product_id,
//           })
//         }
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Product List</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : error ? (
//         <Text style={styles.errorText}>{error}</Text>
//       ) : (
//         <FlatList
//           data={productList}
//           renderItem={renderProductItem}
//           keyExtractor={item => item.product_id.toString()}
//           style={styles.flatList}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'blue',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   flatList: {
//     width: '100%',
//     marginTop: 10,
//   },
//   productItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   productID: {
//     fontSize: 16,
//     color: '#666',
//   },
//   serviceType: {
//     fontSize: 16,
//     color: '#666',
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     marginTop: 20,
//   },
// });

// export default ProductListScreen;import React, { useState, useEffect } from 'react';



useEffect(() => {
  const stateList = async () => {
    setLoading(true);
    setError('');
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        throw new Error('Token not found');
      }

      const apiUrl = 'https://cuckoo.mcrm.in/API/';
      const requestData = {
        operation: 'getState',
        data: [],
      };

      const headers = {
        Authorization: 'Bearer ${token}',
      };
      const response = await axios.post(apiUrl, requestData, {headers});
      console.log('stateList response', response.data);
      
      if (response.data.status === '200') {
        const dropdownData = response.data.data.map(product => ({
          label: product.product_name,
          value: product.product_id,
        }));
        setData1(dropdownData);
      } else {
        setError(response.data.msg);
        Alert.alert('API Error', response.data.msg);
      }
    } catch (error) {
      console.log("Api Error:",error);
      setError('Failed to fetch product list. Please try again later.');
      Alert.alert('API Error', 'Failed to fetch product list. Please try again later.');

    } finally {
      setLoading(false);
    }
  };
  stateList();
},[]);