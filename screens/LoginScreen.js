import React, {Component} from 'react';
import {AsyncStorage, Button, Platform, StyleSheet, Text, View} from 'react-native';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'LoginScreen,Please sign in',
  };
  // 设置用户为登录状态, 且跳转到App Screen
  _signInAsync = async() => {
    await AsyncStorage.setItem("userToken", 'abc');
    this.props.navigation.navigate("App")
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in" onPress={this._signInAsync}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default LoginScreen