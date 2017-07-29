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


       {/* start language bar */}
          <View style={styles.languageBar}>
              <View style={styles.language} >
                <Button title="EN" /> 
              </View>
                <View style={styles.language1} >
                  <Button title="TH" /> 
                </View>
          </View>
        {/* End language bar */}
        <View style={styles.title}>
          <Text > CMU GREEN BIN </Text>
          </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#338378',
  }, languageBar: {
flexDirection:'row',
  },language:{
    flex:1,
    alignItems: 'flex-end',
    borderRadius:20,
    margin:5,
  },language1:{
    borderRadius:20,
    margin:5,
  },title:{
  flexDirection:'row',
  justifyContent: 'center',
  }
  
});

AppRegistry.registerComponent('THEBALLYANDTHETRASH', () => THEBALLYANDTHETRASH);
