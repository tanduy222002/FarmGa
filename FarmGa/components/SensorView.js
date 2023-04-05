import { View, ScrollView ,Image, TouchableHighlight,Text} from 'react-native'
import React, { useState ,useEffect} from 'react'
import Area from './Area'
import TemperatureDetail from './TemperatureDetail'
import HumidityDetail from './HumidityDetail'
import LightDetail from './LightDetail'
import { useFetch } from '../hooks/useFetch'

const SensorView = ({navigation}) => {
  function gotoSensorDetaiPage(){
      navigation.navigate("SensorDetail")
  }
  const { data : areaList ,error, loading } = useFetch('area/all')
  
  
  return (
    
    <ScrollView style={{backgroundColor:'#ebf2f6',}} >
      <View style={{flexDirection:'row'}}>
          <Text>abc</Text>
          <Image style={{borderRadius:1000,width:100,height:100, resizeMode: 'cover',}} source={require('../assets/durian.png')} />
      </View>
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