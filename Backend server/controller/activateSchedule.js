require('dotenv').config()
const connectDB = require('../connecDB')
const Area = require('../model/area')

async function activateSchedule() {
    await connectDB()
    
    while(true) {
        // get all schedule
        const areaScheduleList = await getAllSchedule()
        areaScheduleList.forEach(schedule => {
            if(isOnTime(schedule)) {      // check each schedule time
                activateAllScheduleDevice(schedule.control)
                // set all device state
                // update schedule state    
            }
        })

        await waitForMiliSecond(10000)
        console.log("iteration end")
    }
}

async function getAllSchedule() {
    const scheduleList = await Area.find({}).select('schedule').exec()
    return scheduleList.map(sched => sched.schedule).flat()
}

async function activateAllScheduleDevice(controlDeviceList) {
    const deviceActivationPromiseList = controlDeviceList.filter(device => device.duration > 0).map(device => activeDevice(device))

    Promise.all(deviceActivationPromiseList).then(res => console.log(res))

}

function isOnTime(schedule) {
    console.log(getCurrentDateTime)
    const {currentDate, currentTime} = getCurrentDateTime()
    // time is represented by hour:minute format
    const [scheduleHour, scheduleMinute] = schedule.time.split(":")
    const [currentHour, currentMinute] = currentTime.split(":")
    if(
        schedule.date == currentDate 
        && scheduleHour == currentHour 
        && Math.abs(parseInt(scheduleMinute) - parseInt(currentMinute) <= 10)
    ) return true
    return false
} 

async function activeDevice(device) {
    await setDeviceValue(device, device.level)

    await waitForMiliSecond(device.duration)

    return await setDeviceValue(device, device.level)
}

async function setDeviceValue(device, value) {
    return await axios.post(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/groups/control-pump/feeds/${device.deviceKey}/data`, {
        datum: {
            value: value
        }
    }, {
        headers: {
            "X-AIO-Key": "aio_MCMy71JIH3aclwI3bQi6dzrhg6NS"
        }
    }, {
        params: {
            "x-aio-key": "aio_MCMy71JIH3aclwI3bQi6dzrhg6NS"
        }
    })
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

activateSchedule()

module.exports = { activeDevice }