import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { default as FontistoIcon } from 'react-native-vector-icons/Fontisto';

const FormSelect = ({title, options}) => {
  return (
    <View style={editForm.inputContainer}>
      <Text>{title}</Text>
      {options.map((op, i) => {
        return (
          <View style={editForm.flexItem}>
            <FontistoIcon width={30} name="radio-btn-active"/>
            <Text key={i}>{op}</Text>
          </View>
        )
      })}
    </View>
  )
}



const EditControlDevice = () => {
  return (
    <View style={editForm.formContainer}>
      <Text style={editForm.title}>Chỉnh sửa thông tin thiết bị</Text>
      <View style={editForm.inputContainer}>
          <Text>Thời gian tưới</Text>
          <View style={editForm.flexItem}>
            <TextInput 
                placeholder='Thời gian tưới'
            />
            <Text>phút</Text>
          </View>
      </View>
      <FormSelect title="Cường độ tưới"options={[1,2,3]}/>
      <FormSelect title="Chế độ tưới"options={["Phun sương", "Nhỏ giọt", "Tưới dầm"]}/>

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
    //flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#94a3b8",
    width: 280
  },
  flexItem: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f1f5f9",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: 250
  }
})

export default EditControlDevice