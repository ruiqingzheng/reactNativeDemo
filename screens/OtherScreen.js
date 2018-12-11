import React, {Component} from 'react';
import {Button,StatusBar,StyleSheet, Text, View,AsyncStorage} from 'react-native';

class OtherScreen extends Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  //注销且跳转到其他页面
  _signOutAsync = async() =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default OtherScreen