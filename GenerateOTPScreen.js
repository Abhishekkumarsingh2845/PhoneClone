// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
// import axios from 'axios';

// const GenerateOTPScreen = ({navigation}) => {
//   const [mobileNumber, setMobileNumber] = useState('');

//   const handleGenerateOTP = async () => {
//     if (!mobileNumber) {
//       Alert.alert('Error', 'Please enter a mobile number');
//       return;
//     }

//     try {
//       const apiUrl = 'https://cuckoo.mcrm.in/API/';
//       const requestData = {
//         operation: 'getotp',
//         data: [{mobile_no: mobileNumber}],
//       };

//       const response = await axios.post(apiUrl, requestData);
//       console.log('Generate OTP Response:', response.data);

//       if (response.data.status === '200') {
//         const {otp} = response.data.data[0];
        
//         navigation.navigate('VerifyOTPScreen', {mobileNumber, otp});
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
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//         keyboardType="phone-pad"
//       />
//       <Button title="Generate OTP" onPress={handleGenerateOTP} />
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
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default GenerateOTPScreen;

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import axios from 'axios';

const GenerateOTPScreen = ({navigation}) => {
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
        data: [{mobile_no: mobileNumber}],
      };

      const response = await axios.post(apiUrl, requestData);
      console.log('Generate OTP Response:', response.data);

      if (response.data.status === '200') {
        const {otp} = response.data.data[0];
        navigation.navigate('VerifyOTPScreen', {mobileNumber, otp});
      } else {
        Alert.alert('API Error', response.data.msg);
      }
    } catch (error) {
      console.error('API Error:', error);

      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        Alert.alert('API Error', 'Server error occurred. Please try again later.');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Request data:', error.request);
        Alert.alert('API Error', 'No response from server. Please check your network.');
      } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
        Alert.alert('API Error', 'Error in setting up the request.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate OP</Text>
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
    backgroundColor: 'blue',
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
