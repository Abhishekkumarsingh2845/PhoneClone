// // src/apiService.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://cuckoo.mcrm.in/API/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export const fetchOtpData = async () => {
//   try {
//     const response = await api.post('/',{
//         operation: 'getotp',
//         data: [{ mobile_no: 931126688 }]
//       }); // Assuming a POST request to the base URL
//     return response.data;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };


// apiService.js
// src/api/apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cuckoo.mcrm.in/API/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer b739cb9be1d0efd8a45f00242308e87c',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.post('/', {
      operation: 'getProductList',
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
