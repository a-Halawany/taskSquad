// import mongoose 
const mongoose = require('mongoose')

// connect with database
try { mongoose.connect(process.env.DB_URL) } // DB_URL = mongodb://127.0.0.1:27017/dbName
catch (e) { console.log(e) }