import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';

const screenWidth = Dimensions.get("window").width - 48;

const Chart = ({type, data}) => {
    let color = '#fff'
    let lineColor = (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
    let labelColor = (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
    let legend = 'Nhiệt độ'
    if (type == 0) {
        color = '#f13b3b'
        labelColor = (opacity = 1) => `rgba(100, 0, 0, ${opacity})`
        lineColor = (opacity = 1) => `rgba(241, 59, 59, ${opacity})`
        legend = 'Nhiệt độ'

    }
    else if (type == 1) {
        color = '#00d4ff'
        labelColor = (opacity = 1) => `rgba(4,0,110, ${opacity})`
        lineColor = (opacity = 1) => `rgba(0, 212, 255, ${opacity})`
        legend = 'Độ ẩm'

    }
    else if (type == 2) {
        color = '#f2e975'
        labelColor = (opacity = 1) => `rgba(106,110,0, ${opacity})`
        lineColor = (opacity = 1) => `rgba(242, 233, 117, ${opacity})`
        legend = 'Ánh sáng'
    }

    const chartData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            // data: [30, 34, 25, 39, 37, 29, 45],
            data: data,
            color: lineColor, // optional
            strokeWidth: 3, // optional
            stroke: color,
          }
        ],
        legend: [legend] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#CCC",
        backgroundGradientFromOpacity: 0.4,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        // backgroundColor: "#FFF",
        fillShadowGradientFrom: color,
        fillShadowGradientFromOpacity: 0.8,
        fillShadowGradientFromOffset: 0.2,
        fillShadowGradientTo: '#fff',
        fillShadowGradientToOpacity: 0.7,
        fillShadowGradientToOffset: 0.9,
        color: lineColor,
        strokeWidth: 3, // optional, default 3
        barRadius: 16,
        labelColor: labelColor,
        // propsForBackgroundLines: {display: 'none'},
        useShadowColorFromDataset: false, // optional

    };
    return (
        <View style={{margin: 24}}>
            <Text style={{marginBottom: 16, color: color, fontWeight: '700', fontSize: 24}}>{legend}</Text>
            <LineChart
                style={{borderRadius: 16}}
                data={chartData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                withDots= {false}
                withVerticalLabels= {true}
                withVerticalLines= {false}
                formatYLabel= {(value) => {return Number(value)}}
                fromZero={true}
                segments={5}
                // onDataPointClick={showData}

            />
        </View>

    )
};



const styles = StyleSheet.create({

})

export default Chart;
