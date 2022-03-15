// import controller functions
const mainController = require('../app/controllers/mainController')

const router = require('express').Router()


// start routes
router.post('/api', mainController.main)


// export routes to app.js for use
module.exports = router