import { View, Text, StyleSheet ,  TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'

import { default as Icon }  from 'react-native-vector-icons/FontAwesome'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
const TemperatureDetail = ({detail}) => {
    let currentState = "It's a nice day"
    const lowerBound=parseFloat(detail.threshold.lowerBound);
    const upperBound=parseFloat(detail.threshold.upperBound);
    const currentValue= parseFloat(detail.data[0].value);
    const lastCurrentValue= parseFloat(detail.data[1].value);
    let ratio = "+0%"
    const navigation=useNavigation();

    function gotoSensorDetaiPage(){
        navigation.navigate("SensorDetail")
    }
    if (currentValue>upperBound) {
        currentState="I'm so hot"
    }
    else if (currentValue<lowerBound) {
        currentState="I'm so cold"
    }
    else currentState="It's a nice day"
    const rtio=(currentValue/lastCurrentValue)
        if(rtio>1){
            ratio='+'+(((rtio-1)*100).toFixed(2)).toString()+'%'
        }
        else{
            ratio='-'+(((1-rtio)*100).toFixed(2)).toString()+'%'
        }
    
    
   
      
  return (
    <TouchableOpacity onPress={gotoSensorDetaiPage}  style={[sensor.container,{flexDirection:'row',paddingLeft:5,paddingRight:5,justifyContent:'flex-start'}]}>
        <View style={[sensor.container,{width:'100%',borderWidth:0}]}>
            <View style={[sensor.container,{flexDirection:'row',borderWidth:0,paddingLeft: 5,paddingRight: 5,justifyContent:'flex-start'}]}>
                <Text style={[sensor.text,sensor.color.lightGrey]}>TEMPERATURE</Text>
                <Text style={[sensor.text,{marginLeft:'auto',marginRight:5},(ratio[0]=='+')?sensor.color.lightGreen:sensor.color.lightRed]}>{ratio}</Text>
            </View>
            <View style={[sensor.container,{flexDirection:'row',borderWidth:0,}]}>
                <View style={[sensor.container,{flex:1,borderWidth:0}]}>
                    <View style={[sensor.container,{flexDirection:'row',borderWidth:0,paddingLeft: 5,paddingRight: 5,justifyContent:'flex-start'}]}>
                        <Icon name='thermometer-three-quarters' size={35} color="#F3478E" /> 
                        <Text style={[sensor.text,sensor.color.darkBlue,{fontSize:25,marginLeft:15,marginRight:'auto'}]}>{currentValue}°C  </Text>
                    </View>
                    <View style={[sensor.container,{flexDirection:'row',borderWidth:0,justifyContent:'flex-start',paddingLeft:5,paddingRight:5,}]}>
                        <Text style={[sensor.text,{fontSize:20},(currentState=="I'm so hot")?sensor.color.red:(currentState=="I'm so cold")?sensor.color.blue:sensor.color.green]}>{currentState}</Text>
                    </View>
                </View>
                <View style={{padding:10}}>
                <Progress.Circle 
                 
                    strokeCap='square'  
                    
                    color={"#F3478E"} 
                    thickness={6} 
                    borderWidth={0}  
                    unfilledColor={"#F5E7E7"}
                    fill={"#DBD1D0"}
                 
                    progress={(currentValue/upperBound)} 
                    size={55} 
                />
                </View>
            </View>
        </View>
     
    </TouchableOpacity>    
  )
}


const sensor = StyleSheet.create({
    container: {
        borderRadius:5,
        borderWidth:1,
        borderColor: "#94a3b8",
     
        width: "100%",
        flexDirection:'column',
        justifyContent: "center",
        alignItems:'center',
        backgroundColor:'white',
    },
    text:{
        fontWeight:800,
        fontSize:18,
    },
    sensorContainer: {
        borderRadius:5,
        borderColor: "#94a3b8",
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap:5,
        flexDirection: 'row',
        paddingTop:5,
        paddingLeft :5,
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
        lightRed:{
            color:'#F13B84',
        },
        red:{
            color:'red',
        },
        green:{
            color:'green',
        },
        blue:{
            color:'blue',
        },
        lightGreen:{
            color:'#01E47B',
        },
        lightGrey:{
            color:'#9CA3B6',
        },
        darkBlue:{
            color:'#2B416B',
        },
    },
    statusText:{
        marginLeft:10,
        fontWeight:500,
        fontSize:22,
    }

    
  
})

export default TemperatureDetail