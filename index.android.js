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

        {/* start title bar */}
        <View style={styles.title}>
          <Text > CMU GREEN BIN </Text>
          </View>
          {/* End title bar */}


           <View style={styles.graphContainer}>
          <Text > CMU GREEN BIN </Text>
          </View>
          <View style={styles.binContainer}>
          <Text > CMU GREEN BIN </Text>
          </View>
          <View style={styles.statContainer}>
          <Text > CMU GREEN BIN </Text>
          </View>
          <View style={styles.footerContainer}>

          <Button title="Recycle item" /> 
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
flex:1,
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
  flex:1,
  }, graphContainer: {
    flex:4,
backgroundColor: 'white',
justifyContent: 'center',
flexDirection:'row',
marginTop : 10,
marginLeft : 30,
marginRight : 30,
  },
binContainer: {
    flex:1,
backgroundColor: '#338378',
justifyContent: 'center',
flexDirection:'row',
marginTop : 10,
marginLeft : 30,
marginRight : 30,
  },
statContainer: {
    flex:3,
backgroundColor: 'white',
justifyContent: 'center',
flexDirection:'row',
marginTop : 10,
marginLeft : 30,
marginRight : 30,
  },
footerContainer: {
    flex:1,
backgroundColor: '#1fbba6',
justifyContent: 'center',
flexDirection:'row',
marginTop : 10,
marginLeft : 30,
marginRight : 30,
marginBottom : 20,
  }
  
});

AppRegistry.registerComponent('THEBALLYANDTHETRASH', () => THEBALLYANDTHETRASH);
