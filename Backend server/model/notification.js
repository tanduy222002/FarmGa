const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    date: String,
    time: String,
    message: String,
});

module.exports = mongoose.model('Notification', NotificationSchema);