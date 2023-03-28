import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
const HumidityDetail = ({name,level,safetyLevel}) => {
  return (
    <View style={sensor.container}>
        <View style={sensor.sensorContainer}>
            <View style={{flex: 1, flexDirection:"column", padding: 5, justifyContent:"center", alignItems: 'center',}}>
                  <Progress.Circle color={"green"} thickness={5} borderWidth={0} unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={level/30} size={50} />
                  <Text style={{borderWidth:1, borderRadius:10,marginTop:2, fontSize:12,backgroundColor:"#5B449E"}}>Humidity</Text>
            </View>  
            <View style={{flex: 1, flexDirection:"column", justifyContent:"center",  alignItems: 'center',}}>
                  <Progress.Circle color={"green"} thickness={5} borderWidth={0} unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={level/100} size={50} />
                  <Text>{level}%</Text>
            </View>  
        </View>
        <View style={sensor.sensorContainer}>
            <View style={{flexDirection:'column'}}>
            <Text>Now: {level}%</Text>
            <Text>Safety: {safetyLevel}%</Text>
            <Text style={{color:"green"}}>Safe</Text>
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
            fontWeight: 600
        }
    },
    sensor:{

    }
  
})

export default HumidityDetail