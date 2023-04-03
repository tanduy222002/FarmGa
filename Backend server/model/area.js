const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Data = new mongoose.Schema({
    date: Date,
    value: String,
    unit:String,
});

const BaseSensor = new mongoose.Schema({
  name: String,
  type: String,
})


const RecordSensor = new mongoose.Schema({
  ...BaseSensor.obj,
  data: [Data],
  threshold:{
    lowerBound:String,
    upperBound:String,
  },
})

const ControlSensor = new Schema({
  ...BaseSensor.obj,
  duration: Number,
  level: Number,
  mode: String,
})


const Area = new Schema({
  name: String,
  description: String,
  schedule: [{
    date: String,
    time: String,
    control: [ControlSensor]
  }],
  record:[RecordSensor],
  availControlDevices: [BaseSensor]

});

module.exports = mongoose.model('Area', Area);