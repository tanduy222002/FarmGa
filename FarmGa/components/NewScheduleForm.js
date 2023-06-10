import { useState } from 'react'
import { Text, View, StyleSheet, Platform, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useFetch } from '../hooks/useFetch'
import Button from '../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'
import { createNewSchedule } from '../service/schedule'
import { getScheduleTime, getScheduleDate } from '../utils/formatDateTime'
import { useRoute, useNavigation } from "@react-navigation/native"


const NewScheduleForm = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [date, setDate] = useState(new Date())
    const {data : areaList, loading} = useFetch('area/name')

    const route = useRoute()
    const refreshPageFn = route.params.refreshPage
    const navigation = useNavigation()

    function selectDate(event, date) {
        const { type, nativeEvent: {timestamp}} = event
        setDate(date)
    }
    
    function createSchedule() {
        return createNewSchedule({
            areaName: areaList[selectedIndex].name,
            date: getScheduleDate(date),
            time: getScheduleTime(date),
        }).then(res => {
            Alert.alert('Successful', 'New schedule has been created!', [
                {text: 'OK'},
            ]);
            refreshPageFn()
            navigation.navigate("Control Device List")
        })
    }

    return (
        loading 
        ? <Text>loading...</Text> 
        :
            <View style={form.container}>   
                <DateTimePicker value={date} onChange={selectDate} mode={Platform.OS === "ios" ? "datetime" : "date"}/>
                <Picker 
                    selectedValue={areaList[selectedIndex].name}
                    style={form.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedIndex(itemIndex)}
                        
                    >
                    {areaList.map((area, index) => {
                        return <Picker.Item label={area.name} value={area.name} key={index}/>
                    })}
                </Picker>
                <View style={form.groupButton}>
                    <Button textContent="Close" bg="#ef4444" borderColor="#dc2626"></Button>
                    <Button 
                        textContent="Save" 
                        bg="#34d399" 
                        borderColor="#10b981"
                        onPressFunction={createSchedule}
                    >    
                    </Button>
                </View>
            </View>
    )
}

const form = StyleSheet.create({
    container: {
        borderColor: "#94a3b8",
        borderWidth: 1,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 20
    },
    picker: {
        flex: 0.2,
        borderColor: "#94a3b8",
        height: 50,
        width: "100%",
        paddingHorizontal: 10
    },
    groupButton: {
        position: "absolute",
        bottom: 50,
        alignItems: "center",
        flexDirection: "row",
        gap: 20
    }
})

export default NewScheduleForm