

const Area=require('../model/area');
const axios = require("axios");
const mongoose = require('mongoose');

const updateObject =(area,index,value,Unit,time)=>{
    area.record[index].data.unshift({
        date:time,
        value: value,
        unit:Unit})
    area.record[index].data.pop();

}

const cloudSync = async()=>{
    let temp_value,light_value,humidity_value ={};
    await axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds/${process.env.TEMP_FEED_KEY}`).then((response)=> temp_value = response.data.last_value)

    await axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds/${process.env.LIGHT_FEED_KEY}`).then((response)=> light_value = response.data.last_value)

    await axios.get(`https://io.adafruit.com/api/v2/${process.env.USER_NAME}/feeds/${process.env.HUMIDITY_FEED_KEY}`).then((response)=> humidity_value = response.data.last_value)

    let area = await Area.findOne({ name: 'KV1' }).exec();
    currenTime = new Date();
    updateObject(area,0,temp_value,"Celcius",currenTime);
    updateObject(area,1,humidity_value,"%",currenTime);
    updateObject(area,2,light_value,"%",currenTime);
    await area.save();
    console.log('sync with mongo')
}

const syncData =()=>{
    setInterval(cloudSync, process.env.SYNC_TIME);

}
module.exports= syncData