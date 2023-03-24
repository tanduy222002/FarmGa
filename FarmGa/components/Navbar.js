import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign';
import { default as FeatherIcon } from 'react-native-vector-icons/Feather'
import { default as MaterialIcon } from 'react-native-vector-icons/MaterialIcons'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'

const Navbar = () => {
  return (
    <View style={navStyle}>
      <Link to='/'>
        <FeatherIcon name='sun' size={30}/>
      </Link>
      <Link to='/schedule'>
        <MaterialIcon name='schedule' size={30}/>
      </Link>
      <Link to='/statistic'>
        <AntDesignIcon name='barschart' size={30}/>
      </Link>
      <Link to='/notification'>
        <FeatherIcon name='bell' size={30}/>
      </Link>
      <Link to='/account'>
        <MaterialCommunityIcon name='account-details' size={30}/>
      </Link>
    </View>
  )
}

const navStyle = StyleSheet.create({
    position: 'absolute',
    left: "0%",
    right: "0%",
    bottom: '0%',
    zIndex: 100,
    height: 100,
    padding: "5% 5%",
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#f0f9ff'
})

export default Navbar
