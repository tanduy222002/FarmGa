require('dotenv').config()
const connectDB = require('../connectDB')
const axios = require('axios')
const Area = require('../model/area')
const Notification = require('../model/notification')

function activateSchedule() {    
    setInterval(async () => {
        // get all schedule
        const areaScheduleList = await getAllSchedule()
        areaScheduleList.forEach(schedule => {
            if(isOnTime(schedule)) {      // check each schedule time
                activateAllScheduleDevice(schedule.control)
                // set all device state
                // update schedule state    
            }
            if(readyToStart(schedule)) { // schedule is coming in 5 minutes
                let [hour, minute] = schedule.time.split(':')
                hour = parseInt(minute) - 5 >= 0 ? hour : (parseInt(hour)-1).toString()
                minute = parseInt(minute) - 5 ? (parseInt(minute) - 5).toString() : (60 - (5-parseInt(minute))).toString()

                createNotification(
                    schedule.date,
                    `${hour}:${minute}`,
                    `You have a irrigation schedule at ${schedule.time}, ${schedule.date}`
                )
            }

        })

    }, 10000)

} 

async function getAllSchedule() {
    const scheduleList = await Area.find({}).select('schedule').exec()
    return scheduleList.map(sched => sched.schedule).flat()
}

async function activateAllScheduleDevice(controlDeviceList) {
    const deviceActivationPromiseList = controlDeviceList.filter(device => device.duration > 0).map(device => activeDevice(device))

    Promise.all(deviceActivationPromiseList).then(res => console.log(res))

}

async function createNotification(date, time, message) {
    await Notification.create({
        date: date,
        time: time,
        message: message
    })
}

function isOnTime(schedule) {
    const {currentDate, currentTime} = getCurrentDateTime()
    // time is represented by hour:minute format
    const [scheduleHour, scheduleMinute] = schedule.time.split(":")
    const [currentHour, currentMinute] = currentTime.split(":")
    return (
        schedule.date == currentDate 
        && scheduleHour == currentHour 
        && Math.abs(parseInt(scheduleMinute) - parseInt(currentMinute) <= 10)
    ) 
} 

function readyToStart(schedule) {
    /*
    const {currentDate, currentTime} = getCurrentDateTime()
    // time is represented by hour:minute format
    const [scheduleHour, scheduleMinute] = schedule.time.split(":")
    const [currentHour, currentMinute] = currentTime.split(":")
    return (
        schedule.date == currentDate 
        && scheduleHour == currentHour 
        && parseInt(scheduleMinute) - parseInt(currentMinute) == 5
    ) 
    */
    return true
} 

async function activeDevice(device) {
    await setDeviceValue(device, device.level)

    await waitForMiliSecond(device.duration*1000)

    return await setDeviceValue(device, 0)
}

async function setDeviceValue(device, value) {
    return axios.post(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/groups/${device.groupKey}/feeds/${device.deviceKey}/data`, {
        datum: {
            value: value
        }
    }, {
        headers: {
            "X-AIO-Key": "aio_gbLe63lUfFVh6h5lNr6ls1JEOpwJ"
        }
    }, {
        params: {
            "x-aio-key": "aio_gbLe63lUfFVh6h5lNr6ls1JEOpwJ"
        }
    }).then(res => console.log(res.data))
}

function waitForMiliSecond(timeOut) {
    return new Promise(resolve => {
        setTimeout(() => resolve(123), timeOut)
    })
}

function getCurrentDateTime() {
    const temp = new Date()
    const currentTime = `${temp.getHours()}:${temp.getMinutes() + 1}`
    const currentDate = `${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()}`
    return {currentDate, currentTime}
}


module.exports = activateSchedule