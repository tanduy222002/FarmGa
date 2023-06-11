import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert} from 'react-native'
import React, { useState ,useEffect} from 'react'
import Slider from '@react-native-community/slider';
import axios from "axios"
import { REACT_APP_LOCALHOST } from '../constance'

const SensorDetail = ({navigation,route}) => {
  let lowerBound=route.params.detail.threshold.lowerBound;
  let upperBound=route.params.detail.threshold.upperBound;
  const [lowerValue,setLowerValue] = useState(parseInt(lowerBound));
    
  const [upperValue,setUpperValue] = useState(parseInt(upperBound));

  const updateThreshold = async()=>{
      if (upperValue<lowerValue){
        Alert.alert('Update failed', 'The Upper threshold must greater than the Lower threshold', [
          {text: 'OK'},
        ]);
        return;
      }

      await axios.post(`${REACT_APP_LOCALHOST}/update/threshold`, 
        {"type":route.params.detail.type,"name":route.params.name,"upperBound":upperValue,"lowerBound":lowerValue}
      )
      .then(function (response) {
        date=new Date()
        Alert.alert('Update successfully', 'Data was updated at '+date, [
          {text: 'OK'},
        ]);
      })
      .catch(function (error) {
        Alert.alert(error, [
          {text: 'OK'},
        ]);
      });

  }
  return (
    <ScrollView style={{marginTop:20}}>
    <View style={[device.container]}>
        <Text style={device.text}>Name: {route.params.detail.name}</Text>
        <Text style={device.text}>Range: {route.params.detail.range}°C</Text>
        <Text style={device.text}>Error: {route.params.detail.error}°C</Text>
        <Text style={device.text}>Threshold:</Text>
        <Text style={device.text}>Lower threshold: {lowerValue}</Text>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Slider
            name="threshold"
            style={{width: 300}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="grey"
            maximumTrackTintColor='tomato'
            value={lowerValue}
            step={1}
            onValueChange={value=>setLowerValue(value)}
          />
            <Text style={{borderWidth:2,padding:3,borderColor:'#01E47B',fontSize:16,fontWeight:'bold',justifyContent:'center',alignItems:'center'}}>{lowerValue}</Text>
       </View>
       
      <Text style={device.text}>Upper threshold {upperValue}</Text>
      <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          <Slider
            name="threshold"
            style={{width: 300}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="grey"
            maximumTrackTintColor='tomato'
            value={upperValue}
            step={1}
            onValueChange={value=>setUpperValue(value)}
          />
          <Text style={{borderWidth:2,padding:3,borderColor:'#F13B84',fontSize:16,fontWeight:'bold',justifyContent:'center',alignItems:'center'}}>{upperValue}</Text>
      </View>

      <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#4C586F',marginTop:5}}onPress={updateThreshold}>
          <Text style={{padding:7,fontWeight:'bold',color:'white',fontSize:18}}>Update Threshold</Text>
      </TouchableOpacity>
{/* 
      <Button style={{width:'30',backgroundColor:'grey'}} onPress={updateThreshold} title='Update threshold'/> */}

       </View>
   
    </ScrollView>
  )
}
const device = StyleSheet.create({
    container: {
        alignSelf:'center',
        backgroundColor:'#ebf2f6',
        borderColor: "#94a3b8",
        borderWidth: 1,
        width:'90%',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius: 5,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text:{
      fontWeight:'normal',
      fontSize:18,

    }
})




export default SensorDetail