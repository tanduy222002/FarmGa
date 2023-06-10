import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatisticArea from '../components/AllStatistic';
import StatisticDetail from '../components/StatisticDetail';
import StatisticDaily from '../components/StatisticDaily';
const StatisticStack = createNativeStackNavigator();

const AllStatisticScreen = ({navigation, route}) => {
  const navigateToDetail = (type) => {navigation.navigate('Statistic Detail', {type: type})}

  return (
    <ScrollView>
        <StatisticArea navigateToDetail={navigateToDetail} type={0}></StatisticArea>
        <StatisticArea navigateToDetail={navigateToDetail} type={1}></StatisticArea>
        <StatisticArea navigateToDetail={navigateToDetail} type={2}></StatisticArea>
    </ScrollView>
  )
}

const StatisticDetailScreen = ({navigation, route}) => {
  const {type} = route.params;
  const navigateToDaily = (data) => {navigation.navigate('Statistic Daily', {type: type, data: data})}

  return (
    <StatisticDetail type={type} navigateToDaily={navigateToDaily}></StatisticDetail>
  )
}
//
const StatisticDailyScreen = ({navigation, route}) => {
  const {type, data} = route.params;


  return (
    <StatisticDaily type={type} data={data}></StatisticDaily>
  )
}

const Statistic = () => {
  return (
      <StatisticStack.Navigator>
        <StatisticStack.Screen name="All Statistic"component={AllStatisticScreen} />
        <StatisticStack.Screen name="Statistic Detail"component={StatisticDetailScreen} />
        <StatisticStack.Screen name="Statistic Daily"component={StatisticDailyScreen} />
      </StatisticStack.Navigator>
  )
}


export default Statistic