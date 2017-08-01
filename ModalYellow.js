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
class ModalYellow extends Component {


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
        })
        .catch((error) => {
            console.warn(error);
        });
}
 constructor(props) {
    super(props);
    this.state = { 
      modalVisible: false,
    wasteStat : null,
    general : null,
    compostable : null,
    recycle: null,
    hazardous: null,
 };
  this._fetchAPI();
  }
   

   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

   render() {
    let data = [
	["Compostable", this.state.compostable],
	["General", this.state.general],
  ["Recycle", this.state.recycle],
  ["Hazardous", this.state.hazardous],
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
            
            <TouchableOpacity  onPress = {() => {this.toggleModal(true)}} style={{flex:1,alignItems: 'flex-end',  position: "absolute",marginTop:6,marginRight:6,borderRadius:6,left:290}}>
              <Image source={require('./pic/info.png')} style={{width:35,resizeMode:'contain', }}/>
            </TouchableOpacity>


            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>

                  <TouchableHighlight onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>

               </View>
            </Modal>
         </View>
      )
   }
}

export default ModalYellow

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
      alignItems: 'center',
      backgroundColor: 'yellow',
      padding: 100
   },
	
   text: {
      color: '#3f2949',
      marginTop: 10
   },chart: {
		width: 350,
		height: 200,
	},
})