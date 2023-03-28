import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Area from './Area'
import TemperatureDetail from './TemperatureDetail'
import HumidityDetail from './HumidityDetail'
import LightDetail from './LightDetail'
const SensorDetail = ({navigation}) => {

  return (
    <ScrollView>
    <View style={{flexDirection:"column"}}>
    <Area name="Khu vực I">
        <TemperatureDetail name="nhiệt độ" level={35} safetyLevel={30}/>
        <HumidityDetail name="độ ẩm" level={25} safetyLevel={80}/>
        <LightDetail name="ánh sáng" level={25} safetyLevel={80}/>
    </Area>
    <Area name="Khu vực 2">
        <TemperatureDetail name="nhiệt độ" level={29} safetyLevel={30}/>
        <HumidityDetail name="độ ẩm" level={50} safetyLevel={80}/>
        <LightDetail name="ánh sáng" level={37} safetyLevel={80}/>
    </Area>
    </View>
    </ScrollView>
  )
}

export default SensorDetail