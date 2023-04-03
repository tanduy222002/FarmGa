import { View, ScrollView } from 'react-native'
import React, { useState ,useEffect} from 'react'
import Area from './Area'
import TemperatureDetail from './TemperatureDetail'
import HumidityDetail from './HumidityDetail'
import LightDetail from './LightDetail'



const SensorView = ({navigation}) => {
  function gotoSensorDetaiPage(){
      navigation.navigate("SensorDetail")
  }
  const [areaList, setAreaList] = useState([])

  useEffect(() => {
    fetch("10.229.61.55:3000/areas")
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
      return(
        <Area name={area.name} key={index}>
          <TemperatureDetail 
            detail={area.record[0]}
            onPress={gotoSensorDetaiPage}
          />
          <HumidityDetail  
            detail={area.record[1]}
            onPress={gotoSensorDetaiPage}
          />
          <LightDetail 
            detail={area.record[2]} 
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