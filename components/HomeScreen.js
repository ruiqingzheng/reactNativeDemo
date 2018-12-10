import React, {Component} from 'react';
import {Button,Platform, StyleSheet, Text, View} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('LoginScreen', {name: 'Jane'})}
      />
    );
  }
}

export default  HomeScreen