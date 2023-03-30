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
//     name:'KV3',
//     description:'TraiGiDo',
//     record:[{
//         name:"Temp_Sensor",
//         type:"Temperature",
//         data:[{
//             date: new Date(),
//             value:"25",
//             unit:"Celsius",
//         },
//         {
//             date: new Date(),
//             value:"31",
//             unit:"Celsius",
//         },
//         {
//             date: new Date(),
//             value:"39",
//             unit:"Celsius",
//         },
//     ],
//         threshold:{
//             lowerBound:"10",
//             upperBound:"35",
//         }
//     },
//     {
//         name:"Humidity_Sensor",
//         type:"Humidity",
//         data:[{
//             date: new Date(),
//             value:"99",
//             unit:"%",
//         },
//         {
//             date: new Date(),
//             value:"51",
//             unit:"%",
//         },
//         {
//             date: new Date(),
//             value:"49",
//             unit:"%",
//         },
//     ],
//         threshold:{
//             lowerBound:"20",
//             upperBound:"80",
//         }
//     },
//     {
//         name:"Light_Sensor",
//         type:"Light",
//         data:[{
//             date: new Date(),
//             value:"120",
//             unit:"lux",
//         },
//         {
//             date: new Date(),
//             value:"182",
//             unit:"lux",
//         },
//         {
//             date: new Date(),
//             value:"100",
//             unit:"lux",
//         },
//     ],
//         threshold:{
//             lowerBound:"80",
//             upperBound:"300",
//         }
//     },
// ]
// })
// .then(() => console.log("success"))
// .catch(err => console.log(err))

app.get('/sensors', (req, res) => {
    axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds`).then((response)=>res.send(response.data))
})
app.get('/areas',(req,res)=>{
    let KV = Area.find({})
    .then((KV)=>res.send(KV))
    .catch(err => console.log(err))
})
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})