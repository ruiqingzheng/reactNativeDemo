import React, {Component} from 'react';
import {Button,Platform, StyleSheet, Text, View} from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'LoginScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

export default LoginScreen