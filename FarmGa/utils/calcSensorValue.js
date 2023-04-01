export function getAverageValue(areaRecord, option) {
    let valueLog = []
    for(let sensor of areaRecord) {
        if(sensor.type === option) valueLog = [...valueLog, ...sensor.data]
    }

    let avg = valueLog.reduce((prev, curDate) =>  prev + parseFloat(curDate.value), 0.0)/valueLog.length;
    return avg.toFixed(2)
}