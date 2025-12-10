const express=require('express')
const {PORT} = require('./config')


const app=express()


app.get('/health',(req,res)=>{
    res.status(200).json({
        "health":"ok",
        "timestamp":new Date()
    })
})
console.log(PORT)
app.listen(PORT,()=>{
    console.log(`server running on http:localhost://${PORT}`)
})