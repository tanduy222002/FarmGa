const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors')
const connectDB=require('./connectDB')
const Area=require('./model/area');

const areaRoute = require('./routes/areaRoute')
const scheduleRoute = require('./routes/scheduleRoute')
const controlRoute = require('./routes/controlRoute')
const notificationRoute = require('./routes/notificationRoute')
const updateThresholdRoute = require('./routes/updateThresholdRoute')

const syncData =require('./controller/sync')
const { activateSchedule, createScheduleNotification } = require('./controller/activateSchedule')


connectDB();
// scheduler for real-time functionality 
syncData();
activateSchedule();
createScheduleNotification();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use("/area", areaRoute)

app.use("/schedule", scheduleRoute)

app.use("/control", controlRoute)

app.use("/notification", notificationRoute)

app.use("/update", updateThresholdRoute)

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})