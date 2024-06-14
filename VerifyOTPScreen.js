// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// // import axios from 'axios';

// // const VerifyOTPScreen = ({ route, navigation }) => {
// //   const { mobileNumber, otp } = route.params;
// //   const [enteredOTP, setEnteredOTP] = useState('');

// //   const handleVerifyOTP = async () => {
// //     if (enteredOTP === otp) {
// //       try {
// //         const apiUrl = 'https://cuckoo.mcrm.in/API/';
// //         const requestData = {
// //           operation: 'getLogin',
// //           data: [{
// //             mobile_no: mobileNumber,
// //             otp: enteredOTP,
// //           }]
// //         };

// //         const response = await axios.post(apiUrl, requestData);
// //         console.log('Login Response:', response.data);

// //         if (response.data.status === '0') {
// //           const token = response.data.data[0].token;
// //           // Now you have the token, you can store it in AsyncStorage or pass it to ProductListScreen
// //           navigation.navigate('ProductListScreen', { token });
// //         } else {
// //           Alert.alert('Error', response.data.msg);
// //         }
// //       } catch (error) {
// //         console.error('API Error:', error);
// //         Alert.alert('Error', 'Failed to verify OTP. Please try again.');
// //       }
// //     } else {
// //       Alert.alert('Error', 'Invalid OTP. Please try again.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Verify OTP</Text>
// //       <Text style={styles.instructions}>Enter OTP sent to {mobileNumber}</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter OTP"
// //         value={enteredOTP}
// //         onChangeText={setEnteredOTP}
// //         keyboardType="numeric"
// //       />
// //       <Button title="Verify OTP" onPress={handleVerifyOTP} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //     backgroundColor:"blue",
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //     fontWeight: 'bold',
// //   },
// //   instructions: {
// //     fontSize: 18,
// //     marginBottom: 20,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     width: '80%',
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 20,
// //     paddingHorizontal: 10,
// //   },
// // });

// // export default VerifyOTPScreen;
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const VerifyOTPScreen = ({ route, navigation }) => {
//   const { mobileNumber, otp } = route.params;
//   const [enteredOTP, setEnteredOTP] = useState('');

//   const handleVerifyOTP = async () => {
//     if (enteredOTP === otp) {
//       try {
//         const apiUrl = 'https://cuckoo.mcrm.in/API/';
//         const requestData = {
//           operation: 'getLogin',
//           data: [{
//             mobile_no: mobileNumber,
//             otp: enteredOTP,
//           }]
//         };

//         const response = await axios.post(apiUrl, requestData);
//         console.log('Login Response:', response.data);

//         if (response.data.status === '0') {
//           const token = response.data.data[0].token;
//           await AsyncStorage.setItem('authToken', token); // Store the token in AsyncStorage
//           navigation.navigate('ProductListScreen');
//         } else {
//           Alert.alert('Error', response.data.msg);
//         }
//       } catch (error) {
//         console.error('API Error:', error);
//         Alert.alert('Error', 'Failed to verify OTP. Please try again.');
//       }
//     } else {
//       Alert.alert('Error', 'Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify OTP</Text>
//       <Text style={styles.instructions}>Enter OTP sent to {mobileNumber}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         value={enteredOTP}
//         onChangeText={setEnteredOTP}
//         keyboardType="numeric"
//       />
//       <Button title="Verify OTP" onPress={handleVerifyOTP} />
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
//   instructions: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'center',
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

// export default VerifyOTPScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyOTPScreen = ({ route, navigation }) => {
  const { mobileNumber, otp } = route.params;
  const [enteredOTP, setEnteredOTP] = useState('');

  const handleVerifyOTP = async () => {
    if (enteredOTP === otp) {
      try {
        const apiUrl = 'https://cuckoo.mcrm.in/API/';
        const requestData = {
          operation: 'getLogin',
          data: [{
            mobile_no: mobileNumber,
            otp: enteredOTP,
          }]
        };

        const response = await axios.post(apiUrl, requestData);
        console.log('Login Response:', response.data);

        if (response.data.status === '0') {
          const token = response.data.data[0].token;
          await AsyncStorage.setItem('authToken', token); // Store the token in AsyncStorage
          navigation.navigate('ProductListScreen');
        } else {
          Alert.alert('Error', response.data.msg);
        }
      } catch (error) {
        console.error('API Error:', error);
        Alert.alert('Error', 'Failed to verify OTP. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.instructions}>Enter OTP sent to {mobileNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={enteredOTP}
        onChangeText={setEnteredOTP}
        keyboardType="numeric"
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
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
  instructions: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
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

export default VerifyOTPScreen;
