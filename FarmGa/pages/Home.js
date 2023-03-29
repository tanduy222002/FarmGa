import React from 'react'
import { View, Text ,Image} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SensorDetail from '../components/SensorDetail';
import SensorView from '../components/SensorView';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height*0.25;
const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true, headerTitleAlign:'center'}}>
    {/* <Stack.Screen name="SenSorView" component={SensorView} options={{
      headerBackground:()=>
      // (<LinearGradient  colors={['#C1D5F8','#A1F1CD']}
      // style={{ flex: 1 }}
      // start={{x: 0, y: 0}}
      // end={{x: 1, y: 0}}/>)
      (<Image style={{height:300}} source={require('../assets/plant1.jpg')}/>)
      ,
      headerStyle:{
        height:'100%',
      }
    }
    } /> */}
    <Stack.Screen name="SenSorView" component={SensorView} options={{
      header: (props) =>
      (
        <View style={{height: '25%'}}>
        <Image style={{height:windowHeight,width:400}} source={require('../assets/plant1.jpg')}/>
        </View>
      ),
    }}/>
    <Stack.Screen name="SensorDetail" component={SensorDetail}/>
    </Stack.Navigator>
  );
}

export default Home