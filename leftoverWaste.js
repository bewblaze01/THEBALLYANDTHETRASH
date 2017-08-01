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
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  AsyncStorage,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import Modal from 'react-native-modal'
import Chart from 'react-native-chart';
import TrashApp from './main';
const ByYou_KEY = '@ByYou:data'

const strings = new LocalizedStrings({
 en:{
    back:"Back",
 },th :{
    back:"กลับ",
 }
});
const image = [
  require('./pic/pic_foodwaste.jpg'),
  require('./pic/pic_meatwaste.jpg'),
]

export default class leftoverWaste extends Component {

    constructor(props) {
    super(props);
    if(strings.getLanguage()=='en'){
    this.state={
    colorButton1: '#15e498',
    colorButton2: '#253f3b',
    but1: image[0],
    but2: image[1],
  };
    }else{
        this.state={
        colorButton1: '#253f3b',
    colorButton2: '#15e498',
      
       but1: image[0],
    but2: image[1],
      }
    }
    
}
static navigationOptions = ({navigation }) =>{ 
   strings.setLanguage(navigation.state.params.lang)
}
 
 _onEN(){
   strings.setLanguage('en');
   this.setState({
     colorButton1: '#15e498',
    colorButton2: '#253f3b', 
      but1: image[0],
    but2: image[1],
   });
 }
_onTH(){
  strings.setLanguage('th');
  this.setState({
    colorButton1: '#253f3b',
    colorButton2: '#15e498',  
      but1: imageThai[0],
    but2: imageThai[1],
  });
}
  render() {
  
    return (
      <View style={styles.container}>


       {/* start language bar */}
          <View style={styles.languageBar}>
              <View style={styles.language} >
                <Button color={this.state.colorButton1} title="EN" onPress={()=>this._onEN()} /> 
              </View>
                <View style={styles.language1} >
                  <Button color={this.state.colorButton2} title="TH" style={styles.button2} onPress={()=>this._onTH()} /> 
                </View>
          </View>
        {/* End language bar */}

        {/* start title bar */}
        <View style={styles.title}>
          <Image source={require('./pic/idenLogo.png')} style={{width:350,resizeMode: 'contain', }}/>
          </View>
          {/* End title bar */}


          
          <View style={styles.blankContainer}> 
          </View>
            


            {/* Button */}
          <View style={styles.statContainer}>
              {/* start statLeft bar */}
              <View style={styles.statTopL}>
                <View style={styles.buttonOne}>
                  <TouchableOpacity>
                  <Image source={this.state.but1} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
                </View>
              </View>
                {/* end statLeft bar */}


                {/* start statRight bar */}
              <View style={styles.statTopR}>
                <View style={styles.buttonFour}>
                      <TouchableOpacity>
                  <Image source={this.state.but2} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
                 </View>
                </View>
                {/* end statRight bar */}
          </View>
          {/* End Button */}

          <View style={styles.footerContainer}>
            <TouchableOpacity style={{backgroundColor:'#6eeedc',alignItems:'center',width:350,borderRadius:6, justifyContent: 'center',}} onPress={()=>this.props.navigation.navigate('Main') }>
             <Text style={{color:'#29897c',fontWeight:'bold',fontSize:20}}>{strings.back}</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#338378',
}, 
languageBar: {
    flexDirection:'row',
    flex:1,
},
language:{
    flex:1,
    alignItems: 'flex-end',
    borderRadius:20,
    margin:5,
  },
language1:{
    borderRadius:20,
    margin:5,
  },
  select:{
    
    alignItems: 'center',
    borderRadius:10,
    margin:5,
  },
title:{
    flexDirection:'row',
    justifyContent: 'center',
    flex:1,
    marginLeft : 30,
  marginRight : 30,
  }, 
title1:{
    flexDirection:'row',
    justifyContent: 'center',
    
        alignItems: 'center',
    backgroundColor : '#1fbba6',
    flex:0.7,
    marginLeft : 30,
  marginRight : 30,
  borderTopRightRadius:6,
   borderTopLeftRadius:6
  }, 
graphContainer: {
    flex:4,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection:'row',
    marginLeft : 30,
    marginRight : 30,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
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
  blankContainer: {
    flex:2,

  },
statContainer: {
    flex:9,
    backgroundColor: '#338378',

    flexDirection:'row',

  },
footerContainer: {
    flex:1,
    backgroundColor: '#6eeedc',
    justifyContent: 'center',
    flexDirection:'row',
    marginTop : 10,
    marginLeft : 30,
    marginRight : 30,
    marginBottom : 20,
    borderRadius:6
  },  chart: {
		width: 350,
		height: 200,
	},

header:{
      fontFamily: 'verdana',
     
   fontSize: 35,
    fontWeight: '900',
    color : 'white',
},
  header1:{
      fontFamily: 'verdana',
    fontSize:22  ,
    fontWeight: '900',
    color : 'white',
},button: {
    backgroundColor:'#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex:1,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6
  },
  statTopL: {
      flex:1,
  },
    statTopR: {
      flex:1,
  },buttonOne:{
     flex:1,
     
  },
    buttonTwo:{
     flex:1,

  },
    buttonThree:{
     flex:1,
  },
    buttonFour:{
     flex:1,
  }
    ,
    buttonFive:{
     flex:1,

  }
    ,
    buttonSix:{
     flex:1,
  }
  
  
});



