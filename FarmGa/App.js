
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Schedule from './pages/Schedule'
import Statistic from './pages/Statistic'
import Notification from './pages/Notification'
import Account from './pages/Account';
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign';
import { default as FeatherIcon } from 'react-native-vector-icons/Feather'
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
       
        barStyle={{ paddingBottom: 48 }}
            screenOptions={({ route }) => ({
            tabBarIcon: () => {
        
              if (route.name === 'Home') {
                return  <FeatherIcon name='sun' size={20}/>;
              } 
              if (route.name === 'Schedule') {
                return <MaterialIcon name='schedule' size={20}/>
              }
              if (route.name === 'Statistic') {
                return <AntDesignIcon name='barschart' size={20}/>
              }
              if (route.name === 'Notification') {
                return <FeatherIcon name='bell' size={20}/>
              }
              if (route.name === 'Account') {
                return  <MaterialCommunityIcon name='account-details' size={20}/>
              }
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
          })}
        >
            <Tab.Screen name="Home" component={Home}  options={{
            headerTitleAlign: "center", 
            }}/>
            <Tab.Screen name="Schedule" component={Schedule}options={{
            headerTitleAlign: "center",}}  />
            <Tab.Screen name="Statistic" component={Statistic} options={{
            headerTitleAlign: "center",}} />
            <Tab.Screen name="Notification" component={Notification} options={{
            headerTitleAlign: "center",}} />
            <Tab.Screen name="Account" component={Account} options={{
            headerTitleAlign: "center",}} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
