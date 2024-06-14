import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const GenerateOTPScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleGenerateOTP = async () => {
    if (!mobileNumber) {
      Alert.alert('Error', 'Please enter a mobile number');
      return;
    }

    try {
      const apiUrl = 'https://cuckoo.mcrm.in/API/';
      const requestData = {
        operation: 'getotp',
        data: [{ mobile_no: mobileNumber }],
      };

      const response = await axios.post(apiUrl, requestData);
      console.log('Generate OTP Response:', response.data);

      if (response.data.status === '0') {
        const { otp } = response.data.data[0];
        navigation.navigate('VerifyOTPScreen', { mobileNumber, otp });
      } else {
        Alert.alert('API Error', response.data.msg);
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert('API Error', 'Failed to generate OTP. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />
      <Button title="Generate OTP" onPress={handleGenerateOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:"blue",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default GenerateOTPScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProductListScreen = () => {
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
//       const token = await AsyncStorage.getItem('authToken'); // Retrieve the token
//       if (!token) {
//         throw new Error('Token not found');
//       }

//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getProduct',
//         data: [],
//       };

//       const headers = {
//         Authorization: `Bearer ${token}`, // Use token in the headers
//       };

//       const response = await axios.post(apiUrl, requestData, { headers });
//       console.log('Product List Response:', response.data);

//       if (response.data.status === '0') {
//         setProductList(response.data.data);
//       } else {
//         setError(response.data.msg);
//         Alert.alert('API Error', response.data.msg);
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       setError('Failed to fetch product list. Please try again later.');
//       Alert.alert('API Error', 'Failed to fetch product list. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProductItem = ({ item }) => (
//     <View style={styles.productItem}>
//       <Text style={styles.productName}>{item.product_name}</Text>
//       <Text style={styles.productID}>ID: {item.product_id}</Text>
//       <Text style={styles.serviceType}>Service Type: {item.service_type}</Text>
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
//           keyExtractor={(item) => item.product_id.toString()}
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
//     backgroundColor: '#f0f0f0',
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

// export default ProductListScreen;
