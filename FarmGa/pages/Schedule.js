import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControlDeviceList from '../components/ControlDeviceList';
import EditControlDevice from './EditControlDevice';


const Stack = createNativeStackNavigator();

const Schedule = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ControlDeviceList"component={ControlDeviceList} />
        <Stack.Screen name="EditDeviceList"component={EditControlDevice} />
      </Stack.Navigator>
  )
}


export default Schedule
