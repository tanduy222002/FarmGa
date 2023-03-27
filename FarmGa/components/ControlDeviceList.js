import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Area from '../components/Area'
import DeviceInfo from '../components/DeviceInfo'


const ControlDeviceList = () => {
  return (
    <View>
      <Text style={devicelist.title}>Lịch tưới</Text>
      <Area name="Khu vực I">
        <DeviceInfo name="Máy bơm 1" duration={7} level={1}/>
        <DeviceInfo name="Máy bơm 2" duration={5} level={2}/>
        <DeviceInfo name="Máy bơm 3" duration={10} level={3}/>
        <DeviceInfo name="Máy bơm 4" duration={9} level={1}/>
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
