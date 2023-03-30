const express = require('express')
const app = express()
require('dotenv').config();
const axios = require("axios");
const mongoose = require('mongoose');
const connectDB=require('./connecDB')
const Area=require('./model/area');
//get all sensors
connectDB();
// Area.create({
//     name:'KV1',
//     description:'SauRieng',
//     record:{
//         name:"Temperature1",
//         data:[{
//             date: new Date(),
//             value:"30",
//             unit:"Celsius",
//         },
//         {
//             date: new Date(),
//             value:"31",
//             unit:"Celsius",
//         },
//         {
//             date: new Date(),
//             value:"32",
//             unit:"Celsius",
//         },
//     ],
//         threshold:{
//             lowerBound:"10",
//             upperBound:"35",
//         }
//     },
// })
// .then(() => console.log("success"))
// .catch(err => console.log(err))

app.get('/sensors', (req, res) => {
    axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds`).then((response)=>res.send(response.data))
})
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})