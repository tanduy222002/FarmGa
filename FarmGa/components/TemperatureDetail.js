import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign'

const TemperatureDetail = ({name,level,safetyLevel, onPress}) => {
  return (
    <View style={sensor.container}>
        <View style={sensor.sensorContainer}>
            <View style={{flex: 1, flexDirection:"column", gap:5,justifyContent:"space-around", alignItems: 'center',}}>
                  <Text style={{borderWidth:1, borderRadius:10,marginTop:2, fontSize:12,backgroundColor:"#5B449E"}}>Temperature</Text>
                  <Pressable
                  onPress={onPress}
                  style={sensor.button}>
                        <Text >Chi tiết</Text>
                        <AntDesignIcon name="select1" size={14} color="black"/>
                  </Pressable>
            </View>  
            <View style={{flex: 1, flexDirection:"column", justifyContent:"center",  alignItems: 'center', marginTop:5 }}>
                  <Progress.Circle color={"#FB5D5D"} thickness={5} borderWidth={0} unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={level/30} size={50} />
                  <Text>{level} C</Text>
            </View>  
        </View>
        <View style={sensor.sensorContainer}>
            <View style={{flexDirection:'column'}}>
            <Text>Now: {level} C</Text>
            <Text>Safety: {safetyLevel} C</Text>
            <Text style={{color:"red"}}>Warning</Text>
            </View>
        </View>
    </View>
  )
}


const sensor = StyleSheet.create({
    container: {
        borderColor: "#94a3b8",
        paddingTop: 5,
        paddingBottom: 5,
        width: "100%",
        flexDirection:'row',
        justifyContent: "space-around",
    },
    sensorContainer: {
        borderRadius:20,
        borderColor: "#94a3b8",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width:"45%",
        bold: {
            color: "#0284c7",
            fontWeight: 600,
        }
    },
    button:{
        borderColor:"grey",
        width:"90%",
        borderWidth:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor:"#FFC10B",
        gap:2,
        

    },
  
})

export default TemperatureDetail