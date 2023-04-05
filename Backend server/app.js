require('dotenv').config();
const express = require('express')
const app = express()
require('dotenv').config();
const axios = require("axios");
const mongoose = require('mongoose');
const cors = require('cors')
const connectDB=require('./connecDB')
const Area=require('./model/area');
const areaRoute = require('./routes/areaRoute')
const scheduleRoute = require('./routes/scheduleRoute')
const controlRoute = require('./routes/controlRoute')

connectDB();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/sensors', (req, res) => {
    axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds`).then((response)=>res.send(response.data))
})

app.use("/area", areaRoute)

app.use("/schedule", scheduleRoute)

app.use("/control", controlRoute)

app.get('/areas', async (req, res) => {
    let KV = await Area.find({}).exec()
    res.send(KV)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})