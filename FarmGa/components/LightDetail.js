import { View, Text, StyleSheet,Pressable } from 'react-native'
import React, {useState,useEffect} from 'react'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign'
const LightDetail = ({detail, onPress}) => {
    const [currentState,setCurrentState]=useState("I'm good");
    const lowerBound=detail.threshold.lowerBound;
    const upperBound=detail.threshold.upperBound;
    const currentValue= parseFloat(detail.data[0].value);
    useEffect(()=>{
        if (currentValue>upperBound) {
            setCurrentState("Ouch, it's too bright")
        }
        else if (currentValue<lowerBound) {
            setCurrentState("Ouch, it's too dark")
        }
        
    },[])
    return (
        <View style={[sensor.sensorContainer,{flexDirection:'row',backgroundColor:'#EAE5DF',borderWidth:1}]}>
            <View style={sensor.container}>
                <View style={sensor.sensorContainer}>
                    <MaterialCommunityIcon name='lightning-bolt-outline' size={40} color="#575454" /> 
                    <Text style={[sensor.statusText,(currentState=="I'm good")?sensor.color.green:sensor.color.red
                            ]}>{currentState}</Text>
                </View>
                <View style={sensor.sensorContainer}>
                    <Text style={{color:"#3b3232",fontWeight:500, fontSize:18 }}>LIGHT </Text>
                    <Text style={{color:"#3b3232",fontWeight:500, fontSize:18 }}>{currentValue}%  </Text>
                </View>
    
            </View>
            <View style={{flex:1,flexDirection:'row',marginRight:0,marginLeft:'auto',justifyContent:'center',alignItems:'center'}}>
            <Progress.Circle color={"#FFEC1A"} thickness={6} borderWidth={0}  unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={currentValue/upperBound} size={55} />
            <AntDesignIcon style={{marginRight:15,marginLeft:'auto',marginBottom:0,marginTop:'auto'}} name="select1" size={18} color="black" onPress={onPress}/>
            </View>
        </View>
      )
    }
    
    
    const sensor = StyleSheet.create({
        container: {
            borderRadius:5,
            // borderWidth:1,
            borderColor: "#94a3b8",
            paddingLeft: 5,
            paddingRight: 5,
            width: "70%",
            flexDirection:'column',
            justifyContent: "space-around",
            backgroundColor:'#EAE5DF',
        },
        sensorContainer: {
            borderRadius:5,
            borderColor: "#94a3b8",
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap:5,
            
            flexDirection: 'row',
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
            blue:{
                color:'blue',
            }
        },
        statusText:{
            marginLeft:10,
            fontWeight:500,
            fontSize:22
        }
        
      
    })
  
  export default LightDetail