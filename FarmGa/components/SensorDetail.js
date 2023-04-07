import { View, Text, StyleSheet,Image, ScrollView,} from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';

const SensorDetail = (navigation) => {
  return (
    <ScrollView>
    <View style={device.container}>
        <Text>Tên: 55</Text>
        <Text>Thang đo: -55 đến 150</Text>
        <Text>Nhiệt độ vượt ngưỡng: 25</Text>
        <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="grey"
        value={1}
       
      />
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