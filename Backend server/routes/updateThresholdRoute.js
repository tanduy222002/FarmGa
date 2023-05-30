const express = require('express')
const Area = require('../model/area')
const router = express.Router()
router.post('/threshold', async (req, res) => {
    console.log(req.body);
    let index;
    switch(req.body.type){
        case "Temperature":
            index=0;
            break;
        case "Humidity":
            index=1;
            break;
        case "Light":
            index=2;
            break;

    }
    console.log(index);
    const area = await Area.findOne({name: req.body.name}).exec()
    area.record[index].threshold.lowerBound=req.body.lowerBound;
    area.record[index].threshold.upperBound=req.body.upperBound;
    await area.save()
    res.send("ok")

}) 

module.exports = router