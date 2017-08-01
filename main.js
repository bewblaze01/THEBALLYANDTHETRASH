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
import { StackNavigator } from 'react-navigation';
import LocalizedStrings from 'react-native-localization';
import Modal from 'react-native-modal'
import Chart from 'react-native-chart';
import identifyTrash from './identifyTrash'
import leftoverWaste from './leftoverWaste'
import containerWaste from './containerWaste'
import electronicWaste from './electronicWaste'
import liquidWaste from './liquidWaste'
import metalWaste from './metalWaste'
import materialWaste from './materialWaste'
import ModalBlue from './ModalBlue.js'
import ModalGreen from './ModalGreen.js'
import ModalRed from './ModalRed.js'
import ModalYellow from './ModalYellow.js'
import ModalAll from './ModalAll.js'

const ByYou_KEY = '@ByYou:data'

const strings = new LocalizedStrings({
 en:{
   binStat:"BIN STATISTICS",
   graph:"graph",
   item:"COKE CAN",
   how:"How to Recycle",
    stat:"Statistics",
    you:"By You",
    other:"By Others",
    total:"In Total",
    find: "Find my item..",
    recycle:"BIN IDENTIFIER",
    got:"GOT IT!",
 },th :{
   binStat:"สถิติ ขยะ",
   graph:"กราฟ",
   stat:"สถิติ",
   item:"โคเคน",
   how: "นำไปรีไซเคิลได้อย่างไร",
   you:"ของคุณ",
    other:"ของคนอื่น",
    total:"รวมทั้งหมด",
    find: "ค้นหาของฉัน",
    recycle:"ค้นหาเจ้าขยะ",
    got:"เข้าใจแล้ว!"
 }
});

const allButton = [
  require('./pic/all.png'),
  require('./pic/all_click.png')
]
const blueButton = [
  require('./pic/blue.png'),
   require('./pic/blue_c.png')
]
const redButton = [
  require('./pic/red.png'),
   require('./pic/red_c.png')
]
const yellowButton = [
   require('./pic/yellow.png'),
   require('./pic/yellow_c.png')
]
const greenButton = [
  require('./pic/green.png'),
   require('./pic/green_c.png')
]



class main extends Component {
  
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })
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
    this.state = { text: 'Find my item ...',
    colorButton1: '#15e498',
    colorButton2: '#253f3b',
    wasteStat : null,
    general : null,
    compostable : null,
    recycle: null,
    hazardous: null,
    byYou: null,
    byOthers: null,
    inTotal: null,
    all: allButton[1],
    green: greenButton[0],
    yellow: yellowButton[0],
    red: redButton[0],
    blue: blueButton[0],
   modal: <ModalAll/>,           
  };
  this._fetchAPI();
  }
_fetchAPI(){
  fetch('http://smartbin.devfunction.com/api/?team_id=7&secret=fs4VcN')
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                wasteStat : responseJSON.data.waste_statistics,
                general: Number.parseInt(responseJSON.data.bin_statistics.general, 10),
                compostable:Number.parseInt(responseJSON.data.bin_statistics.compostable,10),
                recycle:Number.parseInt(responseJSON.data.bin_statistics.recycle,10),
                hazardous:Number.parseInt(responseJSON.data.bin_statistics.hazardous,10),
            });
            this.setState({
              byOthers: this.state.general+this.state.compostable+this.state.recycle+this.state.hazardous-this.state.byYou,
              inTotal: this.state.general+this.state.compostable+this.state.recycle+this.state.hazardous,
            });
            if(strings.getLanguage()=='en'){
    this.setState({
    colorButton1: '#15e498',
    colorButton2: '#253f3b',
  });
    }else{
      this.setState({
        colorButton1: '#253f3b',
    colorButton2: '#15e498',
      })
    }
        })
        .catch((error) => {
            console.warn(error);
        });
}
   
 _onEN(){
   strings.setLanguage('en');
   this.setState({
     colorButton1: '#15e498',
    colorButton2: '#253f3b',  
   });
 }
_onTH(){
  strings.setLanguage('th');
  this.setState({
    colorButton1: '#253f3b',
    colorButton2: '#15e498',  
  });
}
_onAll(){
  this.setState({
   all: allButton[1],
    green: greenButton[0],
    yellow: yellowButton[0],
    red: redButton[0],
    blue: blueButton[0],  
    modal: <ModalAll/>  
  })
}
_onBlue(){
  this.setState({
   all: allButton[0],
    green: greenButton[0],
    yellow: yellowButton[0],
    red: redButton[0],
    blue: blueButton[1],
    modal: <ModalBlue/>  
  })
}
_onGreen(){
  this.setState({
   all: allButton[0],
    green: greenButton[1],
    yellow: yellowButton[0],
    red: redButton[0],
    blue: blueButton[0], 
    modal: <ModalGreen/>,  
  })
}
_onYellow(){
  this.setState({
   all: allButton[0],
    green: greenButton[0],
    yellow: yellowButton[1],
    red: redButton[0],
    blue: blueButton[0],
    modal: <ModalYellow/>    
  })
}
_onRed(){
  this.setState({
   all: allButton[0],
    green: greenButton[0],
    yellow: yellowButton[0],
    red: redButton[1],
    blue: blueButton[0],
    modal: <ModalRed/>    
  })
}
  render() {
   const { navigate } = this.props.navigation;
   let data = []
   if(strings.getLanguage()=='en'){
     data = [
	["Compostable", this.state.compostable],
	["General", this.state.general],
  ["Recycle", this.state.recycle],
  ["Hazardous", this.state.hazardous],
];
   }else{
      data = [
       	["ขยะย่อยสลาย", this.state.compostable],
	["ขยะทั่วไป", this.state.general],
  ["ขยะรีไซเคิล", this.state.recycle],
  ["ขยะอันตราย", this.state.hazardous],
     ]
   }
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
          <Image source={require('./pic/logo.png')} style={{width:350,resizeMode: 'contain',bottom:10 }}/>
          {/* <Text style={styles.header} >CMU   
           <Text style={{ fontStyle : 'italic',color:'#15e498'}} > GREEN</Text>  BIN</Text> */}
          </View>
          {/* End title bar */}


           {/* start graph bar */}
           
             <View style={styles.title1}>
          <Text style={styles.header1}> {strings.binStat} </Text>
          </View>
           {this.state.modal}

            {/* End graph bar */}

             {/* Start binselect bar */}
          <View style={styles.binContainer}>
           <View style={styles.select} >
                <TouchableOpacity onPress={()=>this._onAll()} >
              <Image source={this.state.all} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>
              </View>
              <View style={styles.select} >
                  <TouchableOpacity onPress={()=>this._onBlue()} >
              <Image source={this.state.blue} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>
              </View>
              <View style={styles.select} >
                <TouchableOpacity onPress={()=>this._onGreen()} >
              <Image source={this.state.green} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>
              </View>
              <View style={styles.select} >
                  <TouchableOpacity onPress={()=>this._onRed()} >
              <Image source={this.state.red} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>
              </View>
              <View style={styles.select} >
                 <TouchableOpacity onPress={()=>this._onYellow()}>
              <Image source={this.state.yellow} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>
              </View>
              
             
          </View>
           {/* end binselect bar */}

            {/* start statLeft bar */}
          <View style={styles.statContainer}>
            <View style={styles.statTopL}>
              <View style={styles.statFirst}>
              <Image source={require('./pic/Cokecan.png')} style={{width:50,resizeMode:'contain', }}/>
          </View>
          <View style={styles.statSecond}>
             <Text style={{fontWeight:'bold',color:'black'}}> {strings.item} </Text>
          </View>
          </View>
           {/* end statLeft bar */}



           {/* start statRight bar */}
          <View style={styles.statTopR}>
            <View style={styles.statThree}>


            
            <Modal isVisible={this.state.isModalVisible}>
         
           
            <View style={styles.modalContent}>
              
       
         
         
          </View>
       
              <View style={styles.button}>
                 <TouchableOpacity  onPress={this._hideModal} style={{backgroundColor:'#1fbba6',borderRadius:6}}>
              <Text>{strings.got}</Text>
 </TouchableOpacity>
             </View>
           
          
        </Modal>



             </View>
             <View style={styles.statFour}>
                  <Text style={{color:'#a2a2a2',marginLeft:11,marginTop:10,fontSize:15,fontWeight:'bold'}} > {strings.stat} </Text>
             </View>
             <View style={styles.statFive}>
               <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-end',marginLeft:20}}><Text style={{color:'black'}} > {this.state.byYou} </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-end'}}><Text style={{color:'black'}} > {this.state.byOthers} </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-end'}}><Text style={{color:'black'}} > {this.state.inTotal} </Text></View>
         
             </View>
             <View style={styles.statSix}>
                     <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start',marginLeft:20}}><Text> {strings.you} </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start'}}><Text> {strings.other} </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start'}}><Text> {strings.total} </Text></View>
             </View>
          </View>
          </View>
           {/* end statRight bar */}

             

          <View style={styles.footerContainer}>

            <TouchableOpacity  style={{backgroundColor:'#6eeedc',alignItems:'center',width:350,borderRadius:6, justifyContent: 'center'}} onPress={()=>navigate('IdTrash',{lang:strings.getLanguage()})}>
             <Text style={{color:'#29897c',fontWeight:'bold',fontSize:20}}>{strings.recycle}</Text>
            </TouchableOpacity>
          </View>


      </View>
    );
  }
}
const TrashApp = StackNavigator({
  Main: {screen: main},
  IdTrash: {screen: identifyTrash},
  Trash1: {screen : leftoverWaste},
  Trash2: {screen : containerWaste},
  Trash3: {screen : electronicWaste},
  Trash4: {screen : liquidWaste},
  Trash5: {screen : metalWaste},
  Trash6: {screen : materialWaste},
},{ headerMode: 'none' });
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
statContainer: {
    flex:3,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection:'row',
    marginTop : 10,
    marginLeft : 30,
    marginRight : 30,
   borderTopLeftRadius:6,
   borderTopRightRadius:6
  },
statTopL: {
      flex:2,
      
  },
statFirst: {
      flex:3,
       justifyContent: 'center',
       alignItems: 'center',
        borderBottomWidth:1, 
        borderRightWidth:1,
       borderColor: '#ccc',
       
  },  
statSecond: {
      flex:1,
       backgroundColor: 'white',
       alignItems: 'center',

       
  },
statTopR: {
      flex:5,
      
  },
statThree: {
      flex:1,
       backgroundColor: '#f2f2f2',
        alignItems: 'flex-end',
           borderTopRightRadius:6,
           

  },
statFour: {
      flex:1,
       backgroundColor: '#f2f2f2',
       borderBottomWidth:1,
       borderBottomColor: '#ccc'
        
  },
statFive: {
      flex:0.8,
       backgroundColor: '#ffffff',
       flexDirection:'row',
       
    justifyContent: 'center',
       
  },statSix: {
      flex:1.2,
       backgroundColor: '#ffffff',
       flexDirection:'row',
  },
searchContainer: {
    flex:0.7,
 
    justifyContent: 'center',
    flexDirection:'row',
    marginLeft : 30,
    marginRight : 30,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6
  },
  searchIcon:{
      flex:1,
      backgroundColor:'#161c1a',
      justifyContent: 'center', 
        alignItems: 'center',
      borderBottomLeftRadius:6,
  },
searchItem:{
      flex:8,
      borderBottomRightRadius:6,
      backgroundColor: '#253f3b'
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
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
  
    alignItems: 'center',
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex : 8
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  
  
});
export default TrashApp;

