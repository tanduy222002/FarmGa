import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SensorDetail from '../components/SensorDetail';
import SensorView from '../components/SensorView';
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center'}}>
    <Stack.Screen name="SenSorView" component={SensorView} options={{
      headerBackground:()=>(<LinearGradient  colors={['#C1D5F8','#A1F1CD']}
      style={{ flex: 1 }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}/>),}
    } />
    <Stack.Screen name="SensorDetail" component={SensorDetail}/>
    </Stack.Navigator>
  );
}

export default Home