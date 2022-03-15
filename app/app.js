const express = require('express')
const app = express()

// import middlewares
const mainRoutes = require('../routes/mainRoute')

// get enviromants
require('dotenv').config()
// Connect to database
require('../models/dbConnection/connection')


// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


app.use('/', mainRoutes)



module.exports = app