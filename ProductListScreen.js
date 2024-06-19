

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, ActivityIndicator,Button, Image,TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ProductListScreen = ({ modelId }) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [stateValue, setStateValue] = useState(null);
  const [stateData, setStateData] = useState([]);
  const [districtValue, setDistrictValue] = useState(null);
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [customerProducts, setCustomerProducts] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [warrantyStatus, setWarrantyStatus] = useState([]); // New state for warranty status
  const [sourceData, setSourceData] = useState([]);
  const [selectedSource, setSelectedSource] = useState(null);

  const [error, setError] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

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


  useEffect(() => {
    const fetchCustomerProducts = async () => {
      setLoading(true);
      setError('');

      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          throw new Error('Token not found');
        }

        const apiUrl = 'https://cuckoo.mcrm.in/API/';
        const requestData = {
          operation: 'getCustomerProduct',
          data: [{
            mobile_no: phoneNumber
          }]
        };

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.post(apiUrl, requestData, { headers });
        console.log('Customer Products Response:', response.data);

        if (response.data.status === '200') {
          const customerProductsData = response.data.data;
          setCustomerProducts(customerProductsData);
        } else {
          setError(response.data.msg);
          Alert.alert('API Error', response.data.msg);
        }
      } catch (error) {
        console.error('API Error:', error);
        setError('Failed to fetch customer products. Please try again later.');
        Alert.alert(
          'API Error',
          'Failed to fetch customer products. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    if (phoneNumber) {
      fetchCustomerProducts();
    }
  }, [phoneNumber]);
// New useEffect for fetching warranty status
useEffect(() => {
  const fetchWarrantyStatus = async () => {
    setLoading(true);
    setError('');

    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        throw new Error('Token not found');
      }

      const apiUrl = 'https://cuckoo.mcrm.in/API/';
      const requestData = {
        operation: 'getWarranty',
        data: [{
          model_id: modelId,  // Use modelId from props or state
          invoice_date: selectedDate,  // Use selectedDate from state
        }]
      };

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(apiUrl, requestData, { headers });
      console.log('Warranty Status Response:', response.data);

      if (response.data.status === '200') {
        const warrantyStatusData = response.data.data;
        setWarrantyStatus(warrantyStatusData); // Update warranty status state
      } else {
        setError(response.data.msg);
        Alert.alert('API Error', response.data.msg);
      }
    } catch (error) {
      console.error('API Error:', error);
      setError('Failed to fetch warranty status. Please try again later.');
      Alert.alert(
        'API Error',
        'Failed to fetch warranty status. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Only fetch warranty status if modelId and selectedDate are available
  if (modelId && selectedDate) {
    fetchWarrantyStatus();
  }
}, [modelId, selectedDate]);

useEffect(() => {
  const fetchSourceOfSale = async () => {
    setLoading(true);
    setError('');

    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        throw new Error('Token not found');
      }

      const apiUrl = 'https://cuckoo.mcrm.in/API/';
      const requestData = {
        operation: 'getSourceOfSale',
        data: [],
      };

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(apiUrl, requestData, { headers });
      console.log('Source of Sale Response:', response.data);

      if (response.data.status === '200') {
        const dropdownData = response.data.data.map((item) => ({
          label: item.source,
          value: item.id,
        }));
        setSourceData(dropdownData);
      } else {
        setError(response.data.msg);
        Alert.alert('API Error', response.data.msg);
      }
    } catch (error) {
      console.error('API Error:', error);
      setError('Failed to fetch source of sale data. Please try again later.');
      Alert.alert('API Error', 'Failed to fetch source of sale data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  fetchSourceOfSale();
}, []);


  return (
    <View style={styles.container}>
      <ScrollView>
   <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Button
        title="Fetch Customer Products"
        onPress={() => {
          if (phoneNumber.trim() === '') {
            Alert.alert('Error', 'Please enter a phone number');
          } else {
            setLoading(true);
            setCustomerProducts([]);
            // phoneNumber state change will trigger useEffect to fetch data
          }
        }}
      />

{loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : customerProducts.length > 0 ? (
        customerProducts.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Text>Customer Name: {product.customer_name}</Text>
            <Text>Email: {product.email}</Text>
            <Text>Address: {product.address}</Text>
            <Text>Model: {product.model}</Text>
            <Text>Purchase Date: {product.purchase_date}</Text>
            <Text>Serial Number: {product.serial_no}</Text>
            <Text>Warranty Card: {product.warranty_card}</Text>
            <Text>Invoice: {product.invoice}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.errorText}>{error}</Text>
      )}
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
           <Dropdown
          style={styles.dropdown}
          data={sourceData}
          labelField="label"
          valueField="value"
          placeholder="Select Source of Sale"
          value={selectedSource}
          onChange={(item) => {
            setSelectedSource(item.value);
            console.log('Selected source of sale:', item);
          }}
          containerStyle={styles.dropdownContainer}
          selectedTextStyle={styles.selectedText}
          itemTextStyle={styles.itemText}
          placeholderStyle={styles.placeholder}
          dropdownStyle={styles.dropdownMenu}
        />

       
           {value1 && (
        <View style={{flexDirection:'row',left:25}}>
           <Dropdown
            style={styles.dropdown}
            data={data2}
            labelField="label"
            valueField="value"
            placeholder="Select second item"
            value={value2}
            onChange={(item) => {
              setValue2(item.value);
              console.log('Selected second item:', item);
            }}
            containerStyle={styles.dropdownContainer}
            selectedTextStyle={styles.selectedText}
            itemTextStyle={styles.itemText}
            placeholderStyle={styles.placeholder}
            dropdownStyle={styles.dropdownMenu}
          />
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',padding:2 ,right:-3}}>
          <TouchableOpacity onPress={showDatePicker}>
          <Image source={ require("./Asset/calendar.png")} style={{width:40,height:30,resizeMode:'contain'}}    />
          </TouchableOpacity>
          
    
    </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime" // Use "date" for date only, "time" for time only
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
         
        </View>
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
        {loading ? (
  <ActivityIndicator size="large" color="#0000ff" />
) : warrantyStatus.length > 0 ? (
  <View style={styles.warrantyContainer}>
    <Text style={styles.warrantyTitle}>Warranty Status:</Text>
    <Text>Model ID: {warrantyStatus[0].model_id}</Text>
    <Text>Warranty Days: {warrantyStatus[0].warranty_days}</Text>
    <Text>Date of Purchase: {warrantyStatus[0].dop}</Text>
    <Text>Warranty Expiry Date: {warrantyStatus[0].expire_date}</Text>
    <Text>Warranty Status: {warrantyStatus[0].warranty_status}</Text>
  </View>
) : (
  <Text style={styles.errorText}>{error}</Text>
)}
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
    backgroundColor:'blue',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor:'red',
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
    backgroundColor:'red',
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






