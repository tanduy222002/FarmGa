import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from "axios"
import Chart from './Chart'

const screenWidth = Dimensions.get("window").width - 48;

const StatisticArea = ({navigateToDetail, type}) => {
    return (
        <TouchableOpacity
            onPress={() => navigateToDetail(type)}
            style={[styles.limitWrapper,
            type==0&&{backgroundColor: 'rgba(241, 59, 59, 1)',},
            type==1&&{backgroundColor: 'rgba(0, 212, 255, 1)'},
            type==2&&{backgroundColor: 'rgba(242, 233, 117, 1)'}]}>
            <View style={{marginHorizontal: 24}}>
                {type==0&&<Text style={[styles.title, {color: '#fff',}]}>Nhiệt độ</Text>}
                {type==1&&<Text style={[styles.title, {color: '#1f1f1f',}]}>Độ ẩm</Text>}
                {type==2&&<Text style={[styles.title, {color: '#1f1f1f',}]}>Ánh sáng</Text>}
                {/* <Text style={{color: '#000',}}>3</Text> */}
            </View>
            <View style={{marginHorizontal: 24, borderRadius: 16, padding: 12, backgroundColor: '#fff', alignItems:'center', justifyContent: 'center'}}>
                {type==0&&<FontAwesome5 size={14} color='#000' name='temperature-high'/>}
                {type==1&&<Ionicons     size={14} color='#000' name='water-outline'/>}
                {type==2&&<Entypo       size={14} color='#000' name='light-up'/>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    limitWrapper: {
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        marginVertical: 24,
        marginHorizontal: 12,
        display: 'flex',
        flexDirection: 'row'

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24,
        height: 70,
    },
    rowWrapper: {
        paddingLeft: 24,
        backgroundColor: '#fff',
        borderColor: '#e3e3e3',
        marginTop: 8,
    },
        rowIconWrapper: {
        borderRadius: 16,
        backgroundColor: '#1A1528',
        width: 40,
        height: 40,
        marginRight: 12,
    },
    rowIcon: {
        margin: 10,
    },
    rowText: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000',
        paddingBottom: 6,
    },
    rowDescription: {
        fontSize: 12,
        fontWeight: '300',
        color: '#000',
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    valueWrapper: {
        padding: 8,
        backgroundColor: 'red',
        borderRadius: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    }
})

export default StatisticArea;
