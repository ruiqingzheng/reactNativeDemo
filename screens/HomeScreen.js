import React, {Component} from 'react';
import {Button,Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  _signOutAsync = async() =>{
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={()=>{navigate("Other")}}/>
        <Button title="Actually, sign me out " onPress={this._signOutAsync}/>
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

export default  HomeScreen