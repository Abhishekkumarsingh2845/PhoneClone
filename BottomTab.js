import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text,Image,} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screen/Home.js';
import History from './Screen/History.js';
import Insurance from './Screen/Insurance.js';
import Store from './Screen/Store.js';
import Wealth from './Screen/Wealth.js';
import Pro from './Screen/Profile.js';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: 'blue', // Color of the active tab
        inactiveTintColor: 'gray', // Color of inactive tabs
        showLabel: true, // Whether to show labels for tabs
        style: {
          backgroundColor: 'white', // Background color of the tab bar
          borderTopWidth: 1, // Border on top of the tab bar
          borderTopColor: 'lightgray', // Border color
          paddingBottom: 5, // Padding at the bottom of the tab bar
        },
        labelStyle: {
          fontSize: 12, // Font size of the tab labels
          fontWeight: 'bold', // Font weight of the tab labels
        },
        iconStyle: {
          marginBottom: -3, // Adjust vertical position of icons
        },
      }}>
       <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./Asset/user.png')} 
                style={{ width: 24, height: 24, tintColor: color }} 
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text 
                style={{
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >
                Home
              </Text>
            ),
          }} 
        />
     <Tab.Screen 
          name="History" 
          component={History} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./Asset/user.png')} 
                style={{ width: 24, height: 24, tintColor: color }} 
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text 
                style={{
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >
                History
              </Text>
            ),
          }} 
        />
         <Tab.Screen 
          name="Insurnace" 
          component={Insurance} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./Asset/user.png')} 
                style={{ width: 24, height: 24, tintColor: color }} 
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text 
                style={{
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >
                wealth
              </Text>
            ),
          }} 
        />
        <Tab.Screen 
          name="Store" 
          component={Store} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./Asset/shopping-bag.png')} 
                style={{ width: 24, height: 24, tintColor: color }} 
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text 
                style={{
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >
                Store
              </Text>
            ),
          }} 
        />
        <Tab.Screen
          name="Pro" 
          component={Pro} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./Asset/user.png')} 
                style={{ width: 24, height: 24, tintColor: color }} 
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text 
                style={{
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >
                Home
              </Text>
            ),
          }} 
        />
        <Tab.Screen 
          name="Wealth" 
          component={Wealth} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./Asset/verified.png')} 
                style={{ width: 24, height: 24, tintColor: color }} 
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text 
                style={{
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal',
                }}
              >
                Insurnace
              </Text>
            ),
          }} 
        />
    </Tab.Navigator>
  );
}

export default BottomTab;
