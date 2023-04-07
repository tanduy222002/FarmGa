const express = require('express')
const Area = require('../model/area')
const router = express.Router()

router.post('/create', async (req, res) => {
    console.log(req.body);
    const areaName = req.body.areaName
    const scheduleDate = req.body.date
    const scheduleTime = req.body.time
    const area = await Area.findOne({name: areaName}).exec()
    const areaControlDevices = area.availControlDevices.map(device => {
        return {...device, duration: 0, level: -1, mode: -1}
    })
    area.schedule.push({
        date: scheduleDate,
        time: scheduleTime,
        control: areaControlDevices
    })
    
    await area.save()
    
    res.json(area)
}) 


router.post('/device', async (req, res) => {
    const {areaId, scheduleId, deviceId, duration, level, mode} = req.body

    const area = await Area.findOne({_id : areaId}).exec()
    const schedIndex = area.schedule.findIndex(sched => sched._id.toString() === scheduleId)
    
    const devIndex = area.schedule[schedIndex].control.findIndex(device => device._id.toString() === deviceId)
    area.schedule[schedIndex].control[devIndex].duration = duration 
    area.schedule[schedIndex].control[devIndex].level = level 
    area.schedule[schedIndex].control[devIndex].mode = mode 
    
    await area.save()
    res.json(area.schedule[schedIndex].control[devIndex])
}) 






module.exports = router