import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ProductListScreen = ({modelId}) => {
  const [value1, setValue1] = useState(null);

  const [data1, setData1] = useState([]);

  const [loading, setLoading] = useState(false);

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

  return (
    <View style={styles.container}>
      <ScrollView>
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
          </>
        )}
      </ScrollView>
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
  productListContainer: {
    width: '100%',
    marginBottom: 20,
  },
  productItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor: 'red',
  },
  productId: {
    fontSize: 14,
    color: '#666',
  },
  loadingIndicator: {
    marginTop: 20,
  },
  errorContainer: {
    padding: 10,
    backgroundColor: '#ffcccc',
    borderRadius: 5,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
    backgroundColor: 'grey',
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    backgroundColor: 'red',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
  warrantyContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  warrantyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'blue',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});

export default ProductListScreen;
