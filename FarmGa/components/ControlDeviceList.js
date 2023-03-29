import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Area from '../components/Area'
import DeviceInfo from '../components/DeviceInfo'


const ControlDeviceList = ({navigation}) => {
  function goToEditDevicePage() {
    navigation.navigate("EditDeviceList")
  }
  return (
    <View style={{backgroundColor:'#ebf2f6'}}>
      <Text style={devicelist.title}>Lịch tưới</Text>
      <Area name="Khu vực I">
        <DeviceInfo name="Máy bơm 1" duration={7} level={1} onPress={goToEditDevicePage}/>
        <DeviceInfo name="Máy bơm 2" duration={5} level={2} onPress={goToEditDevicePage}/>
        <DeviceInfo name="Máy bơm 3" duration={10} level={3} onPress={goToEditDevicePage}/>
        <DeviceInfo name="Máy bơm 4" duration={9} level={1} onPress={goToEditDevicePage}/>
      </Area>
    </View>
  )
}

const devicelist = StyleSheet.create({
  title: {
    fontSize: 20
  }
})

export default ControlDeviceList
