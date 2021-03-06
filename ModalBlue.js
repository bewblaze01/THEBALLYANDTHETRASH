import React, { Component } from 'react';

import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   TouchableOpacity,
   Image
} from 'react-native'
import Chart from 'react-native-chart';
class ModalBlue extends Component {


  _fetchAPI(){
  fetch('http://smartbin.devfunction.com/api/?team_id=7&secret=fs4VcN')
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({          
                cloath: Number.parseInt(responseJSON.data.waste_statistics.cloaths, 10),
                paper:Number.parseInt(responseJSON.data.waste_statistics.paper,10),
                foam:Number.parseInt(responseJSON.data.waste_statistics.foam,10),
            });   
        })
        .catch((error) => {
            console.warn(error);
        });
}
 constructor(props) {
    super(props);
    this.state = { 
      modalVisible: false,
    cloath:null,
    paper:null,
    foam:null,
 };
  this._fetchAPI();
  }
   

   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

   render() {
    let data = [
	["Cloath", this.state.cloath],
	["Paper", this.state.paper],
  ["Foam", this.state.foam],
  
];


      return (
         <View style={styles.container}>

                     <Chart
					style={styles.chart}
					data={data}
					verticalGridStep={2}
					type="bar"
					showDataPoint={true}
          color="#46c7b6"   
          hideVerticalGridLines	={true}
					fillColor="#b1e7e0"
          dataPointFillColor="#2dbfac"
				 />
            
            <TouchableOpacity  onPress = {() => {this.toggleModal(true)}} style={{flex:1,alignItems: 'flex-start',  position: "absolute",marginTop:6,marginRight:6,borderRadius:6,left:50}}>
              <Image source={require('./pic/info.png')} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>




            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>


               <View style = {styles.modal}>
               
               {/* 1 */}
                <View style = {styles.blankContainer}>
               </View>

                {/* 2 */}
               <View style = {styles.title}>
                 <Image source={require('./pic/idenLogo.png')} style={{width:350,resizeMode: 'contain', }}/>
               </View>
                  {/* 3*/}
               <View style = {styles.title1}>
                 <Image source={require('./pic/needto.png')} style={{width:300,resizeMode: 'contain', }}/>
               </View>

                  {/* 4 */}
               <View style = {styles.icon}>
                   <Image source={require('./pic/binblue.png')} style={{width:75,resizeMode: 'contain', }}/>
               </View>
               {/* 5 */}
               <View style = {styles.message}>
                 <Text> General Waste Bin is the blue bin. It is for any waste that you cannot put into your recycling, organic or glass bins. Using all of your bins to their full potential will decrease the amount of waste going to your general waste bin.  This will reduce waste to landfill, as well as the impact your waste has on the environment.</Text>
               </View>
                {/* 6 */}
               <View style = {styles.footer}>
                  <TouchableOpacity style={{backgroundColor:'#6eeedc',alignItems:'center',width:350,borderRadius:6, justifyContent: 'center',}} onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
             <Text style={{color:'#29897c',fontWeight:'bold',fontSize:20}}>Got It</Text>
            </TouchableOpacity>
               </View>
                 
               </View>





               
            </Modal>
         </View>
      )
   }
}

export default ModalBlue

const styles = StyleSheet.create ({
container: {
       flex:4,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection:'row',
    marginLeft : 30,
    marginRight : 30,
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
}, 
	
   modal: {
   flex: 1,
    backgroundColor: '#338378',
   },bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },button: {

  },blankContainer:{
     
    flex:1
  },title:{
    flexDirection:'row',
    justifyContent: 'center',
    flex:1,
    marginLeft : 30,
  marginRight : 30,
  }, title1:{
    
     flexDirection:'row',
    justifyContent: 'center',
    flex:0.5
  },icon:{
   alignItems:'center',
     flexDirection:'row',
    justifyContent: 'center',
    flex:2

  },message:{
       
       flexDirection:'row',
    justifyContent: 'center',
       alignItems:'center',
       padding:20,  
    flex:3
  },footer:{
     flex:0.5,
    
    justifyContent: 'center',
    flexDirection:'row',
    marginTop : 10,
    marginLeft : 30,
    marginRight : 30,
    marginBottom : 20,
    borderRadius:6
  },
	
   text: {
      color: '#3f2949',
      marginTop: 10
   },chart: {
		width: 350,
		height: 200,
	},
})