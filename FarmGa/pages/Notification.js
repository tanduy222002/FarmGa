import { useState, useEffect } from 'react'
import { FlatList, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import { getScheduleDate, getScheduleTime } from '../utils/formatDateTime'
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import NotifyItem from '../components/NotifyItem'


const baseURL = "http://172.20.15.88:3000"

const Notification = () => {
  const [refresh, setRefresh] = useState(true)
  const [notifications, setNotifications] = useState([])
  async function deleteNotification(id) {
    await axios.delete(`${baseURL}/notification/${id}`)
    .then(() => {
      console.log("Delete notification")
      setRefresh(prev => !prev)
    })
  }

  useEffect(() => {
    axios
      .get(`${baseURL}/notification`)
      .then(res => {
        setNotifications(res.data)
      })
      .catch(err => console.log(err))
  }, [refresh])

  return (
    <View style={notification.container}>
      <View style={notification.title.container}>
          <Text style={notification.title.text}>My Notification</Text>
          <TouchableOpacity onPress={()=>{
              setRefresh(prev => !prev)
              date=new Date()
              date=getScheduleTime(date)
              Alert.alert('Notification data refreshed', 'Data was updated at '+ date, [
                {text: 'OK'},
              ]);
            }} style={{backgroundColor:'#8CFB8C',width:30,height:30,borderRadius:1000,justifyContent:'center',alignItems:'center',}}>
              <AntDesignIcon name='sync' size={20}/>
          </TouchableOpacity>
      </View>
      <FlatList 
        data = {notifications}
        renderItem = {item => {
          return <NotifyItem {...item.item} onDelete={deleteNotification} />
        }}
        ItemSeparatorComponent={() => <View style={notification.separator} />}
      >
      </FlatList>
    </View>
  )
}

const notification = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: "center",
  },
  separator: {
    marginVertical: 8
  },
  title: {
    text: {
      fontSize: 20,
      fontWeight: 600,
    },
    container: {
      marginVertical: 15,
      flexDirection: "row",
      gap: 10
    },
  }
})



export default Notification