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

// export default ProductListScreen;import React, { useState, useEffect } from 'react';4

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, ActivityIndicator} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductListScreen = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [stateValue, setStateValue] = useState(null);
  const [stateData, setStateData] = useState([]);
  const [districtValue, setDistrictValue] = useState(null);
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cityValue, setCityValue] = useState(null);
  const [cityData, setCityData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductList = async () => {
      setLoading(true);
      setError('');

      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          throw new Error('Token not found');
        }

        const apiUrl = 'https://cuckoo.mcrm.in/API/';
        const requestData = {
          operation: 'getProduct',
          data: [],
        };

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.post(apiUrl, requestData, {headers});
        console.log('Product List Response:', response.data);

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
        console.error('API Error:', error);
        setError('Failed to fetch product list. Please try again later.');
        Alert.alert(
          'API Error',
          'Failed to fetch product list. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  useEffect(() => {
    const fetchModelList = async productId => {
      setLoading(true);
      setError('');

      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          throw new Error('Token not found');
        }

        const apiUrl = 'https://cuckoo.mcrm.in/API/';
        const requestData = {
          operation: 'getModel',
          data: [{product_id: productId}],
        };

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.post(apiUrl, requestData, {headers});
        console.log('Model List Response:', response.data);

        if (response.data.status === '200') {
          const dropdownData = response.data.data.map(model => ({
            label: model.model,
            value: model.model_id,
          }));
          setData2(dropdownData);
        } else {
          setError(response.data.msg);
          Alert.alert('API Error', response.data.msg);
        }
      } catch (error) {
        console.error('API Error:', error);
        setError('Failed to fetch model list. Please try again later.');
        Alert.alert(
          'API Error',
          'Failed to fetch model list. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    };

    if (value1) {
      fetchModelList(value1);
    }
  }, [value1]);

  useEffect(() => {
    const fetchStateList = async () => {
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
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.post(apiUrl, requestData, {headers});
        console.log('State List Response:', response.data);

        if (response.data.status === '200') {
          const dropdownData = response.data.data.map(state => ({
            label: state.state,
            value: state.stateid,
          }));
          setStateData(dropdownData);
        } else {
          setError(response.data.msg);
          Alert.alert('API Error', response.data.msg);
        }
      } catch (error) {
        console.error('API Error:', error);
        setError('Failed to fetch state list. Please try again later.');
        Alert.alert(
          'API Error',
          'Failed to fetch state list. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStateList();
  }, []);

  useEffect(() => {
    const fetchDistrictList = async () => {
      setLoading(true);
      setError('');

      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          throw new Error('Token not found');
        }

        const apiUrl = 'https://cuckoo.mcrm.in/API/';
        const requestData = {
          operation: 'getDistrict',
          data: [{stateid: stateValue}],
        };

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.post(apiUrl, requestData, {headers});
        console.log('District List Response:', response.data);

        if (response.data.status === '200') {
          const dropdownData = response.data.data.map(district => ({
            label: district.district,
            value: district.id,
          }));
          setDistrictData(dropdownData);
        } else {
          setError(response.data.msg);
          Alert.alert('API Error', response.data.msg);
        }
      } catch (error) {
        console.error('API Error:', error);
        setError('Failed to fetch district list. Please try again later.');
        Alert.alert(
          'API Error',
          'Failed to fetch district list. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    };

    if (stateValue) {
      fetchDistrictList();
    }
  }, [stateValue]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <Dropdown
            style={styles.dropdown}
            data={data1}
            labelField="label"
            valueField="value"
            placeholder="Select first item"
            value={value1}
            onChange={item => {
              setValue1(item.value);
              console.log('Selected first item:', item);
            }}
            containerStyle={styles.dropdownContainer}
            selectedTextStyle={styles.selectedText}
            itemTextStyle={styles.itemText}
            placeholderStyle={styles.placeholder}
            dropdownStyle={styles.dropdownMenu}
          />
          {value1 && (
            <Dropdown
              style={styles.dropdown}
              data={data2}
              labelField="label"
              valueField="value"
              placeholder="Select second item"
              value={value2}
              onChange={item => {
                setValue2(item.value);
                console.log('Selected second item:', item);
              }}
              containerStyle={styles.dropdownContainer}
              selectedTextStyle={styles.selectedText}
              itemTextStyle={styles.itemText}
              placeholderStyle={styles.placeholder}
              dropdownStyle={styles.dropdownMenu}
            />
          )}
          {value2 && (
            <Dropdown
              style={styles.dropdown}
              data={stateData}
              labelField="label"
              valueField="value"
              placeholder="Select state"
              value={stateValue}
              onChange={item => {
                setStateValue(item.value);
                console.log('Selected state:', item);
              }}
              containerStyle={styles.dropdownContainer}
              selectedTextStyle={styles.selectedText}
              itemTextStyle={styles.itemText}
              placeholderStyle={styles.placeholder}
              dropdownStyle={styles.dropdownMenu}
            />
          )}
          {stateValue && (
            <Dropdown
              style={styles.dropdown}
              data={districtData}
              labelField="label"
              valueField="value"
              placeholder="Select district"
              value={districtValue}
              onChange={item => {
                setDistrictValue(item.value);
                console.log('Selected district:', item);
              }}
              containerStyle={styles.dropdownContainer}
              selectedTextStyle={styles.selectedText}
              itemTextStyle={styles.itemText}
              placeholderStyle={styles.placeholder}
              dropdownStyle={styles.dropdownMenu}
            />
          )}
      
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  dropdown: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  selectedText: {
    fontSize: 16,
    color: 'blue',
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 8,
  },
  placeholder: {
    fontSize: 16,
    color: 'gray',
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});

export default ProductListScreen;
