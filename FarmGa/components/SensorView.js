import { View, ScrollView } from 'react-native'
import React, { useState ,useEffect} from 'react'
import Area from './Area'
import TemperatureDetail from './TemperatureDetail'
import HumidityDetail from './HumidityDetail'
import LightDetail from './LightDetail'
import { getAverageValue } from '../utils/calcSensorValue'


const SensorView = ({navigation}) => {
  function gotoSensorDetaiPage(){
      navigation.navigate("SensorDetail")
  }
  const [areaList, setAreaList] = useState([])

  useEffect(() => {
    fetch("http://172.20.7.93:3000/areas")
    .then(res => res.json())
    .then(data => {
      setAreaList(data)
    })
    .catch(err => console.log(err))
  }, [])
  
  
  return (
    
    <ScrollView style={{backgroundColor:'#ebf2f6',}} >
    <View style={{flexDirection:"column",}}>
    {areaList?.map((area, index) => {
      console.log("area: ", area)
      return(
        <Area name={area.name} key={index}>
          <TemperatureDetail 
            name="nhiệt độ" 
            level={getAverageValue(area.record, "Temperature")} 
            safetyLevel={20} 
            onPress={gotoSensorDetaiPage}
          />
          <HumidityDetail 
            name="độ ẩm" 
            level={getAverageValue(area.record, "Humidity")} 
            safetyLevel={80} 
            onPress={gotoSensorDetaiPage}
          />
          <LightDetail 
            name="ánh sáng" 
            level={getAverageValue(area.record, "Light")} 
            safetyLevel={80} 
            onPress={gotoSensorDetaiPage}
          />
        </Area>
      )
    })}

    </View>
    </ScrollView>
  )
}

export default SensorView