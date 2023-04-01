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
            setCurrentState("Ouch, it's too bright ")
        }
        
    },[])
    return (
              
    //           <View style={{flex: 1, flexDirection:"column", justifyContent:'center',  alignItems: 'center', paddingTop:5,paddingBottom:5 }}>
    //               <Progress.Circle color={"#FB5D"} thickness={7} borderWidth={0} unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={level/100} size={60} />
    //               <Text style={{color:"#3b3232",fontWeight:500, fontSize:20, }}>{level}% </Text>   
    //           </View>  
    
    <View style={sensor.container}>
    <View style={sensor.sensorContainer}>
         <MaterialCommunityIcon name='lightning-bolt-outline' size={40} color="#575454" /> 
         <Text style={[sensor.stateText,(currentState=="I'm good")?sensor.color.green:sensor.color.red]}>{currentState}</Text>
    </View>
    <View style={sensor.sensorContainer}>
         <Text style={{color:"#3b3232",fontWeight:500, fontSize:18,  }}>LIGHT </Text>
         <Text style={{color:"#3b3232",fontWeight:500, fontSize:18,  }}>{currentValue} lux  </Text>
         <Text style={{color:"grey",fontWeight:400, fontSize:14, marginLeft:'auto',marginRight:5, }}>{lowerBound}-{upperBound}</Text>
         <Pressable
         onPress={onPress}>
         <AntDesignIcon style={{marginRight:10,}} name="select1" size={18} color="black"/>
         </Pressable>
    </View>

</View>

    )
  }
  
  
  const sensor = StyleSheet.create({
    container: {
        borderRadius:5,
        borderWidth:1,
        borderColor: "#94a3b8",
        // paddingTop: 5,
        // paddingBottom: 5,
        width: "100%",
        flexDirection:'column',
        justifyContent: "space-around",
        backgroundColor:'#EAE5DF',
    },
    sensorContainer: {
        borderRadius:10,
        borderColor: "#94a3b8",
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap:5,
        marginLeft:5,
        marginRight:5,
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
    },
    
    stateText:{marginLeft:15,color:"green",fontWeight:500, fontSize:22 }
})
  
  export default LightDetail