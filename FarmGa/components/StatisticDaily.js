import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width - 48;

const StatisticDaily = ({type, data}) => {
    return (
        <ScrollView style={{backgroundColor: '#fafafa'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: '700', margin: 16}}>{data.date}</Text>
            </View>
            {data.valueList.length==0&&<Text style={{fontSize: 16, alignSelf:'center'}}>Không có dữ liệu ở đây</Text>}
            {data.valueList.map((item, index) => {
                return (
                    <View
                        key={index}
                        style={[
                            styles.rowWrapper,
                            index === 0 && { borderTopWidth: 0, marginTop: 0 },
                        ]}>
                        <View>
                            <View style={styles.row}>
                                <View style={styles.rowText}>
                                    <Text style={styles.rowLabel}>{new Date(item.date).toLocaleTimeString('en-US')}</Text>
                                </View>

                                <View style={styles.rowSpacer} />

                                <View style={styles.valueWrapper}>
                                    <Text style={{color: '#fff'}}>{item.value}°C</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    limitWrapper: {
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: 'rgba(241, 59, 59, 1)',
        marginVertical: 24,
        marginHorizontal: 12,
        flex: 1,
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
    }
})

export default StatisticDaily;
