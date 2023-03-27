import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Button = ({icon, bg, borderColor, textContent}) => {
    const button = StyleSheet.create({
        backgroundColor: bg,
        flexDirection: "row",
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingVertical: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: borderColor,
        text: {
            fontWeight: 500,
            color: "#ffffff"
        }
    })
    
    return (
        <Pressable style={button}>
            {icon}
            <Text style={button.text}>
                {textContent}
            </Text>
        </Pressable>
  )
}



export default Button