import { View, Text, StyleSheet } from 'react-native'
import Area from '../components/Area'
import DeviceInfo from '../components/DeviceInfo'
import Button from '../components/Button'
import { useFetch } from '../hooks/useFetch'
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign'
 

const ControlDeviceList = ({navigation}) => {
  const { data : areaList , loading } = useFetch('area/all')
  function goToEditDevicePage(areaId, scheduleId, device) {
    navigation.navigate("Edit Control Device", {
      areaId: areaId,
      scheduleId: scheduleId,
      device: device
    })
  }
  function goToAddSchedule() {
    navigation.navigate("Create Schedule")
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
    <View style={{backgroundColor:'#ebf2f6'}}>
      <Text style={devicelist.title}>Lịch tưới</Text>
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
      <View>
        {ScheduleList}
      </View>
      : <Text>loading...</Text>}
    </View>
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
