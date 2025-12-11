const express=require('express')
const {CONFIG} = require('./config')
const cors=require('cors')
const routes= require('./routes')


const app=express()
app.use(express.json())



app.get('/health',(req,res)=>{
    res.status(200).json({
        "health":"ok",
        "timestamp":new Date()
    })
})

app.use('/api',routes)
app.listen(CONFIG.PORT,()=>{
    console.log(`server running on http://localhost:${CONFIG.PORT}`)
})