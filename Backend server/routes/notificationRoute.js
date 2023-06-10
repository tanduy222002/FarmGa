const express = require('express')
const Notification = require('../model/notification')

const router = express.Router()


router.get('/', async (req, res) => {
    const notifications = await Notification.find({})
    res.json(notifications)
})

router.delete('/:id', async (req, res) => {
    const notificationId = req.params.id
    await Notification.deleteOne({_id: notificationId})
    res.json({message : "delete success"})
})

module.exports = router