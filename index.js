require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./Connection/db')
const epServer = express()
epServer.use(cors())
epServer.use(express.json())
epServer.use(router)
epServer.use('/uploads', express.static('./uploads'))
const PORT = 3000 || process.env.PORT
epServer.listen(PORT,()=>{
    console.log(`EPSERVER STARTS AT ${PORT}..`);
})

epServer.get('/',(req,res)=>{
    res.send(`<h1>EP SERVER STARTED ....waiting for client req......</h1>`)
})