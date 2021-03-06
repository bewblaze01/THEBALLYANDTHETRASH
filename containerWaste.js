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
  Alert, ScrollView,
} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import Modal from 'react-native-modal'
import Chart from 'react-native-chart';
import TrashApp from './main';
const ByYou_KEY = '@ByYou:data'

const strings = new LocalizedStrings({
 en:{
   yes : "Yes",
    no : "cancel",
    back:"Back",
     alert:"Confirmation",
    carthon : "Carton must go into the 'Yellow Bin'. Please confirm if you can do this",
    can : "Can must go into the 'Yellow Bin'. Please confirm if you can do this",
    foam : "Foam Box must go into the 'Blue Bin'. Please confirm if you can do this",
    glass : "Glass bottle must go into the 'Yellow Bin'. Please confirm if you can do this",
    chem: "Chemical container must go into the 'Red Bin'. Please confirm if you can do this",
 },th :{
    yes : "ใช่",
    no : "ยกเลิก",
    back:"กลับ",
     alert:"ยืนยันการทิ้งขยะ",
     carthon : "กล่องเครื่องดื่มต้องถูกทิ้งในถังขยะสีเหลือง กรุณากดยืนยันหากทิ้งขยะตามถังนี้ได้",
    can : "กระป๋องน้ำต้องถูกทิ้งในถังขยะสีเหลือง กรุณากดยืนยันหากทิ้งขยะตามถังนี้ได้",
    foam : "โฟมต้องถูกทิ้งในถังขยะสีน้ำเงิน กรุณากดยืนยันหากทิ้งขยะตามถังนี้ได้",
    glass : "ขวดแก้วต้องถูกทิ้งในถังขยะสีเหลือง กรุณากดยืนยันหากทิ้งขยะตามถังนี้ได้",
    chem: "บรรจุสิ่งของเคมีต้องถูกทิ้งในถังขยะสีแดง กรุณากดยืนยันหากทิ้งขยะตามถังนี้ได้",
 }
});
const image = [
  require('./pic/chem_containers.jpg'),
  require('./pic/cartons.jpg'),
  require('./pic/cans.png'),
  require('./pic/foambox.jpg'),
  require('./pic/glass_bottles.jpg')
  
]

export default class containerWaste extends Component {

  componentDidMount(){
    AsyncStorage.getItem(ByYou_KEY)
    .then((value)=> {
      this.setState({
        byYou: (value == null)? 0:JSON.parse(value),
      })
      console.log('Value: '+value)
      console.log('byYou: '+this.state.byYou)
    })
    .catch((error)=> console.log('AsyncStorage:'+error.message))
  }
   _save(){
        AsyncStorage.setItem(ByYou_KEY,JSON.stringify(this.state.byYou))
        .then(()=>console.log('Your byYou '+this.state.byYou+' has been saved'))
        .catch((error)=> console.log('AsyncStorage: '+error.message ))
        .done();
      }
    constructor(props) {
    super(props);
    if(strings.getLanguage()=='en'){
    this.state={
    colorButton1: '#15e498',
    colorButton2: '#253f3b',
    but1: image[0],
    but2: image[1],
    but3: image[2],
    but4: image[3],
    but5: image[4],
    byYou : 0,
  };
    }else{
        this.state={
        colorButton1: '#253f3b',
    colorButton2: '#15e498',
      
       but1: image[0],
    but2: image[1],
        but3: image[2],
    but4: image[3],
    but5: image[4],
     byYou : 0,
      }
    }
    
}
static navigationOptions = ({navigation }) =>{ 
   strings.setLanguage(navigation.state.params.lang)
}
 _handleApi(name,bin){  
   this.setState({
              byYou : this.state.byYou + 1 
            });
    fetch('http://smartbin.devfunction.com/api/', {
  method: 'post',
  body: JSON.stringify({
    team_id: 7,
    secret: 'fs4VcN',
    waste_statistics: [
      {
        category: name,
        selected: 1
      }
    ],
    bin_statistics: {
      general: (bin == 1)? 1:0,
      compostable: (bin == 2)? 1:0,
      recycle: (bin == 3)? 1:0,
      hazardous: (bin == 4)? 1:0
    }
  })
}).then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);         
        })
        .catch((error) => {
            console.warn(error);
        });
 this._save();         
console.log('POST');
  }
 _onEN(){
   strings.setLanguage('en');
   this.setState({
     colorButton1: '#15e498',
    colorButton2: '#253f3b', 
      but1: image[0],
    but2: image[1],
        but3: image[2],
    but4: image[3],
    but5: image[4],
   });
 }
_onTH(){
  strings.setLanguage('th');
  this.setState({
    colorButton1: '#253f3b',
    colorButton2: '#15e498',  
        but1: image[0],
    but2: image[1],
        but3: image[2],
    but4: image[3],
    but5: image[4],

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
              <ScrollView>
              {/* start statLeft bar */}
              <View style={styles.statTopL}>
                <View style={styles.buttonOne}>
                  <TouchableOpacity onPress={() => Alert.alert(
           strings.alert,
             strings.chem ,
            [
              {text: strings.no, onPress: () => console.log('Cancel Pressed!')},
              {text: strings.yes, onPress: () => this._handleApi('chemical container',4)},
            ]
          )}>
                  <Image source={this.state.but1} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => Alert.alert(
           strings.alert,
             strings.can ,
            [
              {text: strings.no, onPress: () => console.log('Cancel Pressed!')},
              {text: strings.yes, onPress: () => this._handleApi('can',3)},
            ]
          )}> 
                  <Image source={this.state.but3} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
                  <TouchableOpacity onPress={() => Alert.alert(
           strings.alert,
             strings.glass ,
            [
              {text: strings.no, onPress: () => console.log('Cancel Pressed!')},
              {text: strings.yes, onPress: () => this._handleApi('glass bottle',3)},
            ]
          )}>
                  <Image source={this.state.but5} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
                {/* end statLeft bar */}

 <ScrollView>
                {/* start statRight bar */}
              <View style={styles.statTopR}>
                <View style={styles.buttonFour}>
                      <TouchableOpacity onPress={() => Alert.alert(
           strings.alert,
             strings.carthon ,
            [
              {text: strings.no, onPress: () => console.log('Cancel Pressed!')},
              {text: strings.yes, onPress: () => this._handleApi('carthon',3)},
            ]
          )} >
                  <Image source={this.state.but2} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert(
           strings.alert,
             strings.foam ,
            [
              {text: strings.no, onPress: () => console.log('Cancel Pressed!')},
              {text: strings.yes, onPress: () => this._handleApi('foam',1)},
            ]
          )}>
                  <Image source={this.state.but4} style={{width:210,height:135,resizeMode: 'cover', }}/>
                 </TouchableOpacity>
    
                 </View>
                </View>
                {/* end statRight bar */}
                </ScrollView>
          </View>
          {/* End Button */}

          <View style={styles.footerContainer}>
            <TouchableOpacity style={{backgroundColor:'#6eeedc',alignItems:'center',width:350,borderRadius:6, justifyContent: 'center',}} onPress={()=>this.props.navigation.navigate('IdTrash',{lang:strings.getLanguage()}) }>
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



