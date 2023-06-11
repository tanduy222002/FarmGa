import React from 'react'
import { View, Text ,Image} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SensorDetail from '../components/SensorDetail';
import SensorView from '../components/SensorView';

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center'}}>
    <Stack.Screen name="SenSor View" component={SensorView} options={{headerShown:false,}}

    />
    <Stack.Screen name="Sensor Detail" component={SensorDetail}/>
    </Stack.Navigator>
  );
}

export default Home