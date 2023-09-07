const express = require('express')
const colors = require('colors')
const dontenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})