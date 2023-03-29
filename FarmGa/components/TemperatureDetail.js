import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign'
import {LinearGradient} from 'expo-linear-gradient';

const TemperatureDetail = ({name,level,safetyLevel, onPress}) => {
  return (
    <View style={sensor.container}>
        <LinearGradient colors={['#C1D5F8','#A1F1CD',]}  style={sensor.sensorContainer}>
            <View style={{flex: 1, flexDirection:"column", gap:5,justifyContent:"space-around", padding:5,alignItems: 'center',}}>
                <MaterialCommunityIcon name='sun-thermometer-outline' size={40} color="#575454" />
                <Text style={{borderWidth:1, width:'94%',textAlign:'center', borderRadius:10, fontSize:12,backgroundColor:"#5B449E"}}>Temperature</Text>
                <Pressable 
                    onPress={onPress}
                    style={sensor.button}>
                    <Text >Chi tiết</Text>
                    <AntDesignIcon name="select1" size={14} color="black"/>
                </Pressable>
            </View>  
            
            <View style={{flex: 1, flexDirection:"column", justifyContent:'center', alignItems: 'center', paddingTop:5, paddingBottom:5 }}>
                <Progress.Circle color={"#FB5D5D"} thickness={7} borderWidth={0}  unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={level/30} size={60} />
                <Text style={{color:"#3b3232",fontWeight:500, fontSize:20,  }}>{level}°C </Text>   
            </View>  
        </LinearGradient>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#95ABE4', '#9FEEDB', '#C79C9C']} style={sensor.sensorContainer}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={sensor.sensorContainer.bold}>Now: {level}°C  </Text>
            <Text style={sensor.sensorContainer.bold}>Safety: {safetyLevel}°C</Text>
            <Text style={[sensor.sensorContainer.bold,sensor.color.red]}>Warning</Text>
            </View>
        </LinearGradient>
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
            color:"#3b3232",fontWeight:400, fontSize:18,
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
        gap:5,
        backgroundColor:"#FFC10B",
    },
    color:{
        red:{
            color:'red',
        },
        green:{
            color:'green',
        },
    },
    
  
})

export default TemperatureDetail