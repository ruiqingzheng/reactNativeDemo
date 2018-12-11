import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator, createSwitchNavigator, createAppContainer} from "react-navigation";


import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';


// stackNavigator例子
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   LoginScreen:{
//     screen: LoginScreen
//   }
// });

// SwitchNavigator
const AppStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
})

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  }
});

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});


export default createAppContainer(AppNavigator);



