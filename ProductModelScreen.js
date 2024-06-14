import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductModelScreen = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    ProductModel();
  }, []);

  const ProductModel = async () => {
    setLoading(true);
    setError('');
    try{
        const token =await AsyncStorage.getItem("authToken");
        if(!token)
            {
                throw new Error("Token not found");

            }
            const ApiUrl ="https://cuckoo.mcrm.in/API/";
            const requestData = {
                operation :'getModel',
                data:[],
            };

            const header ={
                Authorization : "Bearer ${token}",

            };
            const  respponse =await axios.post(ApiUrl,requestData,{header}) ;
            console.log("product Response:",respponse.data);
            if(respponse.data.status ==='0')
                {
                    
                }

    }
  };

  return (
    <View>
      <Text>ProductModelScreen</Text>
    </View>
  );
};

export default ProductModelScreen;

const styles = StyleSheet.create({});
