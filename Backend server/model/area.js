const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Data = new mongoose.Schema({
    date:Date,
    value: String,
    unit:String,
});
const Record = new mongoose.Schema({
  name: String,
  data: [Data],
  threshold:{
    lowerBound:String,
    upperBound:String,
},
})
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
  record:[Record],

});

module.exports = mongoose.model('Area', Area);