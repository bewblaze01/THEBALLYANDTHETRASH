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
  TextInput
} from 'react-native';
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
 en:{
   binStat:"BIN STATISTICS",
   graph:"graph",
   item:"COKE CAN",
   choice:"How to choose the egg",
   how:"How to Recycle",
    stat:"Statistics",
    you:"By You",
    other:"By Others",
    total:"In Total",
    find: "Find my item..",
    recycle:"RECYCLE ITEM"
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
    recycle:"ทิ้งขยะทันที"
 }
});

export default class THEBALLYANDTHETRASH extends Component {
    constructor(props) {
    super(props);
    this.state = { text: 'Find my item ...',
    colorButton1: '#15e498',
    colorButton2: '#253f3b',              
  }; 
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
          <Text style={styles.header} >CMU   
           <Text style={{ fontStyle : 'italic',color:'#15e498'}} > GREEN</Text>  BIN</Text>
          </View>
          {/* End title bar */}


           {/* start graph bar */}
           
             <View style={styles.title1}>
          <Text style={styles.header1}> {strings.binStat} </Text>
          </View>
           <View style={styles.graphContainer}>
           <Text > {strings.graph}</Text>
          </View>

            {/* End graph bar */}

             {/* Start binselect bar */}
          <View style={styles.binContainer}>
           <View style={styles.select} >
                <Button color='#15e498' title=" 1 " /> 
              </View>
              <View style={styles.select} >
                <Button color='#253f3b' title=" 2 " /> 
              </View>
              <View style={styles.select} >
                <Button color='#253f3b' title=" 3 " /> 
              </View>
              <View style={styles.select} >
                <Button color='#253f3b' title=" 4 " /> 
              </View>
              <View style={styles.select} >
                <Button color='#253f3b' title=" 5 " /> 
              </View>
          </View>
           {/* end binselect bar */}

            {/* start statLeft bar */}
          <View style={styles.statContainer}>
            <View style={styles.statTopL}>
              <View style={styles.statFirst}>
             <Text > 1 </Text>
          </View>
          <View style={styles.statSecond}>
             <Text style={{fontWeight:'bold',color:'black'}}> {strings.item} </Text>
          </View>
          </View>
           {/* end statLeft bar */}



           {/* start statRight bar */}
          <View style={styles.statTopR}>
            <View style={styles.statThree}>
            <TouchableOpacity style={{backgroundColor:'#1fbba6',marginTop:6,marginRight:6,padding:6,borderRadius:6}}>
             <Text style={{color:'#ffffff'}}>{strings.how}</Text>
            </TouchableOpacity>
             </View>
             <View style={styles.statFour}>
                  <Text style={{color:'#a2a2a2',marginLeft:11,marginTop:10,fontSize:15,fontWeight:'bold'}} > {strings.stat} </Text>
             </View>
             <View style={styles.statFive}>
               <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-end',marginLeft:20}}><Text style={{color:'black'}} > 10 </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-end'}}><Text style={{color:'black'}} > 365 </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-end'}}><Text style={{color:'black'}} > 374 </Text></View>
         
             </View>
             <View style={styles.statSix}>
                     <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start',marginLeft:20}}><Text> {strings.you} </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start'}}><Text> {strings.other} </Text></View>
                   <View style={{flex:1, flexDirection:'column',justifyContent: 'flex-start'}}><Text> {strings.total} </Text></View>
             </View>
          </View>
          </View>
           {/* end statRight bar */}

                <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
           <Text > icon </Text>
          </View>
          <View style={styles.searchItem}>
          <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1,color:'#FFFF'}}
        onChangeText={(text) => this.setState({text})}
        value={strings.find}
      />
          </View>
          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity style={{backgroundColor:'#6eeedc',alignItems:'center',width:350,borderRadius:6, justifyContent: 'center',}}>
             <Text style={{color:'#29897c',fontWeight:'bold',fontSize:20}}>{strings.recycle}</Text>
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
       backgroundColor: 'blue',
       borderTopLeftRadius:6,
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
}
  
  
});


AppRegistry.registerComponent('theballyandthetrash', () => THEBALLYANDTHETRASH);
