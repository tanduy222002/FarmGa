const express = require("express")
const Area = require('../model/area')

const router = express.Router()


router.get('/all', async (req, res) => {
    console.log('test')
    const areaList = await Area.find({}).exec()
    res.json(areaList)
    
})

router.get('/name', async (req, res) => {
    const areaNameList = await Area.find({}).select("name").exec()
    res.json(areaNameList)
})

module.exports = router