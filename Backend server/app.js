const express = require('express')
const app = express()
require('dotenv').config();
const axios = require("axios");
const mongoose = require('mongoose');
const connectDB=require('./connecDB')
const Area=require('./model/area');
//get all sensors
connectDB();
Area.create({
    id: new mongoose.mongo.ObjectId(),
    name:'KV1',
    description:'trongsaurieng',
})
.then(() => console.log("success"))
.catch(err => console.log(err))

app.get('/sensors', (req, res) => {
    axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds`).then((response)=>res.send(response.data))
})
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})