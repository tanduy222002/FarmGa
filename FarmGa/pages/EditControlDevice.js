import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { default as FontistoIcon } from 'react-native-vector-icons/Fontisto';
import Button from '../components/Button'

const FormSelect = ({title, options, currentOption, onPressOption}) => {
  return (
    <View style={editForm.inputContainer}>
      <Text style={editForm.title}>{title}</Text>
      {options.map((op, i) => {
        return (
          <TouchableOpacity 
            style={i == currentOption ? activeItem : inactiveItem} 
            onPress={() => {onPressOption(i)}}
          >
            <FontistoIcon width={30} name={i == currentOption ?  "radio-btn-active" : "radio-btn-passive"}/>
            <Text key={i}>{op}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}



const EditControlDevice = () => {
  const [duration, setDuration] = useState(0)
  const [mode, setMode] = useState(-1)
  const [level, setLevel] = useState(-1)

  function updateDeviceMode(newMode) {
    setMode(prevMode => {
      // active select item if it is either not chosen or a different item
      if(prevMode === -1 || prevMode !== newMode) return newMode
      return -1;
    })
  }

  function updateDeviceLevel(newLevel) {
    // active select item if it is either not chosen or a different item
    setLevel(prevLevel => {
      if(prevLevel === -1 || prevLevel !== newLevel) return newLevel
      return -1;
    })
  }

  return (
    <View style={editForm.formContainer}>
      <Text style={editForm.title}>Chỉnh sửa thông tin thiết bị</Text>
      <View style={editForm.inputContainer}>
          <Text style={editForm.title}>Thời gian tưới</Text>
          <View style={editForm.flexItem}>
            <TextInput 
                placeholder='Thời gian tưới'
                value={duration}
                onChangeText={newDuration => setDuration(newDuration)}
            />
            <Text style={{marginLeft: 10}}>phút</Text>
          </View>
      </View>
      <FormSelect 
        title="Cường độ tưới"
        options={[1,2,3]} 
        currentOption={level}
        onPressOption={updateDeviceLevel}
      />
      <FormSelect 
        title="Chế độ tưới"
        options={["Phun sương", "Nhỏ giọt", "Tưới dầm"]} 
        currentOption={mode}
        onPressOption={updateDeviceMode}
      />
      <View style={editForm.buttonGroup}>
        <Button bg="#38bdf8" textContent="Kích hoạt" borderColor="#0284c7"/>
        <Button bg="#fde047" textContent="Xác nhận" borderColor="#facc15"/>
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