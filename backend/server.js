const express = require('express')
const dontenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.get('/api/goals', (req,res) =>{
    res.status(200).json({ message:'Get goals' })
})

// app.post('/api/goals/:1',(req,res)=>{
//     res.send('Post goals')
// })









app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})