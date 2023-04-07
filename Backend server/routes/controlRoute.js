const express = require('express')
const axios = require('axios')
const Area = require('../model/area')
const activateDevice = require('../controller/activateSchedule')

const router = express.Router()


router.post('/activate', async (req, res) => {
    const device = req.body
    const deviceRes = await activateDevice(device)


    res.send({Name: 1})
})
/**
 *     const temp = await Area.updateOne({name: "KV1"}, {
        $push: {
            availControlDevices: {
                name: "Pump 1",
                type: "Control_Pump",
                groupKey: "default",
                deviceKey: "pump",
            }
        }
    }).exec()
 */

module.exports = router