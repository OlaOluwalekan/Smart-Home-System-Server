const express = require('express')
const { contactUsEmail } = require('../controllers/emailControllers')
const router = express.Router()

router.route('/contact-us').post(contactUsEmail)

module.exports = router
