const express = require("express")
const Area = require('../model/area')

const router = express.Router()


router.get('/all', async (req, res) => {
    const areaList = await Area.find({}).exec()
    res.json(areaList)
})

module.exports = router