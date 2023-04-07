import React from 'react'
import { View, Text ,Image} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SensorDetail from '../components/SensorDetail';
import SensorView from '../components/SensorView';

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center'}}>
    <Stack.Screen name="SenSorView" component={SensorView} 
    // options={{
    //   header: (props) =>
    //   (
    //     <View style={{height: '25%'}}>
    //     <Image style={{height:windowHeight,width:400}} source={require('../assets/plant1.jpg')}/>
    //     </View>
    //   ),
    // }}
    />
    <Stack.Screen name="SensorDetail" component={SensorDetail}/>
    </Stack.Navigator>
  );
}

export default Home