import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Area = ({name, children}) => {
  return (
    <View style={area.container}>
        <Text style={area.title}>{name}</Text>
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
        marginTop:5,
        marginBottom:15,
        marginHorizontal: 10,
        width: "95%",

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
    }
})

export default Area