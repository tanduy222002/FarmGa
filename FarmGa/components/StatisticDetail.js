import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from "axios"
import Chart from './Chart'

const screenWidth = Dimensions.get("window").width - 48;

const areaTemp = [
    {
        "_id": "642595564c366f9bb573d02d",
        "name": "KV1",
        "description": "SauRieng",
        "record": [
        {
            "threshold": {
                "lowerBound": "16",
                "upperBound": "39"
            },
            "name": "Temp_Sensor",
            "type": "Temperature",
            "data": [
                {
                    "date": "2023-06-01T11:23:25.388Z",
                    "value": "33.7",
                    "unit": "Celcius",
                    "_id": "64787fadf2b82ef3f376ae5d"
                },
                {
                    "date": "2023-06-01T09:58:36.849Z",
                    "value": "33.7",
                    "unit": "Celcius",
                    "_id": "64786bcc0ef2d43d0223975d"
                },
                {
                    "date": "2023-06-01T09:58:26.785Z",
                    "value": "33.7",
                    "unit": "Celcius",
                    "_id": "64786bc20ef2d43d02239747"
                },
                {
                    "date": "2023-06-01T09:58:16.838Z",
                    "value": "33.7",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-06-01T09:58:06.894Z",
                    "value": "33.7",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-31T09:58:16.838Z",
                    "value": "33.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-31T09:58:06.894Z",
                    "value": "33.0",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-30T09:58:26.838Z",
                    "value": "34.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-30T09:58:16.894Z",
                    "value": "33.9",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },

                {
                    "date": "2023-05-29T09:58:16.838Z",
                    "value": "33.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-29T09:58:06.894Z",
                    "value": "33.0",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-28T09:58:16.838Z",
                    "value": "37.8",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-28T09:58:06.894Z",
                    "value": "30.3",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-27T09:58:16.838Z",
                    "value": "39.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-27T09:58:06.894Z",
                    "value": "36.0",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },

                {
                    "date": "2023-05-26T09:58:16.838Z",
                    "value": "33.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-26T09:58:06.894Z",
                    "value": "33.0",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-25T09:58:16.838Z",
                    "value": "37.8",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-25T09:58:06.894Z",
                    "value": "30.3",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-24T09:58:16.838Z",
                    "value": "39.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-24T09:58:06.894Z",
                    "value": "36.0",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-23T09:58:16.838Z",
                    "value": "37.8",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-23T09:58:06.894Z",
                    "value": "30.3",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },
                {
                    "date": "2023-05-22T09:58:16.838Z",
                    "value": "39.2",
                    "unit": "Celcius",
                    "_id": "64786bb80ef2d43d02239731"
                },
                {
                    "date": "2023-05-22T09:58:06.894Z",
                    "value": "36.0",
                    "unit": "Celcius",
                    "_id": "64786bae0ef2d43d0223971b"
                },

            ],
            "_id": "642595564c366f9bb573d02e"
        },
        {
            "threshold": {
                "lowerBound": "43",
                "upperBound": "82"
            },
            "name": "Humidity_Sensor",
            "type": "Humidity",
            "data": [
                {
                    "date": "2023-06-01T11:23:25.388Z",
                    "value": "52.4",
                    "unit": "%",
                    "_id": "64787fadf2b82ef3f376ae5e"
                },
                {
                    "date": "2023-06-01T09:58:36.849Z",
                    "value": "52.4",
                    "unit": "%",
                    "_id": "64786bcc0ef2d43d0223975e"
                },
                {
                    "date": "2023-06-01T09:58:26.785Z",
                    "value": "52.4",
                    "unit": "%",
                    "_id": "64786bc20ef2d43d02239748"
                },
            ],
            "_id": "642595564c366f9bb573d032"
        },
        {
            "threshold": {
                "lowerBound": "43",
                "upperBound": "89"
            },
            "name": "Light_Sensor",
            "type": "Light",
            "data": [
                {
                    "date": "2023-06-01T11:23:25.388Z",
                    "value": "59",
                    "unit": "lux",
                    "_id": "64787fadf2b82ef3f376ae5f"
                },
                {
                    "date": "2023-06-01T09:58:36.849Z",
                    "value": "59",
                    "unit": "lux",
                    "_id": "64786bcc0ef2d43d0223975f"
                },
                {
                    "date": "2023-06-01T09:58:26.785Z",
                    "value": "59",
                    "unit": "lux",
                    "_id": "64786bc20ef2d43d02239749"
                },
            ],
            "_id": "642595564c366f9bb573d036"
            }
        ],
        "__v": 3443,
        "availControlDevices": [
        {
            "name": "Pump 1",
            "type": "Control_Pump",
            "groupKey": "default",
            "_id": "642fc1728845a1f308cf8437",
            "deviceKey": "pump"
        }
        ],
        "schedule": [
        {
            "date": "7/4/2023",
            "time": "14:10",
            "control": [
            {
                "name": "Pump 1",
                "type": "Control_Pump",
                "groupKey": "default",
                "duration": 3,
                "level": 2,
                "mode": "Spray",
                "_id": "642fc1728845a1f308cf8437",
                "deviceKey": "pump"
            }
            ],
            "_id": "642fc1f44b2121224483fb4b"
        }
        ]
    },
]

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

function formatDate(date){
    // return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    return date.toISOString().split('T')[0];
}

function getValueListWithDate(date, data) {
    return data.filter((item)=> formatDate(new Date(item.date)) == date)
            //    .map((item) => {item.value})
}

function getLastWeekDate(){
    let prevMonday = new Date();

    if (prevMonday.getUTCDay() == 0) prevMonday.setUTCDate(prevMonday.getUTCDate() - 7)
    else prevMonday.setUTCDate(prevMonday.getUTCDate() - (prevMonday.getUTCDay() - 1) - 7);
    let lastWeek = [formatDate(prevMonday)]

    for (let i = 2; i <= 7; i ++){
        if (i==2) {
            // console.log(formatDate(prevMonday))
            nextDay = new Date(prevMonday)
        }
        else {
            nextDay = new Date(nextDay)
        }
        nextDay.setDate(nextDay.getDate() + 1);
        lastWeek.push(formatDate(nextDay))
        // console.log(formatDate(nextDay));
    }

    return lastWeek

}

function getLastWeekData(data) {
    const lastWeekDate = getLastWeekDate()
    let lastWeekData = []

    for (let i = 0; i <= 6; i ++){
        valueList = getValueListWithDate(lastWeekDate[i], data)

        lastWeekData.push({
            date: lastWeekDate[i],
            valueList: valueList
        })
    }

    // console.log(lastWeekData)
    return lastWeekData

}

function getLastWeekAvg(lastWeekData) {
    return lastWeekData.map(item => (item.valueList.map(item => parseFloat(item.value))
                                                  .reduce((x,y) => x+y, 0) / (valueList.length!=0?valueList.length:1)).toFixed(1))

}

const StatisticDetail = ({type, navigateToDaily}) => {
    const [areaList,setAreaList] = useState(undefined)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://10.230.209.145:3000/area/all`)
             .then((res) => {console.log('success') ;setAreaList(res.data)})
             .catch(() => {console.log("fail");setError(true)})
             .finally(() => {console.log('end') ;setLoading(false)})
    },[])
    const lastWeekData = getLastWeekData(areaList[0].record[type].data)
    // const lastWeekData = getLastWeekData(areaTemp[0].record[type].data)
    const lastWeekAvg = getLastWeekAvg(lastWeekData)
    // console.log(lastWeekData)
    // console.log(lastWeekAvg)
    return (
        <ScrollView style={{backgroundColor: '#fafafa'}}>
            <Chart type={type} data={lastWeekAvg}></Chart>

            <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: '700', margin: 16}}>Tuần trước</Text>
                </View>
                {lastWeekData.map(({}, index) => {
                    return (
                        <View
                        key={index}
                        style={[
                            styles.rowWrapper,
                            index === 0 && { borderTopWidth: 0, marginTop: 0 },
                        ]}>
                        <TouchableOpacity onPress={() => navigateToDaily(lastWeekData[index])}>
                            <View style={styles.row}>
                            <View style={styles.rowText}>
                                <Text style={styles.rowLabel}>{days[index]}</Text>
                                <Text style={styles.rowDescription}>{lastWeekData[index].date}</Text>
                            </View>

                            <View style={styles.rowSpacer} />

                            <View style={styles.valueWrapper}>
                                <Text style={{color: '#fff'}}>{lastWeekAvg[index]}°C</Text>
                            </View>
                            {
                                <FeatherIcon
                                color="#ababab"
                                name="chevron-right"
                                size={22}
                                style={{marginLeft: 10}}
                            />
                            }
                            </View>
                        </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </ScrollView>

    )
}
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

export default StatisticDetail;
