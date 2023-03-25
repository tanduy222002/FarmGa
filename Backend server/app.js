const express = require('express')
const app = express()
require('dotenv').config();
const axios = require("axios")
//get all sensors
app.get('/sensors', (req, res) => {
    axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds`).then((response)=>res.send(response.data))
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})