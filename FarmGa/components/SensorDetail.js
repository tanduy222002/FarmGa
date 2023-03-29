import { View, Text, StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'

const SensorDetail = (navigation) => {
  return (
    <ScrollView>
    <View style={device.container}>
        <Text>Tên: LM35</Text>
        <Text>Thang đo: -55 đến 150</Text>
        <Text>Nhiệt độ vượt ngưỡng: 25</Text>
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