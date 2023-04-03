import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControlDeviceList from '../components/ControlDeviceList';
import NewScheduleForm from '../components/NewScheduleForm';
import EditControlDevice from './EditControlDevice';


const Stack = createNativeStackNavigator();

const Schedule = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Control Device List"component={ControlDeviceList} />
        <Stack.Screen name="Edit Control Device"component={EditControlDevice} />
        <Stack.Screen name="Create Schedule"component={NewScheduleForm} />
      </Stack.Navigator>
  )
}


export default Schedule
