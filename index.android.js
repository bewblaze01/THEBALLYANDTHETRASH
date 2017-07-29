/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class THEBALLYANDTHETRASH extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
            <Button title="TH" /> 
          </View>
           <View >
            <Button title="EN" />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#338378',
  },language:{
    flex:2,
    backgroundColor:'#ff4d4d',
    alignItems: 'center',
    borderRadius:20,
    margin:10,
  },
});

AppRegistry.registerComponent('THEBALLYANDTHETRASH', () => THEBALLYANDTHETRASH);
