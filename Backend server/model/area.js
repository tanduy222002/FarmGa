const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Notifications = new Schema({
    date:Date,
    message:String,
    type:String,
});
const Data = new Schema({
    date:Date,
    value: String,
    unit:String,
});
const Area = new Schema({
  id: ObjectId,
  name: String,
  description: String,
  schedule:{
    control:{
        level:String,
        model:String,
    },
  },
  record:{
    data: [Data],
    threshold:{
        lowerBound:String,
        UpperBound:String,
    },

  },
});
const Sensor = new Schema({
    id:ObjectId,
    type:String,
    name:String,
});

module.exports = mongoose.model('Area', Area);