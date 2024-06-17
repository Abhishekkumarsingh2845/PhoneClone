// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import BottomTab  from './BottomTab';
// import Draw from "./Drawer"

// const App = () => {
//   return (
//     <NavigationContainer>

//     <BottomTab/>
//     </NavigationContainer>
//   )
// }

// export default App

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   // Function to handle the API request
//   const handleGetOTP = async () => {
//     try {
//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getotp',
//         data: [
//           {
//             mobile_no: '9311266883',
//           },
//         ],
//       };

//       const response = await axios.post(apiUrl, requestData);
//       console.log('API Response:', response.data);

//       // Handle response data
//       if (response.data.status === '0') {
//         const {mobile_no, otp} = response.data.data[0];
//         Alert.alert('OTP Generated', `Mobile No: ${mobile_no}\nOTP: ${otp}`);
//       } else {
//         Alert.alert('API Error', response.data.msg);
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       Alert.alert(
//         'API Error',
//         'Failed to generate OTP. Please try again later.',
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Generate OTP</Text>
//       <Button title="Generate OTP" onPress={handleGetOTP} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default App;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [mobileNumber, setMobileNumber] = useState('9311266883');
//   const [otp, setOtp] = useState('8161');
//   const [token, setToken] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getLogin',
//         data: [
//           {
//             mobile_no: mobileNumber,
//             otp: otp,
//           },
//         ],
//       };

//       const response = await axios.post(apiUrl, requestData);
//       console.log('API Response:', response.data);

//       if (response.data.status === '0') {
//         const { token } = response.data.data[0];
//         setToken(token);
//         Alert.alert('Login Successful', `Token: ${token}`);
//       } else {
//         setError(response.data.msg);
//         Alert.alert('Login Failed', response.data.msg);
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       setError('Failed to login. Please try again later.');
//       Alert.alert('API Error', 'Failed to login. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFetchProductList = async () => {
//     try {
//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getProductList',
//       };

//       const config = {
//         headers: {
//           Authorization: `Bearer e55f031ef60bd61dd74b0f953d87cf29`, // Use the token here
//           'Content-Type': 'application/json',
//         },
//       };

//       const response = await axios.post(apiUrl, requestData, config);
//       console.log('Product List:', response.data);

//       // Handle product list response
//       if (response.data.status === '0') {
//         // Process the product list data here
//         Alert.alert('Product List', 'Successfully fetched product list');
//       } else {
//         Alert.alert('API Error', response.data.msg);
//       }
//     } catch (error) {
//       console.error('API Error:', error);
//       Alert.alert('API Error', 'Failed to fetch product list. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="OTP"
//         value={otp}
//         onChangeText={setOtp}
//         keyboardType="numeric"
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} disabled={loading} />
//       <Button title="Fetch Product List" onPress={handleFetchProductList} disabled={!token} />
//       {loading && <Text style={styles.loadingText}>Loading...</Text>}
//       {error !== '' && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
//   loadingText: {
//     marginTop: 10,
//   },
//   errorText: {
//     marginTop: 10,
//     color: 'red',
//   },
// });

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
// import axios from 'axios';

// const App = () => {
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
//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getProduct',
//         data: [],
//       };

//       const config = {
//         headers: {
//           Authorization: `Bearer ecc9b09a3a0d52256bc0579f692547e4`, // Replace with your token
//           'Content-Type': 'application/json',
//         },
//       };

//       const response = await axios.post(apiUrl, requestData, config);
//       console.log('API Response:', response.data);

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
//     backgroundColor: 'black',
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

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import GenerateOTPScreen from './GenerateOTPScreen';
// import VerifyOTPScreen from './VerifyOTPScreen';
import ProductListScreen from './ProductListScreen';
import VerifyOTPScreen from './VerifyOTPScreen';
import GenerateOTPScreen from './GenerateOTPScreen';
// import ProductListScreen from './ProductListScreen';
import ProductModelListScreen from './ProductModelScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GenerateOTP">
        <Stack.Screen name="GenerateOTPScreen" component={GenerateOTPScreen} options={{ title: 'Generate OTP' }} />
        <Stack.Screen name="VerifyOTPScreen" component={VerifyOTPScreen} options={{ title: 'Verify OTP' }} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} options={{ title: 'Product List' }} />
        <Stack.Screen name="ProductModelListScreen" component={ProductModelListScreen} options={{ title: 'Product List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React, {useState} from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';

// const App = () => {
//   const [value, setValue] = useState(null);

//   const data = [
//     {label: 'Item 1', value: '1'},
//     {label: 'Item 2', value: '2'},
//     {label: 'Item 3', value: '3'},
//     {label: 'Item 4', value: '4'},
//     {label: 'Item 5', value: '5'},
//   ];

//   return (
//     <View style={styles.container}>
//       <Dropdown
//         style={styles.dropdown}
//         data={data}
//         labelField="label"
//         valueField="value"
//         placeholder="Select an item"
//         value={value}
//         onChange={item => {
//           setValue(item.value);
//           console.log('Selected:', item);
//         }}
//         containerStyle={styles.dropdownContainer}
//         selectedTextStyle={styles.selectedText}
//         itemTextStyle={styles.itemText}
//         placeholderStyle={styles.placeholder}
//         dropdownStyle={styles.dropdownMenu}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   dropdown: {
//     width: '80%',
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     backgroundColor: 'red',
//     top:-212,
//   },
//   dropdownContainer: {
//     backgroundColor: 'white',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   selectedText: {
//     fontSize: 16,
//     color: 'blue',
//   },
//   itemText: {
//     fontSize: 16,
//     color: 'black',
//     paddingVertical: 8,
//   },
//   placeholder: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   dropdownMenu: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//   },
// });

// export default App;
