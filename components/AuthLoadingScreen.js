
import React, {Component} from 'react';
import {StyleSheet, Text, View,
  ActivitityIndicator,
  AsyncStorage} from 'react-native';

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this.loadApp();
  };

  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App': 'Auth');

  };

  render() {
    return (<View>
    <Text>AuthLoadingScreen</Text>
    </View>);
  }
}
export default AuthLoadingScreen;