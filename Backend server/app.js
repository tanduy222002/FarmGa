require('dotenv').config();
const express = require('express')
const app = express()
const axios = require("axios");
const mongoose = require('mongoose');
const connectDB = require('./connecDB')
const Area = require('./model/area');
const scheduleRoute = require('./routes/schedule')
const areaRoute = require('./routes/areaRoute')

connectDB();


app.use(express.json())

app.use('/schedule', scheduleRoute)

app.use('/area', areaRoute)

app.get('/sensors', (req, res) => {
    axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds`).then((response)=>res.send(response.data))
})

app.get('/areas', async (req, res) => {
    let KV = await Area.find({}).exec()
    res.send(KV)
})
app.get('/areas/name', async (req, res) => {
    let areaList = await Area.find({}).select("name").exec()
    res.send(areaList)
})
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})