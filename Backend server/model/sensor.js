const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Data = new mongoose.Schema({
    date:Date,
    value: String,
    unit:String,
});

const BaseSensorSchema = new mongoose.Schema({
    name: String,
    type: String, 
})


const RecordSensorSchema = new mongoose.Schema({
    ...BaseSensorSchema.obj,
    data: [Data],
    threshold:{
        lowerBound:String,
        upperBound:String,
    },
})

const ControlSensorSchema = new Schema({
    ...BaseSensorSchema.obj,
    duration: Number,
    level: Number,
    mode: String,
})

module.exports = {
    BaseSensor: mongoose.model("BaseSensor", BaseSensorSchema),
    RecordSensor: mongoose.model("RecordSensor", RecordSensorSchema),
    ControlSensor: mongoose.model("ControlSensor", ControlSensorSchema),
}