import { View, ScrollView ,Image, TouchableOpacity,Text,Alert} from 'react-native'
import React, { useState ,useEffect} from 'react'
import Area from './Area'
import TemperatureDetail from './TemperatureDetail'
import HumidityDetail from './HumidityDetail'
import LightDetail from './LightDetail'
import axios from "axios"
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign'
import { getScheduleDate,getScheduleTime } from '../utils/formatDateTime'
const SensorView = ({navigation}) => {
  const [areaList,setAreaList] = useState(undefined)
  const [flag, setFlag] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    setInterval(SyncArea, 3000);
},[])

  const SyncArea = async()=>{
    console.log('syncArea' + new Date);
    await axios.get(`http://192.168.1.4:3000/area/all`)
    .then(res => {setAreaList(res.data)})
    .catch(() => setError(true))
    .finally(() => setLoading(false))
  }


  
  
  return (
    <ScrollView style={{backgroundColor:'#ebf2f6',}} >
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:10,width:'100%'}}>
          <Image style={{borderRadius:1000,width:100,height:100,}} source={require('../assets/durian.png')} />
          <View style={{padding:10,flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
              
              <Text style={{fontSize:24,fontWeight:600,}}>YOURNAME</Text>
              <Text style={{fontSize:14,fontWeight:600,color:'green'}}>Durian/Tropical fruit</Text>
              <View style={{flexDirection:'row',paddingTop:5,justifyContent:'center',alignItems:'flex-start',}}>
                <TouchableOpacity onPress={()=>{
                  setFlag(!flag)
                  date=new Date()
                  date=getScheduleTime(date)
                  Alert.alert('Update successfully', 'Data was updated at '+date, [
                    {text: 'OK'},
                  ]);
                }} style={{backgroundColor:'#8CFB8C',width:30,height:30,borderRadius:1000,justifyContent:'center',alignItems:'center',}}>
                   <AntDesignIcon name='sync' size={20}/>
                </TouchableOpacity>
                
              </View>
          </View>
          <View style={{justifyContent:'flex-start',alignItems:'center',height:100}}>
              <AntDesignIcon style={{}} name='exclamationcircle' size={20}/>
              <View style={{marginBottom:6,marginTop:'auto',borderRadius:1000,width:30,height:30,backgroundColor:'#8CFB8C',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:12,fontWeight:600}}>Live</Text>
              </View>
          </View>
      </View>
    <View style={{flexDirection:"column",}}>
    {areaList?.map((area, index) => {
      return(
        <Area name={area.name} key={index}>
          <TemperatureDetail 
            detail={area.record[0]}
            name={area.name}
          />
          <HumidityDetail  
            detail={area.record[1]}
            name={area.name}
            
          />
          <LightDetail 
            detail={area.record[2]} 
            name={area.name}
            
          />
        </Area>
      )
    })}

    </View>
    </ScrollView>
  )
}

export default SensorView