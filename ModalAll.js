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
class ModalAll extends Component {


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
            
            
               





               
           
         </View>
      )
   }
}

export default ModalAll

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