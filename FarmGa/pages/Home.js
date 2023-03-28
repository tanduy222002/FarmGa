import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControlDeviceList from '../components/ControlDeviceList';
import EditControlDevice from './EditControlDevice';
import SensorDetail from '../components/SensorDetail';


const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false }}>
    <Stack.Screen name="SenSorDetail"component={SensorDetail} />
    </Stack.Navigator>
  );
}

export default Home