import { View, Text, ScrollView } from 'react-native'
import React, { useState ,useEffect} from 'react'
import Area from './Area'
import TemperatureDetail from './TemperatureDetail'
import HumidityDetail from './HumidityDetail'
import LightDetail from './LightDetail'


const SensorView = ({navigation}) => {
  function gotoSensorDetaiPage(){
      navigation.navigate("SensorDetail")
  }
  const [Data,SetData] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/areas")
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      SetData(data)
    })
  }, [])
  
  
  return (
    
    <ScrollView style={{backgroundColor:'#ebf2f6',}} >
    <View style={{flexDirection:"column",}}>
    <Area name="Khu vực I"  >
        <TemperatureDetail name="nhiệt độ" level={35} safetyLevel={20} onPress={gotoSensorDetaiPage}/>
        <HumidityDetail name="độ ẩm" level={25} safetyLevel={80} onPress={gotoSensorDetaiPage}/>
        <LightDetail name="ánh sáng" level={25} safetyLevel={80} onPress={gotoSensorDetaiPage}/>
    </Area>
    <Area name="Khu vực 2">
        <TemperatureDetail name="nhiệt độ" level={29} safetyLevel={30} onPress={gotoSensorDetaiPage}/>
        <HumidityDetail name="độ ẩm" level={50} safetyLevel={80} onPress={gotoSensorDetaiPage}/>
        <LightDetail name="ánh sáng" level={37} safetyLevel={80} onPress={gotoSensorDetaiPage}/>
    </Area>
    <Area name="Khu vực 3">
        <TemperatureDetail name="nhiệt độ" level={35} safetyLevel={30} onPress={gotoSensorDetaiPage}/>
        <HumidityDetail name="độ ẩm" level={40} safetyLevel={80} onPress={gotoSensorDetaiPage}/>
        <LightDetail name="ánh sáng" level={47} safetyLevel={80} onPress={gotoSensorDetaiPage}/>
    </Area>
    </View>
    </ScrollView>
  )
}

export default SensorView