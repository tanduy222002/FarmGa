import { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button'
import { default as FontistoIcon } from 'react-native-vector-icons/Fontisto';
import { updateScheduleDevice } from '../service/schedule'
import { sendControlSignal } from '../service/controlDevice'


const FormSelect = ({title, options, currentOption, onPressOption}) => {
  return (
    <View style={editForm.inputContainer}>
      <Text style={editForm.title}>{title}</Text>
      {options.map((op, i) => {
        return (
          <TouchableOpacity 
            style={op == currentOption ? activeItem : inactiveItem} 
            onPress={() => {onPressOption(op)}}
            key={i}
          >
            <FontistoIcon size={18} name={op == currentOption ?  "radio-btn-active" : "radio-btn-passive"}/>
            <Text key={i}>{op}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const levelOptions = [1,2,3]
const modeOptions = ["Spray", "Shower", "Heavy Shower"]

const EditControlDevice = () => {
  const route = useRoute()
  const areaId = route.params.areaId
  const scheduleId = route.params.scheduleId
  const {name, _id: deviceId, duration : initDuration, mode : initMode, level : initLevel} = route.params.device


  const [duration, setDuration] = useState(initDuration)
  const [mode, setMode] = useState(initMode)
  const [level, setLevel] = useState(initLevel)

  function activateDevice(deviceKey, duration, level, mode) {
    return sendControlSignal(deviceKey, {
      duration: duration,
      level: level,
      mode: mode
    })
  }

  function saveDeviceConfig(areaId, scheduleId, deviceId, duration, level, mode) {
    if(duration > 0 || level > 0 || mode != null) {
      updateScheduleDevice({
        areaId: areaId,
        scheduleId: scheduleId,
        deviceId: deviceId,
        duration: duration,
        level: level,
        mode: mode
      }).then(res => {
        console.log(res);
        const { duration: newDuration, level: newLevel, mode : newMode } = res
        setDuration(newDuration)
        setLevel(newLevel)
        setMode(newMode)
      })
    }
  }

  function updateDeviceMode(newMode) {
    setMode(prevMode => {
      // active select item if it is either not chosen or a different item
      if(prevMode == null || prevMode !== newMode) return newMode
      return null;
    })
  }

  function updateDeviceLevel(newLevel) {
    // active select item if it is either not chosen or a different item
    setLevel(prevLevel => {
      if(prevLevel == null || prevLevel !== newLevel) return newLevel
      return null;
    })
  }

  return (
    <View style={editForm.formContainer}>
      <Text style={editForm.title}>{name}</Text>
      <View style={editForm.inputContainer}>
          <Text style={editForm.title}>Duration</Text>
          <View style={editForm.flexItem}>
            <TextInput 
                placeholder='Duration'
                value={duration}
                onChangeText={newDuration => setDuration(parseInt(newDuration))}
            />
            <Text style={{marginLeft: 10}}>minute</Text>
          </View>
      </View>
      <FormSelect 
        title="Level"
        options={levelOptions} 
        currentOption={level}
        onPressOption={updateDeviceLevel}
      />
      <FormSelect 
        title="Mode"
        options={modeOptions} 
        currentOption={mode}
        onPressOption={updateDeviceMode}
      />
      <View style={editForm.buttonGroup}>
        <Button 
          bg="#38bdf8" 
          textContent="Active device" 
          borderColor="#0284c7"
          onPressFunction={() => {
            activateDevice("bbc-led", duration, level, mode)
          }}
        />
        <Button 
          bg="#fde047" 
          textContent="Save" 
          borderColor="#facc15"
          onPressFunction={() => {
            saveDeviceConfig(areaId, scheduleId, deviceId, duration, level, mode)
          }}
        />
      </View>
    </View>
  )
}

const editForm = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
    fontSize: 20
  },  
  inputContainer: {
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 5,
    borderColor: "#94a3b8",
    borderRadius: 5,
    marginVertical: 10,
    width: 280
  },
  flexItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f1f5f9",
    borderColor: "#0891b2",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 250,
    marginBottom: 5,
    borderWidth: 1
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10
  }
})

const selectState =  StyleSheet.create({
  inactive: {
    borderColor: "#94a3b8",
    backgroundColor: "#e2e8f0"
  },
  active: {
    borderColor: "#0284c7",
    backgroundColor: "#e0f2fe"
  }
})

const activeItem = StyleSheet.compose(editForm.flexItem, selectState.active)
const inactiveItem = StyleSheet.compose(editForm.flexItem, selectState.inactive)
export default EditControlDevice