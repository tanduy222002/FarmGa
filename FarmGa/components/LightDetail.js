import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient';
const LightDetail = ({name,level,safetyLevel, onPress}) => {
    return (
    //   <View style={sensor.container}>
    //       <LinearGradient colors={['#C1D5F8','#A1F1CD',]}  style={sensor.sensorContainer}>
    //           <View style={{flex: 1, flexDirection:"column", gap:5,justifyContent:"space-around", padding:5,alignItems: 'center',}}>
    //               <MaterialCommunityIcon name='lightning-bolt-outline' size={40} color="#575454" />
    //               <Text style={{borderWidth:1, width:'94%', textAlign:'center', borderRadius:10, fontSize:12,backgroundColor:"#5B449E"}}>Light</Text>
    //               <Pressable 
    //                   onPress={onPress}
    //                   style={sensor.button}>
    //                   <Text >Chi tiết</Text>
    //                   <AntDesignIcon name="select1" size={14} color="black"/>
    //               </Pressable>
    //           </View>  
              
    //           <View style={{flex: 1, flexDirection:"column", justifyContent:'center',  alignItems: 'center', paddingTop:5,paddingBottom:5 }}>
    //               <Progress.Circle color={"#FB5D"} thickness={7} borderWidth={0} unfilledColor={"#F5E7E7"} fill={"#DBD1D0"} progress={level/100} size={60} />
    //               <Text style={{color:"#3b3232",fontWeight:500, fontSize:20, }}>{level}% </Text>   
    //           </View>  
    //       </LinearGradient>
    //       <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#95ABE4', '#9FEEDB', '#C79C9C']} style={sensor.sensorContainer}>
    //           <View style={{flexDirection:'column', alignItems:'center'}}>
    //           <Text style={sensor.sensorContainer.bold}>Now: {level}%  </Text>
    //           <Text style={sensor.sensorContainer.bold}>Safety: {safetyLevel}%</Text>
    //           <Text style={[sensor.sensorContainer.bold,sensor.color.green]}>Safe</Text>
    //           </View>
    //       </LinearGradient>
    //   </View>
    <View style={sensor.container}>
    <View style={sensor.sensorContainer}>
         <MaterialCommunityIcon name='lightning-bolt-outline' size={40} color="#575454" /> 
         <Text style={{marginLeft:15,color:"red",fontWeight:500, fontSize:22,  }}>Ouch it's too bright</Text>
    </View>
    <View style={sensor.sensorContainer}>
         <Text style={{color:"#3b3232",fontWeight:500, fontSize:18,  }}>LIGHT </Text>
         <Text style={{color:"#3b3232",fontWeight:500, fontSize:18,  }}>{level} lux  </Text>
         <Text style={{color:"grey",fontWeight:40, fontSize:14, marginLeft:'auto',marginRight:5, }}>10-20 </Text>
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
    
  
})
  
  export default LightDetail