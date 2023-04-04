import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { default as AntDesignIcon } from 'react-native-vector-icons/AntDesign'

const Area = ({ name, date, time, children}) => {
  return (
    <View style={area.container}>
        <Text style={area.title}>{name}</Text>
        <View style={area.scheduleTime}>
            <AntDesignIcon name="clockcircleo" size={20} color="#a1a1aa"/>
            <Text style={area.scheduleTime.text}>Time: {time}  Date: {date}</Text>
        </View>
        <View style={area.deviceWrapper}>
            {children}
        </View>
    </View>
  )
}

const area = StyleSheet.create({
    container: {
        borderColor: "#94a3b8",
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop:10,
        marginBottom:0,
        marginHorizontal: 10,
        width: "95%",
        backgroundColor:'#E0EEEF',


    },
    title: {
        color: "#22c55e",
        marginBottom: 3,
        fontWeight: 600,
        fontSize: 16,
        textTransform: 'uppercase'
    },
    deviceWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    scheduleTime: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        marginBottom: 5,
        gap: 10,
        text: {
            fontWeight: 600,
            color: "#0284c7"
        }
    }
})

export default Area