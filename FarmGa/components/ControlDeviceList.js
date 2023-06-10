import { useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import Area from '../components/Area'
import DeviceInfo from '../components/DeviceInfo'
import Button from '../components/Button'
import { useFetch } from '../hooks/useFetch'
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign'
 

const ControlDeviceList = ({navigation}) => {
  const [refresh, setRefresh] = useState(true)
  const { data : areaList , loading } = useFetch('area/all', [refresh])

  function refreshPage() {
    setRefresh(prev => !prev)
  }

  function goToEditDevicePage(areaId, scheduleId, device) {
    navigation.navigate("Edit Control Device", {
      areaId: areaId,
      scheduleId: scheduleId,
      device: device,
      refreshPage: refreshPage
    })
  }

  function goToAddSchedule() {
    navigation.navigate("Create Schedule", {
      refreshPage: refreshPage
    })
  }

  let ScheduleList = []
  areaList?.forEach((area) => {
    const AreaSchedule = area.schedule?.map((schedule, index) => {
      return(
        <Area name={area.name} date={schedule.date} time={schedule.time} key={schedule._id}>
        {schedule?.control?.map((device, index) => {
            return (
              <DeviceInfo 
                key={index}
                mode = {device?.mode}
                name={device?.name} 
                duration={device?.duration} 
                level={device?.level} 
                onPress={() => {
                  goToEditDevicePage(area._id, schedule._id, device)
                }}
              />
            )
          })
        }
        </Area>
      )
    })
    ScheduleList = [...ScheduleList, ...AreaSchedule]
  })

  return (
    <SafeAreaView style={{backgroundColor:'#ebf2f6'}}>
      <View style={devicelist.btnWrapper}>
        <Button 
          icon={<AntDesignIcon name="plus" size={30} color="#fff"/>}
          textContent="New schedule"
          borderColor="#059669"
          bg="#6ee7b7"
          onPressFunction={goToAddSchedule}
        >
        </Button>
      </View>
      {!loading ? 
      <ScrollView>
        {ScheduleList}
      </ScrollView>
      : <Text>loading...</Text>}
    </SafeAreaView>
  )
}

const devicelist = StyleSheet.create({
  title: {
    fontSize: 20
  },
  btnWrapper: {
    marginLeft: "auto",
    marginRight: 10
  }

})

export default ControlDeviceList
