const express = require('express')
const axios = require('axios')
const { activateDevice } = require('../controller/activateSchedule')

const router = express.Router()


router.post('/:key', (req, res) => {
    const {key: deviceKey} = req.params
    axios.post(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/groups/control-pump/feeds/${deviceKey}/data`, {
        datum: {
            value: 17
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
    .then(res => console.log(res.data))
    .catch(err => console.error("error: ", err))

    res.send({Name: 1})
})

module.exports = router