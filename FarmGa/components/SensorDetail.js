import { View, Text, StyleSheet,Image, ScrollView, Button,} from 'react-native'
import React, { useState ,useEffect} from 'react'
import Slider from '@react-native-community/slider';
import axios from "axios"

const SensorDetail = ({navigation,route}) => {
  let lowerBound=route.params.detail.threshold.lowerBound;
  let upperBound=route.params.detail.threshold.upperBound;
  const [lowerValue,setLowerValue] = useState(parseInt(lowerBound));
    
  const [upperValue,setUpperValue] = useState(parseInt(upperBound));

  const updateThreshold = async()=>{
      await axios.post('http://192.168.1.150:3000/update/threshold', 
        {"type":route.params.detail.type,"name":route.params.name,"upperBound":upperValue,"lowerBound":lowerValue}
      )
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <ScrollView>
    <View style={device.container}>
        <Text>Tên: 55</Text>
        <Text>Thang đo: -55 đến 150</Text>
        <Text>Nhiệt độ vượt ngưỡng:</Text>
        <Text>Ngưỡng dưới: {lowerValue}</Text>
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
      <Text>Ngưỡng trên: {upperValue}</Text>
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



      <Button onPress={updateThreshold} title='Update threshold'/>

       </View>
   
    </ScrollView>
  )
}
const device = StyleSheet.create({
    container: {
        backgroundColor:'#ebf2f6',
        flex:1,
        borderColor: "#94a3b8",
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
    },
})




export default SensorDetail