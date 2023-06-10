const express = require('express')
const app = express()
require('dotenv').config();
const axios = require("axios");
const mongoose = require('mongoose');
const cors = require('cors')
const connectDB=require('./connectDB')
const Area=require('./model/area');

const areaRoute = require('./routes/areaRoute')
const scheduleRoute = require('./routes/scheduleRoute')
const controlRoute = require('./routes/controlRoute')
const updateThresholdRoute = require('./routes/updateThresholdRoute')

const syncData =require('./controller/sync')
const activateSchedule = require('./controller/activateSchedule')


connectDB();
syncData();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use("/area", areaRoute)

app.use("/schedule", scheduleRoute)

app.use("/control", controlRoute)

app.use("/update", updateThresholdRoute)




app.get('/areas', async (req, res) => {
    let KV = await Area.find({}).exec()
    res.send(KV)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})